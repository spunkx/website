//make dynamic later
import { Link } from "react-router-dom";
function Navbar(){

    return(
        <div className="flex z-40 my-2 text-justify min-w-fit justify-evenly object-center fixed w-1/2 overflow-visible">
            <div>
                <Link to="/"><div className="ml-8 mr-8 cursor-pointer hover:scale-125">Home</div></Link>
            </div>
            <div>
                <Link to="/projects"><div className="ml-8 mr-8 cursor-pointer hover:scale-125">Projects</div></Link>
            </div>
            <div>
                <Link to="/blog"><div className="ml-8 mr-8 cursor-pointer hover:scale-125">Blog</div></Link>
            </div>
        </div>
    );
}

export default Navbar;