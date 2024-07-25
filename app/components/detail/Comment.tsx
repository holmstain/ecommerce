"use Client"

import { RxAvatar } from "react-icons/rx"
import Avatar from "../general/Avatar"
import { Rating } from "@mui/material"


const Comment = ({prd}: {prd: any}) => {

  return (
    <div className="border w-full md:w-1/3 p-2 rounded-xl my-2">
      {/*<Avatar image={prd?.user?.image}/>*/}
      <div className="flex items-center gap-1">
          <RxAvatar size="40"/>
          <div className="">
            <div>{prd?.user?.name}</div>
            <Rating name="read-only" value={prd?.user?.rating} readOnly />
          </div>
      </div>
      <div className="text-sm text-gray-500">{prd?.comment}</div>
    </div>
  )
}

export default Comment