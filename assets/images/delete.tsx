import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props : any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.857 18.222C6.857 19.2 7.63 20 8.571 20h6.858c.942 0 1.714-.8 1.714-1.778V9.333c0-.977-.772-1.777-1.714-1.777H8.57c-.942 0-1.714.8-1.714 1.777v8.89zM17.143 4.89H15l-.609-.631a.85.85 0 00-.6-.258H10.21a.85.85 0 00-.6.258L9 4.888H6.857c-.471 0-.857.4-.857.89 0 .489.386.889.857.889h10.286c.471 0 .857-.4.857-.89 0-.488-.386-.888-.857-.888z"
        fill="#FF5E5E"
      />
    </Svg>
  )
}

export default SvgComponent
