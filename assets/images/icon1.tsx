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
                d="M2.5 11.5h6a1 1 0 001-1v-6a1 1 0 00-1-1h-6a1 1 0 00-1 1v6a1 1 0 001 1zm1-6h4v4h-4v-4zm5 16a1 1 0 001-1v-6a1 1 0 00-1-1h-6a1 1 0 00-1 1v6a1 1 0 001 1h6zm-5-6h4v4h-4v-4zm20-8a1 1 0 01-1 1h-10a1 1 0 110-2h10a1 1 0 011 1zm0 10a1 1 0 01-1 1h-10a1 1 0 010-2h10a1 1 0 011 1z"
                fill="#C6CFDC"
            />
        </Svg>
    )
}

export default SvgComponent
