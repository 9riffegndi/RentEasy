import Theme from "./Theme";
import { Link } from "react-router-dom";

import useAuth from "../Hooks/useAuth";
import useUser from "../Hooks/useUser";
import ShortenName from "../Utils/ShortName";
import HandleLogout from "../Utils/HandleLogout";

export default function Navbar() {
    const isAuthenticated = useAuth();
    const user = useUser();
    const Logout = HandleLogout;

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-primary rounded-b-xl shadow w-full">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2">Rent Easy</div>
                    <div className="hidden flex-none lg:block">
                        <ul className="menu gap-2 items-center menu-horizontal">
                            <Theme />
                            {isAuthenticated ? (
                                <>
                                    <p>Hi <span className="font-semibold"> {user?.name || 'Guest'}</span></p>
                                    <div className="dropdown dropdown-end">
                                        <button tabIndex={0} role="button" className="btn btn-secondary btn-circle btn-md">
                                            {ShortenName(user?.name)}
                                        </button>
                                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                            <li>
                                                <Link to="/profile" className="justify-between">Profile</Link>
                                            </li>
                                            <button onClick={Logout} className="btn btn-primary">Logout</button>
                                        </ul>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Link to={"/login"} className="btn btn-secondary rounded-full btn-sm">Login</Link>
                                    <Link to={"/register"} className="btn btn-secondary rounded-full btn-sm">Register</Link>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu gap-2 bg-secondary min-h-full w-80 p-4">
                    <li>Sidebar Item 1</li>
                    <li>Sidebar Item 2</li>
                </ul>
            </div>
        </div>
    );
}
