import React from 'react'
import { BsBriefcase } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";

export default function Monitor() {
    return (
        <>
            <div className="h-[calc(100vh-49px)] flex flex-col p-4">
                <div className="grid grid-cols-4 gap-4 mb-8">
                    <div className="border border-slate-700/20 rounded-lg p-4">
                        <div className="flex justify-between mb-3">
                            <div className='flex-1'>
                                <h6 className="text-sm font-semibold ">Total Hiring Jobs</h6>
                                <h4 className="text-xl font-bold">1,245</h4>
                            </div>

                            <div className='w-fit h-fit text-cyan-700 bg-cyan-100 rounded-lg p-3'>
                                <BsBriefcase />
                            </div>

                        </div>
                        <p className="text-xs text-green-700 flex items-center gap-1">
                            <span className='inline-block rounded-full bg-green-100 p-1'><FaArrowTrendUp /></span>
                            <p>+20 jobs from last week</p>
                        </p>
                    </div>

                    <div className="border border-slate-700/20 rounded-lg p-4">
                        <div className="flex justify-between mb-3">
                            <div className='flex-1'>
                                <h6 className="text-sm font-semibold ">Total Applied for Job</h6>
                                <h4 className="text-xl font-bold">5,000</h4>
                            </div>

                            <div className='w-fit h-fit text-cyan-700 bg-cyan-100 rounded-lg p-3'>
                                <IoDocumentTextOutline />
                            </div>

                        </div>
                        <p className="text-xs text-green-700 flex items-center gap-1">
                            <span className='inline-block rounded-full bg-green-100 p-1'><FaArrowTrendUp /></span>
                            <p>+10 person applied from last week</p>
                        </p>
                    </div>

                    <div className="border border-slate-700/20 rounded-lg p-4">
                        <div className="flex justify-between mb-3">
                            <div className='flex-1'>
                                <h6 className="text-sm font-semibold ">Total Applicant Passed</h6>
                                <h4 className="text-xl font-bold">500</h4>
                            </div>

                            <div className='w-fit h-fit text-cyan-700 bg-cyan-100 rounded-lg p-3'>
                                <GoPerson />
                            </div>

                        </div>
                        <p className="text-xs text-green-700 flex items-center gap-1">
                            <span className='inline-block rounded-full bg-green-100 p-1'><FaArrowTrendUp /></span>
                            <p>+20 person passed from last week</p>
                        </p>
                    </div>

                    <div className="border border-slate-700/20 rounded-lg p-4">
                        <div className="flex justify-between mb-3">
                            <div className='flex-1'>
                                <h6 className="text-sm font-semibold ">Total Applicant Failed</h6>
                                <h4 className="text-xl font-bold">10,000</h4>
                            </div>

                            <div className='w-fit h-fit text-cyan-700 bg-cyan-100 rounded-lg p-3'>
                                <GoPerson />
                            </div>

                        </div>
                        <p className="text-xs text-green-700 flex items-center gap-1">
                            <span className='inline-block rounded-full bg-green-100 p-1'><FaArrowTrendUp /></span>
                            <p>+20 person failed from last week</p>
                        </p>
                    </div>
                </div>

                <div className="flex-1 bg-cyan-200 border border-cyan-700 rounded-lg flex justify-center items-center">
                    <h2 className="text-2xl font-bold text-cyan-700 drop-shadow-lg">More Features Coming Soon...</h2>
                </div>
            </div>
        </>
    )
}
