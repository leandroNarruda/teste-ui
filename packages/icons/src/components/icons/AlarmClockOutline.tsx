import type { SVGProps } from 'react'
const SvgAlarmClockOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#alarm-clock-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M12.5 1.984A7.4 7.4 0 0 0 7.438 0a7.435 7.435 0 0 0-6.274 11.43zM20 8.75a13.75 13.75 0 1 1 0 27.5 13.75 13.75 0 0 1 0-27.5M20 40c4.156 0 7.977-1.453 10.977-3.867l3.32 3.32a1.867 1.867 0 0 0 2.648 0 1.874 1.874 0 0 0 0-2.648l-3.32-3.32c2.422-3 3.867-6.82 3.867-10.977C37.5 12.836 29.664 5 20 5S2.5 12.836 2.5 22.5c0 4.156 1.453 7.977 3.867 10.977l-3.32 3.32a1.867 1.867 0 0 0 0 2.648 1.874 1.874 0 0 0 2.648 0l3.32-3.32c3 2.422 6.82 3.867 10.977 3.867zm18.836-28.562a7.45 7.45 0 0 0 1.164-4A7.435 7.435 0 0 0 32.563 0c-1.954 0-3.735.75-5.063 1.984zm-16.961 2.937A1.87 1.87 0 0 0 20 12.5a1.87 1.87 0 0 0-1.875 1.875V22.5c0 .5.195.977.547 1.328l3.75 3.75a1.867 1.867 0 0 0 2.648 0 1.874 1.874 0 0 0 0-2.648l-3.203-3.203v-7.352z"
      />
    </g>
    <defs>
      <clipPath id="alarm-clock-outline_svg__a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgAlarmClockOutline
