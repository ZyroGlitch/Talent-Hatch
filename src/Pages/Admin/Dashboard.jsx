import React from 'react'
import { BsBriefcase, BsArrowLeftSquare } from "react-icons/bs";
import Jobs from './layout/Jobs';

export default function Dashboard() {
    const links = [
        {
            name: "Jobs",
            icon: <BsBriefcase className="text-lg" />,
            url: "/admin/jobs"
        }
    ]

    return (
        <>
            <div className="flex overflow-hidden bg-white h-screen">
                {/* Sidebar Content */}
                <div className="flex flex-col justify-between bg-white drop-shadow min-w-[225px] h-screen">
                    {/* Sidebar Header */}
                    <div>
                        <div className="flex items-center p-2 mb-2">
                            <img src="logo.png" alt="Logo" className='object-cover w-fit h-8' />
                            <h5 className="text-md font-bold text-cyan-600">Talent Hatch</h5>
                        </div>
                        {/* Sidebar Links */}
                        <div className="px-2">
                            <p className="text-[10px] font-bold pl-2 mb-2">PLATFORM</p>
                            <ul>
                                {
                                    links.map((link, index) => {
                                        return (
                                            <a href='#' key={index}>
                                                <li
                                                    key={index}
                                                    className='flex items-center gap-2 text-sm px-3 py-2 cursor-pointer rounded hover:bg-cyan-700 hover:text-white'
                                                >
                                                    {link.icon}
                                                    <span>{link.name}</span>
                                                </li>
                                            </a>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    {/* Sidebar Footer */}
                    <a href='#' className='px-2 mb-2'>
                        <li
                            className='flex items-center gap-2 text-sm px-3 py-2 cursor-pointer rounded hover:bg-cyan-700 hover:text-white'
                        >
                            <BsArrowLeftSquare className="text-lg" />
                            <span>Logout</span>
                        </li>
                    </a>

                </div>

                {/* Body Content */}
                <section className="flex-1">
                    {/* Navbar Content */}
                    <nav className="w-full h-[49px] flex items-center bg-white border-b-2 px-4 py-2">
                        <h1 className="text-md font-bold">Dashboard</h1>
                    </nav>

                    {/* Dynamic Content */}
                    <Jobs />
                </section>

            </div>
        </>
    )
}
