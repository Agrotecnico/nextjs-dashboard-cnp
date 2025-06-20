import React from "react"

export type IconProps = {
  size?: string | number
  fill?: string | number
  sombraX?: string | number
  sombraY?: string | number
  filter?: string | number
} & React.SVGAttributes<SVGElement>

const LogoCnp: React.FC<IconProps> = ({
  size=64,
  fill= "#ddd",
  sombraX= "1",
  sombraY= "1",
  filter="filterCnp1",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      viewBox="0 0 88 50"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
      >
      <defs
        >
        <filter
          id={filter}
          x="-0.030000000000000013"
          y="-0.030000000000000013"
          width="1.1299999999999999"
          height="1.1199999999999999">
          <feFlood
            flood-opacity="1"
            flood-color="rgb(85,85,85)"
            result="flood"
            id="feFlood9544"
            in="SourceGraphic" />
          <feComposite
            in="flood"
            in2="SourceGraphic"
            operator="in"
            result="composite1"
            id="feComposite9546" />
          <feGaussianBlur
            in="composite1"
            stdDeviation="0.4"
            result="blur"
            id="feGaussianBlur9548" />
          <feOffset
            dx={sombraX}
            dy={sombraY}
            result="offset"
            id="feOffset9550"
            preserveAlpha="false" />
          <feComposite
            in="SourceGraphic"
            in2="offset"
            operator="over"
            result="composite2"
            id="feComposite9552" />
        </filter>
      </defs>
      <g>
      <path
          d="m 24.970635,30.094208 c 3.085498,0 5.569569,2.095902 5.569569,4.699325 v 7.310058 c 0,2.603433 -2.484027,4.699326 -5.569569,4.699326 -3.085586,0 -5.56957,-2.095893 -5.56957,-4.699326 v -7.310058 c 0,-2.603423 2.483984,-4.699325 5.56957,-4.699325 z m 0,-22.8971203 c 3.085498,0 5.569569,2.0958959 5.569569,4.6993233 v 7.310067 c 0,2.603427 -2.484027,4.699328 -5.569569,4.699328 -3.085586,0 -5.56957,-2.095901 -5.56957,-4.699328 v -7.310067 c 0,-2.6034274 2.483984,-4.6993233 5.56957,-4.6993233 z m -12.50069,0 h 0.866674 c 2.845414,0 5.136184,2.0825115 5.136184,4.6693083 v 30.267225 c 0,2.586782 -2.29077,4.669296 -5.136184,4.669296 h -0.866674 c -2.8455064,0 -5.1362756,-2.082514 -5.1362756,-4.669296 V 11.866396 c 0,-2.5867968 2.2907692,-4.6693083 5.1362756,-4.6693083 z"
          fill="#c87fc8"
          filter={`url(#${filter})`}
        />
        <path
          d="m 49.600408,7.1970877 h 0.866678 c 2.845406,0 5.13619,2.0825115 5.13619,4.6693083 v 30.267225 c 0,2.586782 -2.290784,4.669296 -5.13619,4.669296 h -0.866678 c -2.845509,0 -5.136273,-2.082514 -5.136273,-4.669296 V 11.866396 c 0,-2.5867968 2.290764,-4.6693083 5.136273,-4.6693083 z m -12.067402,0 h 0.866676 c 2.845413,0 5.136191,2.0825115 5.136191,4.6693083 v 30.267225 c 0,2.586782 -2.290778,4.669296 -5.136191,4.669296 h -0.866676 c -2.845507,0 -5.136278,-2.082514 -5.136278,-4.669296 V 11.866396 c 0,-2.5867968 2.290771,-4.6693083 5.136278,-4.6693083 z"
          fill="#d29fe8"
          filter={`url(#${filter})`}
        />
        <path
          d="m 62.596074,7.1970877 h 0.866668 c 2.845416,0 5.136199,2.0825115 5.136199,4.6693083 v 30.267225 c 0,2.586782 -2.290783,4.669296 -5.136199,4.669296 h -0.866668 c -2.845509,0 -5.136273,-2.082514 -5.136273,-4.669296 V 11.866396 c 0,-2.5867968 2.290764,-4.6693083 5.136273,-4.6693083 z m 12.50076,0 c 3.085511,0 5.56951,2.4840255 5.56951,5.5695733 v 11.139145 c 0,3.085541 -2.483999,5.569561 -5.56951,5.569561 -3.085594,0 -5.56963,-2.48402 -5.56963,-5.569561 V 12.766661 c 0,-3.0855478 2.483998,-5.5695733 5.56963,-5.5695733 z"
          fill="#ea7cea"
          filter={`url(#${filter})`}
        />
      </g>
    </svg>
  )
}

export default LogoCnp