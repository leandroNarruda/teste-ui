import type { SVGProps } from 'react'
const SvgCircleQuestionOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#circle-question-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M36.25 20a16.25 16.25 0 1 0-32.5 0 16.25 16.25 0 0 0 32.5 0M0 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0m13.266-7.086A4.38 4.38 0 0 1 17.39 10h4.554a4.93 4.93 0 0 1 4.93 4.93 4.95 4.95 0 0 1-2.477 4.28l-2.523 1.446A1.88 1.88 0 0 1 20 22.5a1.87 1.87 0 0 1-1.875-1.875V19.57c0-.672.36-1.289.945-1.625l3.461-1.984a1.179 1.179 0 0 0-.586-2.203h-4.554c-.266 0-.5.164-.586.414l-.032.094a1.875 1.875 0 0 1-2.39 1.14 1.88 1.88 0 0 1-1.14-2.39l.03-.094zM17.5 27.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"
      />
    </g>
    <defs>
      <clipPath id="circle-question-outline_svg__a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCircleQuestionOutline
