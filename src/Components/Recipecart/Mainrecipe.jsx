
const Mainrecipe = ({recipe,handleCook}) => {
    const {image,name,description,ingredients,preparing_time,calories}=recipe
    // console.log(name);
  return (
    <div className="card w-96 bg-base-100 shadow-xl border-2">
      <figure className="px-10 pt-10">
        <img
          src={image}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#282828] text-[28px] text-black">{name}</h2>
        <p className="text-[#878787] text-[16px]">{description}</p>

        <hr className="bg-black"/>
         
        <h1 className="text-[#282828] text-[25px] text-bold]">Ingredients:5</h1>
        <div className="text-[#878787] text-[18px]">
        <h2>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[5]}</li>
        </h2>
        </div>
        <hr/>

        <div className="flex gap-4 text-[#282828CC] text-[16px]">
          <div className="flex gap-2 "><img src="../../../public/time.png" alt="" />
          <p>{preparing_time}</p>
          </div>
          <div className="flex gap-2"><img src="../../../public/fire.png" alt="" />
          <p>{calories}</p>
          </div>
        </div>

        <div className="card-actions">
          <button className="btn bg-[#0BE58A] rounded-full " onClick={handleCook}>Want to Cook</button>
        </div>
      </div>
    </div>
  );
};

export default Mainrecipe;
