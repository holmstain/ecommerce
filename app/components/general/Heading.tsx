"use Client"

interface HeadingProps {
    center?: boolean
    text: string
}

const Heading:React.FC<HeadingProps> = ({center, text}) => {
  return (
    <div className={`text-slate-500 flex my-3 md:my-10 px-3 md:px-10 text-3xl md:text-xl${center ? "text-center flex" : "text-start flex"}`}>{text}</div>
  )
}

export default Heading