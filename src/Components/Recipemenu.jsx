import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import Mainrecipe from "./Recipecart/Mainrecipe";

const Recipemenu = ({handleCook}) => {

    const [recipemenu, setRecipeMenu] = useState([])
    

    useEffect(()=>{
        fetch('recipemenu.json')
        .then (res=>res.json())
        .then (data=>setRecipeMenu(data))
    },[])

    return (
        <div className="grid grid-cols-2 gap-5">
            {
             recipemenu.map(recipe =>
             
                //   console.log(recipe);
                 <Mainrecipe 
                 handleCook={handleCook}
                 key={recipe.id} recipe={recipe}>
                 </Mainrecipe>)
            }

        </div>
    );
};
Recipemenu.propTypes={
    handleCook:PropTypes.func.isRequired
}
export default Recipemenu;
