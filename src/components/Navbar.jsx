import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-gray-50 fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-gray-800 text-xl font-bold hover:text-amber-700 transition duration-500">
                            EECS 206A Turtlebot Maze Solver
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:block">
                        <ul className="flex space-x-8">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-600 text-lg font-medium hover:text-amber-700 transition duration-500"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="text-gray-600 text-lg font-medium hover:text-amber-700 transition duration-500"
                                >
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Menu */}
                    <div className="block md:hidden">
                        <button
                            className="text-gray-800 focus:outline-none"
                            aria-label="Open menu"
                        >
                            {/* Icon Placeholder */}
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
