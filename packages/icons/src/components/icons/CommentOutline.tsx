import type { SVGProps } from 'react'
const SvgCommentOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 41 41"
    {...props}
  >
    <g clipPath="url(#comment-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M20.939 3C9.892 3 .941 10.273.941 19.25c0 3.721 1.556 7.129 4.134 9.86-1.163 3.085-3.584 5.693-3.623 5.722a1.88 1.88 0 0 0-.361 2.031A1.89 1.89 0 0 0 2.814 38c4.805 0 8.524-2.012 10.867-3.613 2.188.707 4.703 1.113 7.258 1.113 11.047 0 19.93-7.276 19.93-16.25S31.986 3 20.939 3m.008 28.75c-2.09 0-4.15-.322-6.124-.947l-1.777-.556-1.523 1.074a16.7 16.7 0 0 1-4.493 2.265 19.3 19.3 0 0 0 1.554-3.144l.83-2.188-1.612-1.708c-1.408-1.507-3.107-4-3.107-7.296 0-6.895 7.285-12.5 16.25-12.5s16.25 5.605 16.25 12.5-7.287 12.5-16.248 12.5"
      />
    </g>
    <defs>
      <clipPath id="comment-outline_svg__a">
        <path fill="#fff" d="M.939 0h39.93v41H.939z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCommentOutline
