import Theme from "./Theme";

export default function Navbar() {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-primary rounded-b-xl shadow w-full">
                    
                <div className="flex-none lg:hidden">
                    
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-6 w-6 stroke-current">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    </label>

                </div>
                <div className="mx-2 flex-1 px-2">Rent Easy</div>
                <div className="hidden flex-none lg:block">
                    <ul className="menu gap-2 items-center menu-horizontal">
                    {/* Navbar menu content here */}
                    <Theme/>

                        <li>Navbar Item 2</li>
                    </ul>
                </div>
                </div>
            </div>


            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu gap-2 bg-secondary min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <li>Sidebar Item 1</li>
                <li>Sidebar Item 2</li>
                </ul>
            </div>
            </div>
    )
    
}