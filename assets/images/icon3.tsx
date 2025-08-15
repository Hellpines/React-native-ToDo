import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props: any) {
    return (
        <Svg
            width={25}
            height={25}
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M17.692 17.657L22.5 22.5m-2.222-11.111a8.889 8.889 0 11-17.778 0 8.889 8.889 0 0117.778 0z"
                stroke="#C6CFDC"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default SvgComponent
