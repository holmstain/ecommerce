import { CardProductProps } from "../detail/DetailClient"

interface CounterProps {
    cardProduct : CardProductProps,
    increaseFunc: () => void,
    decreaseFunc: () => void,
}


const Counter:React.FC<CounterProps> = ({cardProduct, increaseFunc, decreaseFunc}) => {

    const buttonStyle = "w-8 h-8 rounded-md border items-center justify-center text-lg flex cursor-pointer"
  return (
    <div className="flex items-center gap-3">
        <div onClick={decreaseFunc} className={buttonStyle}>-</div>
        <div className="text-lg md:text-xl">{cardProduct?.quantity}</div>
        <div onClick={increaseFunc} className={buttonStyle}>+</div>
    </div>
  )
}

export default Counter