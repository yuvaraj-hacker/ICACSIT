import React from 'react'
import Bottom from '../Bottom/Bottom';

function Dates() {
    const deadlines = [
        {
            title: 'Full Paper Submission Deadline',
            date: '2025-July-01',
        },
        {
            title: 'Notification of Decision',
            date: '2025-July-10',
        },
        {
            title: 'Deadline for Submitting Revised Full Paper',
            date: '2025-July-18',
        },
        {
            title: 'Notification of Acceptance',
            date: '2025-July-25',
        },
        {
            title: 'Camera-Ready Submission',
            date: '2025-August-05',
        },
        {
            title: 'Last Date for Registration',
            date: '2025-August-13',
        },
    ];

    return (
        <>
            <section>
                <section className="  pb-10 text-center mt-20">
                    <div className="text-center pt-10">
                        <h1 className="text-3xl md:text-5xl font-bold pb-6 md:pb-10 font-sans relative inline-block after:content-[''] after:block after:w-40 after:h-1.5 after:bg-[#FFD700] after:mx-auto after:mt-2">
                            Key Dates
                        </h1>
                    </div>
                    <div className="flex justify-center  pb-7">
                        <div className="max-w-[90%] lg:max-w-[80%] 2xl:max-w-[70%] mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-center gap-5 md:gap-10">
                                {deadlines.map((item, index) => (
                                    <div key={index} className="h-auto md:min-h-[250px] flex flex-col justify-between items-center rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 bg-white p-6"   >
                                        <div className="flex items-center justify-center text-3xl text-blue-600">
                                            <i className="fi fi-br-calendar-day"></i>
                                        </div>
                                        <h2 className="text-xl font-semibold text-black text-center mt-4">
                                            {item.title}
                                        </h2>
                                        <hr className="border-gray-300 w-full my-2" />
                                        <p className="text-[20px] mt-2 font-medium text-center w-full transform transition-transform duration-500 hover:scale-110 text-black">
                                            {item.date}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Bottom />
        </>
    )
}

export default Dates
