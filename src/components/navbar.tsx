"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [active, setActive] = useState<string> ('Testemunhos');

    return (
        <nav className="w-full py-4">
            <div className="flex justify-center space-x-6">
                {['Testemunhos'].map((item) => (
                    <Link
                        key={item}
                        href={`/${item.toLowerCase()}`}
                        className={`px-6 py-2 text-lg font-medium rounded-3xl transition-colors duration-200 ${active === item
                                ? 'bg-black text-white'
                                : 'bg-transparent text-gray-800 hover:bg-gray-200'
                            }`}
                        onClick={() => setActive(item)}
                    >
                        {item}
                    </Link>
                ))}
            </div>
        </nav>
    );
}