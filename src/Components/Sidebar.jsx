const Sidebar = () => {
  return (
    <div className="bg-gray-200 w-full border-2 text-center">
      <h1>Want to cook:0</h1>

            <div className="overflow-x-auto">
                <table className="table">
                {/* head */}
                <thead>
                    <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                    <th>1</th>
                    <td>Chicken Tikka Masala</td>
                    <td>40 min</td>
                    <td>550 calories</td>
                    </tr>
                </tbody>
                </table>
            </div>

      <div className="divider"></div>

      <h2>
        Currently cooking: <span>0</span>
      </h2>

      <div className="overflow-x-auto">
                <table className="table">
                {/* head */}
                <thead>
                    <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                    <th>1</th>
                    <td>Chicken Tikka Masala</td>
                    <td>40 min</td>
                    <td>550 calories</td>
                    </tr>
                </tbody>
                </table>
            </div>
    </div>
  );
};

export default Sidebar;
