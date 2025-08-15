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
                d="M6.877 1.5h11.246c1.719 0 3.037.6 3.93 1.56.902.968 1.447 2.385 1.447 4.142v10.596c0 1.757-.545 3.174-1.446 4.142-.894.96-2.212 1.56-3.931 1.56H6.877c-1.719 0-3.037-.6-3.93-1.56-.902-.968-1.447-2.385-1.447-4.142V7.202c0-1.756.547-3.173 1.45-4.141C3.846 2.1 5.165 1.5 6.877 1.5zM12.5 8.093v8.791M16.9 12.489H8.1"
                stroke="#C6CFDC"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default SvgComponent
