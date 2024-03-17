import PropTypes from 'prop-types';
const Sidebar = ({sidebar,handleCurrent}) => {


  return (
    <div className="bg-gray-200 w-full border-2 text-center">
      <h1>Want to cook: {sidebar.length}</h1>



      <div className="flex">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>

          <tbody>
            {
                sidebar.map(side=>
                <> 
                <tr key={side.id}>
                    <th>1</th>
                    <td>{side.name}</td>
                    <td>{side.preparing_time}</td>
                    <td>{side.calories}</td>
                    <td> <button className="btn bg-[#0BE58A] rounded-full" onClick={()=>handleCurrent(sidebar)}>Preparing</button></td>
                </tr>

                 </>
             
                )
            }
           
          </tbody>
        </table>

        {/* <button className="btn bg-[#0BE58A] rounded-full ">Want to Cook</button> */}
      </div>

      <div className="divider"></div>

      <h2>
        Currently cooking: <span>0</span>
      </h2>

      <div className="flex">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Chicken Caesar Salad</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
Sidebar.propTypes={
    sidebar:PropTypes.array.isRequired,
    handleCurrent:PropTypes.func.isRequired
}

export default Sidebar;
