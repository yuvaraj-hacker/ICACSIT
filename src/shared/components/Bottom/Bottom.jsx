import React from 'react'
import { Link } from 'react-router-dom';

function Bottom() {
    const infoCards = [
        {
            icon: <i className="fi fi-ts-land-layer-location flex items-center text-2xl"></i>,
            heading: 'Where',
            content: (
                <>
                    {/* International Convention Center, */}
                    Abuja, Nigeria
                </>
            ),
        },
        {
            icon: <i className="fi fi-rr-clock flex items-center text-2xl"></i>,
            heading: 'When',
            content: (
                <>
                    February 18, 2025<br />
                    9:00 AM - 5:00 PM
                </>
            ),
        },
        {
            icon: <i className="fi fi-rr-envelope flex items-center text-2xl"></i>,
            heading: 'Email',
            content: 'contact.icacsit@gmail.com',
        },
    ];
    return (
        <>
            <section>
                <div className="relative flex flex-col items-center text-white space-y-12 px-6 md:px-12 lg:px-24 py-16 bg-cover bg-center" style={{ backgroundImage: "url('/images/home/Conference.jpg')" }}   >
                    <div className="absolute h-full inset-0 bg-black/30 backdrop-blur-md"></div>
                    <div className="relative z-10 w-full max-w-7xl text-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14 w-full">
                            {infoCards.map((card, index) => (
                                <div key={index} className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4 bg-white/20 backdrop-blur-lg p-6 rounded-lg shadow-md">
                                    <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-[#064ce4e1] text-white shadow-md flex">
                                        {card.icon}
                                    </div>
                                    <h1 className="text-3xl font-light  text-white">{card.heading}</h1>
                                    <p className="text-[18px] max-w-xl text-white">{card.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Link to='/paper-submission'>
                        <button className='relative cursor-pointer px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-lg rounded-lg hover:scale-105 duration-300 shadow-lg'>
                            Register Now
                        </button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Bottom
