// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import MenuDropdown from "./MenuDropdown.jsx";
//
// export default function Navbar() {
//     return (
//         <nav className="bg-gray-50 fixed top-0 w-full z-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8">
//                 <div className="flex items-center justify-between h-16">
//                     {/* Logo */}
//                     <div className="flex-shrink-0">
//                         <Link
//                             to="/"
//                             className="text-gray-800 text-xl font-bold hover:text-amber-700 transition duration-500"
//                         >
//                             EECS 206A Turtlebot Maze Solver
//                         </Link>
//                     </div>
//
//                     {/* Dropdown Menu Button */}
//                     <MenuDropdown />
//                 </div>
//             </div>
//         </nav>
//     );
// }
import GenericMenuDropdown from './GenericMenuDropdown';

export default function Navbar() {
    return (
        <nav className="bg-gray-50 fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-bold text-gray-800">Turtlebot Maze Solver</h1>
                    </div>

                    {/* Generic Dropdown */}
                    <GenericMenuDropdown
                        buttonLabel="Menu"
                        sections={[
                            {
                                items: [
                                    { label: 'Home', to: '/' },
                                    { label: 'About', to: '/about' },
                                    { label: 'Project', to: '/projects' },
                                ],
                            },
                        ]}
                    />
                </div>
            </div>
        </nav>
    );
}
