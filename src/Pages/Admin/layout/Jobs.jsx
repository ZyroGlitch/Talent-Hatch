import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { Button } from '@/components/ui/button';
import { GoPeople } from "react-icons/go";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from '@/components/ui/label';
import { FiFilter } from "react-icons/fi";

export default function Jobs() {
    const [filterOpen, setFilterOpen] = React.useState(true);

    const toggleFilter = () => {
        setFilterOpen((filter) => !filter);
        console.log(filterOpen);
    }

    return (
        <>
            <div className="h-full flex">
                {
                    filterOpen && (
                        <section className="w-[18%] h-screen bg-white border-r p-4">
                            <h6 className="text-md font-semibold mb-4">Filters</h6>

                            <div className="mb-4">
                                <h6 className="text-xs font-semibold mb-2">Job Type</h6>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="fulltime" className="w-4 h-4" />
                                        <Label htmlFor="fulltime" className="text-sm">Fulltime</Label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="parttime" className="w-4 h-4" />
                                        <Label htmlFor="parttime" className="text-sm">Parttime</Label>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }

                <section className="flex-1 p-4 overflow-y-auto h-[95%] pr-2">
                    <div className="flex items-center gap-2 mb-4">
                        <div
                            className='hover:bg-gray-200 hover:text-cyan-600 p-2 rounded-lg cursor-pointer'
                            onClick={toggleFilter}
                        >
                            <FiFilter />
                        </div>

                        <h1 className="text-xl text-cyan-600">100 Jobs</h1>
                    </div>


                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8">
                        <Card className='shadow-none bg-cyan-100'>
                            <CardContent className='p-4'>
                                <div className="flex items-center gap-2 mb-4">
                                    <img src="admin_img/briefcase.png" alt="Image" className="object-cover w-8 h-8" />
                                    <h5 className="text-lg font-bold">UI/UX Designer</h5>
                                </div>

                                <div className="flex items-center gap-2 mb-8">
                                    <Badge className='border border-cyan-500 bg-transparent text-cyan-600 rounded-full hover:bg-transparent'>Fulltime</Badge>
                                    <Badge className='border border-orange-500 bg-transparent text-orange-600 rounded-full hover:bg-transparent'>Partime</Badge>
                                </div>

                                <div className="space-y-2">
                                    <div className='flex items-center gap-2 text-sm'>
                                        <FaRegMoneyBillAlt className='text-[20px] inline-block' /> $500 / monthly
                                    </div>
                                    <div className='flex items-center gap-2 text-sm'>
                                        <BsBuildings className='text-[20px] inline-block' /> Onsite
                                    </div>
                                    <div className='flex items-center gap-2 text-sm'>
                                        <GoPeople className='text-[20px] inline-block' /> 5 Applicants
                                    </div>
                                </div>

                                <Button className='w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white'>View Details</Button>
                            </CardContent>
                        </Card>

                        <Card className='shadow-none bg-cyan-100'>
                            <CardContent className='p-4'>
                                <div className="flex items-center gap-2 mb-4">
                                    <img src="admin_img/briefcase.png" alt="Image" className="object-cover w-8 h-8" />
                                    <h5 className="text-lg font-bold">UI/UX Designer</h5>
                                </div>

                                <div className="flex items-center gap-2 mb-8">
                                    <Badge className='border border-cyan-500 bg-transparent text-cyan-600 rounded-full hover:bg-transparent'>Fulltime</Badge>
                                    <Badge className='border border-orange-500 bg-transparent text-orange-600 rounded-full hover:bg-transparent'>Partime</Badge>
                                </div>

                                <div className="space-y-2">
                                    <div className='flex items-center gap-2 text-sm'>
                                        <FaRegMoneyBillAlt className='text-[20px] inline-block' /> $500 / monthly
                                    </div>
                                    <div className='flex items-center gap-2 text-sm'>
                                        <BsBuildings className='text-[20px] inline-block' /> Onsite
                                    </div>
                                    <div className='flex items-center gap-2 text-sm'>
                                        <GoPeople className='text-[20px] inline-block' /> 5 Applicants
                                    </div>
                                </div>

                                <Button className='w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white'>View Details</Button>
                            </CardContent>
                        </Card>

                        <Card className='shadow-none bg-cyan-100'>
                            <CardContent className='p-4'>
                                <div className="flex items-center gap-2 mb-4">
                                    <img src="admin_img/briefcase.png" alt="Image" className="object-cover w-8 h-8" />
                                    <h5 className="text-lg font-bold">UI/UX Designer</h5>
                                </div>

                                <div className="flex items-center gap-2 mb-8">
                                    <Badge className='border border-cyan-500 bg-transparent text-cyan-600 rounded-full hover:bg-transparent'>Fulltime</Badge>
                                    <Badge className='border border-orange-500 bg-transparent text-orange-600 rounded-full hover:bg-transparent'>Partime</Badge>
                                </div>

                                <div className="space-y-2">
                                    <div className='flex items-center gap-2 text-sm'>
                                        <FaRegMoneyBillAlt className='text-[20px] inline-block' /> $500 / monthly
                                    </div>
                                    <div className='flex items-center gap-2 text-sm'>
                                        <BsBuildings className='text-[20px] inline-block' /> Onsite
                                    </div>
                                    <div className='flex items-center gap-2 text-sm'>
                                        <GoPeople className='text-[20px] inline-block' /> 5 Applicants
                                    </div>
                                </div>

                                <Button className='w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white'>View Details</Button>
                            </CardContent>
                        </Card>

                        <Card className='shadow-none bg-cyan-100'>
                            <CardContent className='p-4'>
                                <div className="flex items-center gap-2 mb-4">
                                    <img src="admin_img/briefcase.png" alt="Image" className="object-cover w-8 h-8" />
                                    <h5 className="text-lg font-bold">UI/UX Designer</h5>
                                </div>

                                <div className="flex items-center gap-2 mb-8">
                                    <Badge className='border border-cyan-500 bg-transparent text-cyan-600 rounded-full hover:bg-transparent'>Fulltime</Badge>
                                    <Badge className='border border-orange-500 bg-transparent text-orange-600 rounded-full hover:bg-transparent'>Partime</Badge>
                                </div>

                                <div className="space-y-2">
                                    <div className='flex items-center gap-2 text-sm'>
                                        <FaRegMoneyBillAlt className='text-[20px] inline-block' /> $500 / monthly
                                    </div>
                                    <div className='flex items-center gap-2 text-sm'>
                                        <BsBuildings className='text-[20px] inline-block' /> Onsite
                                    </div>
                                    <div className='flex items-center gap-2 text-sm'>
                                        <GoPeople className='text-[20px] inline-block' /> 5 Applicants
                                    </div>
                                </div>

                                <Button className='w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white'>View Details</Button>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </>
    )
}
