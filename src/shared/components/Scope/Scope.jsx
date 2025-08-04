import React from 'react'
import Bottom from '../Bottom/Bottom'

function Scope() {
    return (
        <>
            <section>
                <section className='md:mt-16 mt-16  min-h-[65vh]'>
                    <div className="md:py-10 pt-10 md:pt-15">
                        <div className="text-center">
                            <h1 className="text-3xl md:text-5xl font-bold md:pb-5 pb-5 font-sans relative inline-block after:content-[''] after:block after:w-40 after:h-1.5 after:bg-[#FFD700] after:mx-auto after:mt-2">
                                Scope of the Conference
                            </h1>
                        </div>
                        <div className="max-w-[90%] lg:max-w-[80%] 2xl:max-w-[70%] mx-auto py-1 md:py-8 grid grid-cols-1 lg:grid-cols-2 lg:gap-15  font-sans" >
                            <p className="md:text-[20px] text-justify font-medium leading-relaxed md:mb-0  mb-5">
                                "The International Conference on Advanced Computer Science and Information Technology (ICACSIT) serves as a dynamic platform for researchers, academicians, industry professionals, and technology innovators to come together and share their latest findings, ideas, and innovations. This conference is dedicated to exploring cutting-edge advancements and emerging trends in computer science and information technology, fostering a global exchange of knowledge and collaboration and exploring cutting-edge advancements and emerging trends in computer science and information technology."
                            </p>
                            <div className="flex justify-center items-center">
                                <img className="h-[300px] object-top object-cover rounded-lg" src="/images/home/scope of conference.jpg" alt="Scope of Conference" />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Bottom />
        </>
    )
}

export default Scope
