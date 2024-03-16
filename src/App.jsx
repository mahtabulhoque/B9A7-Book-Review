import "./Navbar";
import Banner from "./Banner";
import Recipes from "./Recipes";
import Navbar from "./Navbar";
import Recipes2 from "./Components/Recipes2";
import Cart from "./Components/Cart";
import Recipes2Container from "./Components/Recipes2Container";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipes></Recipes>

      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-8">
          <Recipes2Container></Recipes2Container>
        </div>
        <div className="col-span-4">
        <Cart></Cart>
        </div>
      </div>

    </div>
  );
}

export default App;
