import { NavLink, Outlet } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
import { FaFileSignature, FaHome, FaUsers } from "react-icons/fa";

const Dashboard = () => {

    const isAdmin = true;




    return (
        <div className="flex ">
            <div className="w-64 min-h-full bg-orange-400 ">
                <ul className="menu p-4 mt-5">

                    {
                        isAdmin ? <>
                            <li className="border-2  rounded-lg"><NavLink to="dashboard/users">
                                <FaUsers></FaUsers>
                                users</NavLink>
                            </li>


                        </> :
                            <>

                            </>

                    }

                    <div className="divider"></div>

                    <li className="border-2  rounded-lg"><NavLink to="/">
                        <FaHome></FaHome>
                       Home</NavLink>
                    </li>

                    <li className="border-2 rounded-lg"><NavLink to="dashboard/signUp">
                        <FaFileSignature />
                        SignUp</NavLink>
                    </li>


                    <li className="border-2  rounded-lg"><NavLink to="dashboard/login">
                        < LuLogIn />
                        Login</NavLink>
                    </li>


                </ul>
            </div>
          
            <div className="flex-1 mt-7 ml-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;