import * as React from "react"
export const SVGComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={28}
    height={28}
    xmlSpace="preserve"
    fill="currentColor"
    {...props}
  >
    <path d="M11 30.36H3v-.72h8zM12.36 29h-.72v-8h.72zm-10 0h-.72v-8h.72zm24.14-2.14h-3a.36.36 0 0 1-.36-.36v-1.14H14v-.72h9.14V23.5a.36.36 0 0 1 .36-.36h1.14V14h.721v9.14h1.14a.36.36 0 0 1 .36.36v3a.36.36 0 0 1-.361.36m-2.64-.72h2.279v-2.28H23.86zm-15.36.72h-3a.36.36 0 0 1-.36-.36v-3a.36.36 0 0 1 .36-.36h3a.36.36 0 0 1 .36.36v3a.36.36 0 0 1-.36.36m-2.64-.72h2.28v-2.28H5.86zM11 20.36H3v-.72h8zM7.36 18h-.72v-4h.72zM29 12.36h-8v-.72h8zm-18 0H3v-.72h8zM30.36 11h-.72V3h.721zm-10 0h-.72V3h.721zm-8 0h-.72V3h.72zm-10 0h-.72V3h.72zM26.5 8.86h-3a.36.36 0 0 1-.36-.36v-3a.36.36 0 0 1 .36-.36h3a.36.36 0 0 1 .36.36v3a.36.36 0 0 1-.36.36m-2.64-.72h2.279V5.86H23.86zM8.5 8.86h-3a.36.36 0 0 1-.36-.36v-3a.36.36 0 0 1 .36-.36h3a.36.36 0 0 1 .36.36v3a.36.36 0 0 1-.36.36m-2.64-.72h2.28V5.86H5.86zM18 7.36h-4v-.72h4zm11-5h-8v-.72h8zm-18 0H3v-.72h8z" />
    <path
      style={{
        fill: "none",
      }}
      d="M0 0h32v32H0z"
    />
  </svg>
)
