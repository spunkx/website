//https://coolors.co/f7fff7-343434-2f3061-ffe66d-6ca6c1
import { Outlet } from "react-router-dom";

//route to difference pages
function App() {
  return (
    <div className="text-slate-800 bg-[#F4FAFF] bg-auto">
      <Outlet/>
    </div>
  );
}

export default App;
