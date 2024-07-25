import Image from "next/image"

const Banner = () => {
  return (
    <div className="h-[157px] bg-white flex items-center justify-center mt-0">
        <div className="h-[137px] relative w-full">
            <Image src={"/hepsi.jpg"} fill alt="" className="object-cover"/>
        </div>
    </div>
  )
}

export default Banner