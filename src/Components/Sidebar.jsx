
const Sidebar = () => {
    return (
        <div className="bg-gray-200 w-full border-2 text-center">
            <h1>Want to cook: <span>01</span></h1>
           
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
                        
                    </tbody>
                   
                </table>
             
                <button className="btn bg-[#0BE58A] rounded-full ">Want to Cook</button>
               
            </div>
            
            <div className="divider"></div>

            <h2>Currently cooking: <span>02</span></h2>
            

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

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sidebar;