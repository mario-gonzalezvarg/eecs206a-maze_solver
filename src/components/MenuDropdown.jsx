// import { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
//
// export default function MenuDropdown() {
//     const [isOpen, setIsOpen] = useState(false);
//     const menuRef = useRef(null);
//
//     // Menu items
//     const menuItems = [
//         { label: 'Home', to: '/' },
//         { label: 'About', to: '/about' },
//         { label: 'Project', to: '/projects' },
//     ];
//
//     // Toggle the menu open/close
//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };
//
//     // Close the menu when user clicks outside
//     useEffect(() => {
//         const handleClickOutside = (e) => {
//             if (menuRef.current && !menuRef.current.contains(e.target)) {
//                 setIsOpen(false);
//             }
//         };
//
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);
//
//     return (
//         <div className="relative inline-block text-left" ref={menuRef}>
//
//             {/* Dropdown Toggle Button */}
//             <button
//                 onClick={toggleDropdown}
//                 className="inline-flex items-center px-3 py-2
//                    bg-gray-100 hover:bg-gray-200
//                    text-gray-700 text-base font-medium
//                    rounded-md focus:outline-none"
//             >
//                 <span className="mr-1">Menu</span>
//                 <ChevronDownIcon className="w-5 h-5 text-gray-500" />
//             </button>
//
//             {/* Dropdown Menu */}
//             {isOpen && (
//                 <div
//                     className="absolute right-0 z-10 mt-2 w-48 origin-top-right
//                      bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5
//                      focus:outline-none"
//                 >
//                     <div className="py-2">
//                         {menuItems.map((item) => (
//                             <Link
//                                 key={item.label}
//                                 to={item.to}
//                                 className="block px-4 py-2 text-sm text-gray-700
//                            hover:bg-amber-50 transition duration-500 hover:text-amber-700"
//                                 // close on link click
//                                 onClick={() => setIsOpen(false)}
//                             >
//                                 {item.label}
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }
