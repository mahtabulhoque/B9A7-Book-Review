import { useEffect } from "react";
import { useState } from "react";
import Recipes2 from "./Recipes2";



const Recipes2Container = () => {
    const [recipes2, setRecipes2]= useState([]);
    
    useEffect(() => {
      fetch("Fake.json")
        .then((res) => res.json())
        .then((data) => setRecipes2(data));
    }, []);
    return (
      <div className="grid grid-cols-2 gap-5">
         {
          Recipes2.map(recipe => (recipe.key(recipe.id)))
         }

         
        {/* <Recipes2></Recipes2>
        <Recipes2></Recipes2>
        <Recipes2></Recipes2>
        <Recipes2></Recipes2>
        <Recipes2></Recipes2>
        <Recipes2></Recipes2> */}
      </div>
    );
  };
export default Recipes2Container;
