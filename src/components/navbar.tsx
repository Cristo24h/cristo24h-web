"use client";
import React from 'react';
import { NavbarSections } from './types';

const navbarOptions = [NavbarSections.TESTIMONIES];

type NavbarComponentProps = {
    activeSection: NavbarSections;
    onChange: (selectedItem: NavbarSections) => void;
}

export default function Navbar({ onChange, activeSection }: NavbarComponentProps) {
    const selectOption = (selectedItem: NavbarSections) => {
        onChange(selectedItem);
    }

    return (
        <nav className="w-full py-4">
            <div className="flex justify-center space-x-6">
                {navbarOptions.map((item) => (
                    <button
                        key={item}
                        className={`px-6 py-2 text-lg font-medium rounded-3xl transition-colors duration-200 ${activeSection === item
                                ? 'bg-amber-400 text-black'
                                : 'bg-transparent text-gray-800 hover:bg-gray-200'
                            }`}
                        onClick={() => selectOption(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </nav>
    );
}