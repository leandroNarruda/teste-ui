import type { SVGProps } from 'react'
const SvgMessageTextOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#message-text-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M16.25 32.5c0-2.07-1.68-3.75-3.75-3.75H5c-.687 0-1.25-.562-1.25-1.25V5c0-.687.563-1.25 1.25-1.25h30c.688 0 1.25.563 1.25 1.25v22.5c0 .688-.562 1.25-1.25 1.25H24.164c-.812 0-1.602.266-2.25.75l-5.664 4.25zm-.016 5.953.016-.016 7.914-5.937H35c2.758 0 5-2.242 5-5V5c0-2.758-2.242-5-5-5H5C2.242 0 0 2.242 0 5v22.5c0 2.758 2.242 5 5 5h7.5v6.25c0 .477.266.906.688 1.117s.93.164 1.312-.117l1.336-1zM13.125 8.75a1.87 1.87 0 0 0-1.875 1.875 1.87 1.87 0 0 0 1.875 1.875h5v10.625A1.87 1.87 0 0 0 20 25a1.87 1.87 0 0 0 1.875-1.875V12.5h5a1.87 1.87 0 0 0 1.875-1.875 1.87 1.87 0 0 0-1.875-1.875h-13.75"
      />
    </g>
    <defs>
      <clipPath id="message-text-outline_svg__a">
        <path fill="#fff" d="M0 0h40v39.998H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgMessageTextOutline
