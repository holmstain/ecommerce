import { IconType } from "react-icons";

interface ButtonProps {
    text: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    small?:boolean
    outline: boolean
    icon?: IconType 
    disabled?: boolean
} 

const Button:React.FC<ButtonProps> = ({text, onClick, small, outline, disabled, icon: Icon}) => {
  return (
    <div className="">
        <button disabled={disabled} onClick={onClick} className={`rounded-lg p-3 ${small ? "w-[200px]" : "w-full"} ${outline ? "border text-black" : "bg-black text-white"}`}>
            {Icon && <Icon/>}
            {text}
        </button>
    </div>
  )
}

export default Button