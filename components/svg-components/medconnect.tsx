import * as React from "react"
export const SVGComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 24 24"
    data-name="Line Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon line-color"
    {...props}
  >
    <path
      d="M14 5a2 2 0 1 1-2-2 2 2 0 0 1 2 2m-2 2v14"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
    />
    <path
      d="M8 10.64c-1.23.46-2 1.12-2 1.86 0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5c0-.74-.77-1.4-2-1.86"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
   
      }}
    />
    <ellipse
      data-name="secondary"
      cx={12}
      cy={17}
      rx={4}
      ry={2}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
   
      }}
    />
  </svg>
)
