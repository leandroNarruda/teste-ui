import type { SVGProps } from 'react'
const SvgMessageQuestionOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#message-question-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M16.25 32.5c0-2.07-1.68-3.75-3.75-3.75H5c-.687 0-1.25-.562-1.25-1.25V5c0-.687.563-1.25 1.25-1.25h30c.688 0 1.25.563 1.25 1.25v22.5c0 .688-.562 1.25-1.25 1.25H24.164c-.812 0-1.602.266-2.25.75l-5.664 4.25zm-.016 5.953.016-.016 7.914-5.937H35c2.758 0 5-2.242 5-5V5c0-2.758-2.242-5-5-5H5C2.242 0 0 2.242 0 5v22.5c0 2.758 2.242 5 5 5h7.5v6.25c0 .477.266.906.688 1.117s.93.164 1.312-.117l1.336-1zM13.266 9.164l-.032.094a1.872 1.872 0 1 0 3.531 1.25l.032-.094a.62.62 0 0 1 .586-.414h4.555a1.179 1.179 0 0 1 .585 2.203l-3.46 1.985a1.87 1.87 0 0 0-.946 1.624v1.063a1.87 1.87 0 0 0 1.875 1.875c1.024 0 1.86-.82 1.875-1.844l2.524-1.445a4.95 4.95 0 0 0 2.476-4.281 4.93 4.93 0 0 0-4.93-4.93h-4.546a4.38 4.38 0 0 0-4.125 2.914M22.5 23.75a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0"
      />
    </g>
    <defs>
      <clipPath id="message-question-outline_svg__a">
        <path fill="#fff" d="M0 0h40v39.998H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgMessageQuestionOutline
