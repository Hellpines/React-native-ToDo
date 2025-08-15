import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function SvgComponent(props: any) {
    return (
        <Svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect
                x={1}
                y={1.5}
                width={22}
                height={22}
                rx={5}
                stroke="#C6CFDC"
                strokeWidth={2}
            />
            <Path
                d="M7 12.5l3.33 3 6.67-6"
                stroke="#C6CFDC"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default SvgComponent
