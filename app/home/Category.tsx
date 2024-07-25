"use client"

const Category = () => {
    const categoryList = [
        {
          name:"Hoodie"
        },
        {
          name:"Sweatshirt"
        },
        {
          name:"Cap"
        },
        {
          name:"Cup"
        },
        {
          name:"Socks"
        },
      ]
  return (
    <div className="flex items-center justify-center px-3 md:px-10 gap-3 md:gap-10 my-5 md:my-10 overflow-x-auto">
        {
        categoryList.map((category, index) => (
            <div className="border rounded-full text-slate-800 min-w-[150px] px-4 py-2 text-center flex items-center justify-center cursor-pointer" key={index} >{category.name}</div>
        ))
        }
    </div>
  )
}

export default Category