import Home from "./pages/Home/Home/Home";
import Navbar from "./shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <div className=" hidden md:block">
        <Navbar></Navbar>
      </div>

      <Home></Home>
    </div>
  );
}

export default App;
