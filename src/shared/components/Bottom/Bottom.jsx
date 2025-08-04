import React from 'react'

function Bottom() {
    const infoCards = [
        {
            icon: <i className="fi fi-ts-land-layer-location flex items-center"></i>,
            heading: 'Where',
            content: (
                <>
                    {/* International Convention Center, */}

                    Abuja, Nigeria
                </>
            ),
        },
        {
            icon: <i className="fi fi-rr-clock flex items-center"></i>,
            heading: 'When',
            content: 'August 18, 2025',
        },
        {
            icon: <i className="fi fi-rr-envelope flex items-center"></i>,
            heading: 'Email',
            content: 'info.icacsit@gmail.com',
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
                                    <h1 className="text-3xl font-semibold text-white">{card.heading}</h1>
                                    <p className="text-[20px] max-w-xl text-white">{card.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bottom
