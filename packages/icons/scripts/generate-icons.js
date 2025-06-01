const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require('worker_threads')
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const os = require('os')

// Função auxiliar para converter o nome do arquivo em nome de componente
const getComponentName = (filename) => {
  return filename
    .replace('.svg', '')
    .replace(/\s+/g, '')
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

if (isMainThread) {
  const ASSETS_DIR = path.join(__dirname, '../src/assets')
  const ICONS_DIR = path.join(__dirname, '../src/components/icons')
  const INDEX_FILE = path.join(__dirname, '../src/components/icons/index.ts')

  if (!fs.existsSync(ICONS_DIR)) {
    fs.mkdirSync(ICONS_DIR, { recursive: true })
  }

  // Pega todos os SVGs da pasta assets (exceto os copy)
  const svgFiles = fs
    .readdirSync(ASSETS_DIR)
    .filter((file) => file.endsWith('.svg') && !file.endsWith('copy.svg'))

  // Pega todos os componentes existentes
  const existingComponents = fs
    .readdirSync(ICONS_DIR)
    .filter((file) => file.endsWith('.tsx'))
    .map((file) => file.replace('.tsx', ''))

  // Filtra apenas os SVGs que não têm componente gerado
  const svgFilesToProcess = svgFiles.filter((svgFile) => {
    const componentName = getComponentName(svgFile)
    return !existingComponents.includes(componentName)
  })

  if (svgFilesToProcess.length === 0) {
    console.log('Nenhum novo ícone para processar!')
    return
  }

  console.log(
    `Encontrados ${svgFilesToProcess.length} novos ícones para processar...`,
  )

  const numCPUs = os.cpus().length
  const filesPerWorker = Math.ceil(svgFilesToProcess.length / numCPUs)
  const fileGroups = Array.from({ length: numCPUs }, (_, i) =>
    svgFilesToProcess.slice(i * filesPerWorker, (i + 1) * filesPerWorker),
  ).filter((group) => group.length > 0)

  console.log(`Iniciando conversão com ${fileGroups.length} workers...`)

  const workerPromises = fileGroups.map(
    (files) =>
      new Promise((resolve, reject) => {
        const worker = new Worker(__filename, {
          workerData: {
            files,
            ASSETS_DIR,
            ICONS_DIR,
          },
        })

        worker.on('message', resolve)
        worker.on('error', reject)
        worker.on('exit', (code) => {
          if (code !== 0)
            reject(new Error(`Worker stopped with exit code ${code}`))
        })
      }),
  )

  Promise.all(workerPromises)
    .then(() => {
      // Gera o index.ts com TODOS os componentes (existentes + novos)
      const allSvgFiles = fs
        .readdirSync(ASSETS_DIR)
        .filter((file) => file.endsWith('.svg') && !file.endsWith('copy.svg'))

      const indexContent = allSvgFiles
        .map((svgFile) => {
          const componentName = getComponentName(svgFile)
          return `export { default as ${componentName} } from './${componentName}'`
        })
        .join('\n')

      fs.writeFileSync(INDEX_FILE, indexContent)

      // Formata apenas os novos arquivos
      if (svgFilesToProcess.length > 0) {
        console.log('Formatando novos arquivos...')
        const newComponentPaths = svgFilesToProcess
          .map((file) => getComponentName(file))
          .map((componentName) => path.join(ICONS_DIR, `${componentName}.tsx`))
          .join(' ')

        execSync(`npm run lint -- --fix ${newComponentPaths}`, {
          stdio: 'inherit',
        })
      }

      console.log('Geração de ícones concluída!')
      if (svgFilesToProcess.length > 0) {
        console.log('Novos ícones processados:')
        svgFilesToProcess.forEach((file) => {
          console.log(`- ${file} -> ${getComponentName(file)}`)
        })
      }
    })
    .catch((err) => console.error('Erro durante a conversão:', err))
} else {
  const { files, ASSETS_DIR, ICONS_DIR } = workerData

  files.forEach((svgFile) => {
    const componentName = getComponentName(svgFile)

    console.log(`Convertendo ${svgFile} para ${componentName}...`)

    try {
      const svgPath = `"${path.join(ASSETS_DIR, svgFile)}"`
      const outDir = `"${ICONS_DIR}"`

      execSync(
        `npx @svgr/cli ${svgPath} --out-dir ${outDir} --typescript --jsx-runtime automatic --icon --no-dimensions --replace-attr-values "#000=currentColor"`,
        { stdio: 'inherit', shell: true },
      )

      const generatedFile = path.join(
        ICONS_DIR,
        svgFile.replace('.svg', '.tsx'),
      )
      const tempOutputPath = path.join(ICONS_DIR, `${componentName}.tsx`)

      if (fs.existsSync(generatedFile) && generatedFile !== tempOutputPath) {
        fs.renameSync(generatedFile, tempOutputPath)
      }
    } catch (error) {
      console.error(`Erro ao converter ${svgFile}:`, error)
    }
  })

  parentPort.postMessage('done')
}
