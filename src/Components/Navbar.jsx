//make dynamic later
import { Link } from "react-router-dom";
function Navbar(){

    return(
        <div className="flex right-1/4 my-2 text-justify min-w-fit justify-evenly object-center fixed w-1/2 divide-y divide-[#2F3061] divide-y-2 overflow-visible">
            <div></div>
            <Link to="/"><div className="ml-8 mr-8 cursor-pointer hover:scale-125">Home</div></Link>
            <Link to="/projects"><div className="ml-8 mr-8 cursor-pointer hover:scale-125">Projects</div></Link>
            <Link to="/blog"><div className="ml-8 mr-8 cursor-pointer hover:scale-125">Blog</div></Link>
        </div>
    );
}

export default Navbar;