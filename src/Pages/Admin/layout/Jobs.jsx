import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { Button } from '@/components/ui/button';
import { GoPeople } from "react-icons/go";
import { Label } from '@/components/ui/label';
import { FiFilter } from "react-icons/fi";
import supabase from '@/supabase-client';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function Jobs() {
    const [filterOpen, setFilterOpen] = useState(true);

    const toggleFilter = () => {
        setFilterOpen((filter) => !filter);
        console.log(filterOpen);
    }

    // --------------------------------------------------------------------------------------------

    // Fetch all jobs
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        listJobs();
    }, []);

    const listJobs = async () => {
        const { data, error } = await supabase
            .from('career_tbl')
            .select('*');

        if (error) {
            console.error('Error fetching jobs:', error);
        } else {
            console.log('Jobs:', data);
            setJobs(data);
        }
    }

    // --------------------------------------------------------------------------------------------

    return (
        <>
            <div className="h-full flex">
                {
                    filterOpen && (
                        <section className="w-[18%] h-screen bg-white border-r p-4">
                            <h6 className="text-md font-semibold mb-4">Filters</h6>

                            <div className="mb-4">
                                <h6 className="text-xs font-semibold mb-3">Job Type</h6>
                                <RadioGroup defaultValue="All" className="space-y-1">
                                    <div className="flex items-center gap-3">
                                        <RadioGroupItem
                                            value="All"
                                            id="option-one"
                                            className="border-slate-400 text-slate-400 data-[state=checked]:border-cyan-600 data-[state=checked]:text-cyan-600"
                                        />
                                        <Label htmlFor="option-one">All</Label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <RadioGroupItem
                                            value="Fulltime"
                                            id="option-two"
                                            className="border-slate-400 text-slate-400 data-[state=checked]:border-cyan-600 data-[state=checked]:text-cyan-600"
                                        />
                                        <Label htmlFor="option-two">Fulltime</Label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <RadioGroupItem
                                            value="Parttime"
                                            id="option-three"
                                            className="border-slate-400 text-slate-400 data-[state=checked]:border-cyan-600 data-[state=checked]:text-cyan-600"
                                        />
                                        <Label htmlFor="option-three">Parttime</Label>
                                    </div>
                                </RadioGroup>
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

                        <h1 className="text-xl text-cyan-600">{jobs.length} Jobs</h1>
                    </div>


                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8">
                        {
                            jobs.map((job, index) => (
                                <Card className='shadow-none bg-cyan-100' key={index}>
                                    <CardContent className='p-4'>
                                        <div className="flex items-center gap-2 mb-4">
                                            <img src="/admin_img/briefcase.png" alt="Image" className="object-cover w-8 h-8" />
                                            <h5 className="text-lg font-bold">{job.name}</h5>
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
                            ))
                        }
                    </div>
                </section>
            </div>
        </>
    )
}
