import React from 'react';
import Carousel from '../layout/Carousel';
import { BsFillPeopleFill } from 'react-icons/bs';
import { Button } from '@/components/ui/button';
import { BsBriefcaseFill } from "react-icons/bs";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {

    const images = [
        { src: '/carousel/slide1.jpg', label: 'Shop, Sell, and Succeed – UM Marketplace, Your Campus Marketplace' },
        { src: '/carousel/slide2.jpg', label: 'Explore the Best Deals' },
        { src: '/carousel/slide3.jpg', label: 'Shop with Confidence' },
    ];

    return (
        <div className="w-full h-full">

            {/* Landing Page Content */}
            < div id='home' className="w-full h-screen" >
                <Carousel slides={images} />
            </ div>

            {/* Career Section */}
            <section id="career" className="px-16 py-[6rem] h-screen">
                <div className="flex flex-col justify-center items-center gap-2 mb-16">
                    <BsBriefcaseFill className="text-6xl text-cyan-500" />
                    <h2 className="text-4xl font-bold border-b-2 border-cyan-500 w-fit pb-2">Career Opportunities</h2>
                </div>

                <div className="grid grid-cols-3 gap-16">
                    <div className="min-h-[200px]">
                        <h4 className="text-2xl text-cyan-600 font-bold mb-4">Voice</h4>
                        <div className="space-y-4">
                            <Accordion type="single" collapsible defaultValue="item-1">
                                <AccordionItem value="item-1" className="bg-gray-200 drop-shadow-sm">
                                    <AccordionTrigger
                                        className="font-bold text-md hover:bg-cyan-700 hover:text-white hover:no-underline px-4"
                                    >
                                        Appointment Setter
                                    </AccordionTrigger>
                                    <AccordionContent className='px-4 mt-4'>
                                        <div className="mb-4">
                                            <h6 className="text-md font-bold mb-2">Description</h6>
                                            <p className="text-sm text-justify">Someone who is a persuasive communicator and thrives on building connections. As an Appointment Setter, you’ll be the first impression engaging leads, sparking interest, and setting the stage for successful client relationships. With strong communication skills and a results-driven mindset, you turn conversations into opportunities.</p>
                                        </div>
                                        <div className="mb-4">
                                            <h6 className="text-md font-bold mb-2">Responsibilities</h6>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li>Call the maximum number of leads/prospects to schedule appointments with clients.</li>
                                                <li>Conduct lead follow-ups and nurtures until appointments are set.</li>
                                                <li>Respond to inbound calls, text messages, and emails from prospects.</li>
                                                <li>Follow scripts to deliver value propositions and handle objections.</li>
                                                <li>Update the customer relationship management (CRM) system with relevant information after each interaction.</li>
                                                <li>Coordinate and manage the calendar of appointments.</li>
                                            </ul>
                                        </div>
                                        <div className="mb-4">
                                            <h6 className="text-md font-bold mb-2">Requirements:</h6>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li>Excellent English communication skills (both verbal and written).</li>
                                                <li>Comfortable making phone calls, memorizing, and delivering call scripts.</li>
                                                <li>Strong customer service orientation and listening abilities.</li>
                                            </ul>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <Accordion type="single" collapsible defaultValue="item-1">
                                <AccordionItem value="item-1" className="bg-gray-200 drop-shadow-sm">
                                    <AccordionTrigger
                                        className="font-bold text-md hover:bg-cyan-700 hover:text-white hover:no-underline px-4"
                                    >
                                        Appointment Setter
                                    </AccordionTrigger>
                                    <AccordionContent className='px-4 mt-4'>
                                        <div className="mb-4">
                                            <h6 className="text-md font-bold mb-2">Description</h6>
                                            <p className="text-sm text-justify">Someone who is a persuasive communicator and thrives on building connections. As an Appointment Setter, you’ll be the first impression engaging leads, sparking interest, and setting the stage for successful client relationships. With strong communication skills and a results-driven mindset, you turn conversations into opportunities.</p>
                                        </div>
                                        <div className="mb-4">
                                            <h6 className="text-md font-bold mb-2">Responsibilities</h6>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li>Call the maximum number of leads/prospects to schedule appointments with clients.</li>
                                                <li>Conduct lead follow-ups and nurtures until appointments are set.</li>
                                                <li>Respond to inbound calls, text messages, and emails from prospects.</li>
                                                <li>Follow scripts to deliver value propositions and handle objections.</li>
                                                <li>Update the customer relationship management (CRM) system with relevant information after each interaction.</li>
                                                <li>Coordinate and manage the calendar of appointments.</li>
                                            </ul>
                                        </div>
                                        <div className="mb-4">
                                            <h6 className="text-md font-bold mb-2">Requirements:</h6>
                                            <ul className="list-disc pl-6 space-y-2">
                                                <li>Excellent English communication skills (both verbal and written).</li>
                                                <li>Comfortable making phone calls, memorizing, and delivering call scripts.</li>
                                                <li>Strong customer service orientation and listening abilities.</li>
                                            </ul>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                    <div className="min-h-[200px]">
                        <h4 className="text-2xl text-cyan-600 font-bold mb-4">Mixed</h4>
                        <Accordion type="single" collapsible defaultValue="item-1">
                            <AccordionItem value="item-1" className="bg-gray-200 drop-shadow-sm">
                                <AccordionTrigger
                                    className="font-bold text-md hover:bg-cyan-700 hover:text-white hover:no-underline px-4"
                                >
                                    Bookkeeper
                                </AccordionTrigger>
                                <AccordionContent className='px-4 mt-4'>
                                    <div className="mb-4">
                                        <h6 className="text-md font-bold mb-2">Description</h6>
                                        <p className="text-sm text-justify">Someone who is a persuasive communicator and thrives on building connections. As an Appointment Setter, you’ll be the first impression engaging leads, sparking interest, and setting the stage for successful client relationships. With strong communication skills and a results-driven mindset, you turn conversations into opportunities.</p>
                                    </div>
                                    <div className="mb-4">
                                        <h6 className="text-md font-bold mb-2">Responsibilities</h6>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Call the maximum number of leads/prospects to schedule appointments with clients.</li>
                                            <li>Conduct lead follow-ups and nurtures until appointments are set.</li>
                                            <li>Respond to inbound calls, text messages, and emails from prospects.</li>
                                            <li>Follow scripts to deliver value propositions and handle objections.</li>
                                            <li>Update the customer relationship management (CRM) system with relevant information after each interaction.</li>
                                            <li>Coordinate and manage the calendar of appointments.</li>
                                        </ul>
                                    </div>
                                    <div className="mb-4">
                                        <h6 className="text-md font-bold mb-2">Requirements:</h6>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Excellent English communication skills (both verbal and written).</li>
                                            <li>Comfortable making phone calls, memorizing, and delivering call scripts.</li>
                                            <li>Strong customer service orientation and listening abilities.</li>
                                        </ul>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="min-h-[200px]">
                        <h4 className="text-2xl text-cyan-600 font-bold mb-4">Non-Voice</h4>
                        <Accordion type="single" collapsible defaultValue="item-1">
                            <AccordionItem value="item-1" className="bg-gray-200 drop-shadow-sm">
                                <AccordionTrigger
                                    className="font-bold text-md hover:bg-cyan-700 hover:text-white hover:no-underline px-4"
                                >
                                    Graphic Designer
                                </AccordionTrigger>
                                <AccordionContent className='px-4 mt-4'>
                                    <div className="mb-4">
                                        <h6 className="text-md font-bold mb-2">Description</h6>
                                        <p className="text-sm text-justify">Someone who is a persuasive communicator and thrives on building connections. As an Appointment Setter, you’ll be the first impression engaging leads, sparking interest, and setting the stage for successful client relationships. With strong communication skills and a results-driven mindset, you turn conversations into opportunities.</p>
                                    </div>
                                    <div className="mb-4">
                                        <h6 className="text-md font-bold mb-2">Responsibilities</h6>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Call the maximum number of leads/prospects to schedule appointments with clients.</li>
                                            <li>Conduct lead follow-ups and nurtures until appointments are set.</li>
                                            <li>Respond to inbound calls, text messages, and emails from prospects.</li>
                                            <li>Follow scripts to deliver value propositions and handle objections.</li>
                                            <li>Update the customer relationship management (CRM) system with relevant information after each interaction.</li>
                                            <li>Coordinate and manage the calendar of appointments.</li>
                                        </ul>
                                    </div>
                                    <div className="mb-4">
                                        <h6 className="text-md font-bold mb-2">Requirements:</h6>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Excellent English communication skills (both verbal and written).</li>
                                            <li>Comfortable making phone calls, memorizing, and delivering call scripts.</li>
                                            <li>Strong customer service orientation and listening abilities.</li>
                                        </ul>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>
        </div>
    );
}