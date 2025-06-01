import type { SVGProps } from 'react'
const SvgSquareUserOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 41"
    {...props}
  >
    <g clipPath="url(#square-user-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M34.286 5.01c.785 0 1.428.643 1.428 1.429V35.01c0 .786-.643 1.428-1.428 1.428h-.09c-.705-5.633-5.508-10-11.339-10h-5.714c-5.83 0-10.634 4.367-11.34 10h-.089a1.433 1.433 0 0 1-1.428-1.428V6.439c0-.786.643-1.429 1.428-1.429zm-4.429 31.429H10.143a7.146 7.146 0 0 1 7-5.715h5.714a7.146 7.146 0 0 1 7 5.714M5.714.723A5.72 5.72 0 0 0 0 6.44V35.01a5.72 5.72 0 0 0 5.714 5.714h28.572A5.72 5.72 0 0 0 40 35.01V6.439A5.72 5.72 0 0 0 34.286.724zM20 19.296a3.571 3.571 0 1 1 0-7.143 3.571 3.571 0 0 1 0 7.143m-7.857-3.572a7.857 7.857 0 1 0 15.714 0 7.857 7.857 0 0 0-15.714 0"
      />
    </g>
    <defs>
      <clipPath id="square-user-outline_svg__a">
        <path fill="#fff" d="M0 .724h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgSquareUserOutline
