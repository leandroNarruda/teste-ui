import type { SVGProps } from 'react'
const SvgFoldSolido = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="current"
    viewBox="0 0 17 17"
    {...props}
  >
    <rect width={16.14} height={16.14} x={0.755} rx={1} />
    <path d="M3.824 9.07v-2h10v2z" />
    <path d="M7.825 3.07h2v10h-2z" />
  </svg>
)
export default SvgFoldSolido
