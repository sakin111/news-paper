

const Users = () => {
    return (
        <div>
            <div className="flex justify-evenly ">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users</h2>
            </div>

          


            <div className="overflow-x-auto">
                <table className="table table-zebra rounded-md">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>

                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr>

                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;