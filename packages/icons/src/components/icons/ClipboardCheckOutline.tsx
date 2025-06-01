import type { SVGProps } from 'react'
const SvgClipboardCheckOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 41"
    {...props}
  >
    <g clipPath="url(#clipboard-check-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M30 5.724h-3.875a6.253 6.253 0 0 0-12.25 0H10c-2.758 0-5 2.242-5 5v25c0 2.758 2.242 5 5 5h20c2.758 0 5-2.242 5-5v-25c0-2.758-2.242-5-5-5m-18.75 3.75v1.875a1.87 1.87 0 0 0 1.875 1.875h13.75a1.87 1.87 0 0 0 1.875-1.875V9.474H30c.688 0 1.25.563 1.25 1.25v25c0 .688-.562 1.25-1.25 1.25H10c-.687 0-1.25-.562-1.25-1.25v-25c0-.687.563-1.25 1.25-1.25zm6.875-2.5a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0m9.453 14.657a1.867 1.867 0 0 0 0-2.649 1.874 1.874 0 0 0-2.648 0l-7.008 7.008-2.844-2.844a1.867 1.867 0 0 0-2.648 0 1.874 1.874 0 0 0 0 2.649l4.164 4.164c.351.351.828.547 1.328.547s.976-.196 1.328-.547z"
      />
    </g>
    <defs>
      <clipPath id="clipboard-check-outline_svg__a">
        <path fill="#fff" d="M0 .724h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgClipboardCheckOutline
