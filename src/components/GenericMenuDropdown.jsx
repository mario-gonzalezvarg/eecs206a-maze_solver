import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

/**
 * sections = [
 *   {
 *     sectionLabel: 'Main',     // optional heading label
 *     items: [
 *       { label: 'Home', to: '/' },
 *       { label: 'About', to: '/about' },
 *       { label: 'Project', to: '/projects' },
 *     ],
 *   },
 *   {
 *     sectionLabel: 'Other',    // optional heading label
 *     items: [
 *       { label: 'Contact', to: '/contact' },
 *       { label: 'Help', to: '/help' },
 *     ],
 *   }
 * ]
 *
 * Example usage:
 * <GenericMenuDropdown
 *    buttonLabel="Menu"
 *    sections={[
 *      {
 *        items: [
 *          { label: 'Home', to: '/' },
 *          { label: 'About', to: '/about' },
 *          { label: 'Project', to: '/projects' },
 *        ],
 *      },
 *    ]}
 * />
 */
export default function GenericMenuDropdown({
                                                buttonLabel = 'Menu',
                                                sections = [],
                                                buttonClassName = '',
                                                menuClassName = '',
                                            }) {
    // Track open/close state
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    // Toggle the menu open/close
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Close menu when user clicks outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block text-left" ref={menuRef}>
            {/* Dropdown Toggle Button */}
            <button
                onClick={toggleDropdown}
                className={`inline-flex items-center px-3 py-2
                    bg-gray-100 hover:bg-gray-200
                    text-gray-700 text-base font-medium
                    rounded-md focus:outline-none 
                    ${buttonClassName}`}
            >
                <span className="mr-1">{buttonLabel}</span>
                <ChevronDownIcon className="w-5 h-5 text-gray-500" />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    className={`absolute right-0 z-10 mt-2 w-48 origin-top-right
                     bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5
                     focus:outline-none ${menuClassName}`}
                >
                    {sections.map((section, idx) => (
                        <div key={idx} className="py-1 border-b last:border-b-0 border-gray-100">
                            {section.sectionLabel && (
                                <div className="px-4 py-2 text-xs font-bold text-gray-800 uppercase tracking-wider">
                                    {section.sectionLabel}
                                </div>
                            )}
                            {section.items.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.to}
                                    className="block px-4 py-2 text-sm text-gray-700
                             hover:bg-amber-50 transition duration-300
                             hover:text-amber-700"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
