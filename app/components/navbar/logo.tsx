import Image from "next/image"
import React from "react"

const logo = () => {
  return (
    <Image src={"/shop.holmstain.png"} alt="" width={75} height={75} className="mx-20"/>
  )
}

export default logo