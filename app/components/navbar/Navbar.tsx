import CardCount from "./CardCount";
import Logo from "./logo"
import Search from "./Search";
import User from "./User";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between gap-3 md:gap-10 px-3 md:px10 bg-gradient-to-l from-Primary bg-bg h-[75px]">
        <Logo/>
        <Search/>
        <User/>
        <CardCount/>
    </div>
  )
}

export default Navbar