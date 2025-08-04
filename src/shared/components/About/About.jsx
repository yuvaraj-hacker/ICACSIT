import React from 'react'
import Bottom from '../Bottom/Bottom'

function About() {
    return (
        <>
            <section className='md:mt-20 mt-10  min-h-[65vh]'>
                <section>
                    <div className="py-10 pt-16  md:pt-10">
                        <div className="text-center">
                            <h1 className="text-3xl md:text-5xl font-bold pb-5 font-sans relative inline-block after:content-[''] after:block after:w-40 after:h-1.5 after:bg-[#FFD700] after:mx-auto after:mt-2">
                                About the Conference
                            </h1>
                        </div>
                        <div className="max-w-[90%] lg:max-w-[80%] 2xl:max-w-[70%] mx-auto flex flex-col md:flex-row 2xl:items-center gap-5 lg:gap-15">
                            <div className="w-full md:w-[40%] flex items-center justify-center ">
                                <img src="/images/home/young-man.jpg" alt="About Us" loading="lazy" className="h-[250px] w-[350px] md:h-[300px] md:w-full xl:h-[350px] rounded-[10px] object-cover" />
                            </div>
                            <div className="w-full md:w-[70%] font-sans">
                                <h1 className="text-xl text-black md:text-4xl font-bold pb-3 md:pb-6"> The International Conference on Advanced Computer Science and Information Technology    </h1>
                                <p className="pb-3 md:pb-6 text-justify md:text-[18px] font-medium leading-relaxed">
                                    We are pleased to invite researchers, academicians, industry professionals, and students from around the world to join us for this prestigious event. The conference aims to bring together innovative minds to exchange and explore the latest advancements, trends, challenges, and solutions in the rapidly evolving fields of Computer Science and Information Technology.                                </p>
                                <p className="pb-3 md:pb-6 text-justify md:text-[18px] font-medium leading-relaxed">
                                    This conference aims to foster collaboration and knowledge exchange in areas such as Artificial Intelligence, Machine Learning, Data Science, Cloud Computing, Internet of Things (IoT), Cybersecurity, Quantum Computing, and other next-generation computing paradigms. It will serve as a forum to present cutting-edge research, share insights, and discuss the practical challenges and solutions shaping the future of intelligent systems.                                                                  </p>
                                <div className="flex flex-col">
                                    <p className="flex gap-2 text-2xl items-center font-bold text-black">
                                        {/* <FaLocationDot className="text-[20px]" /> */}
                                        Location
                                    </p>
                                    <p className="text-[20px]">Abuja, Nigeria</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-10 pt-10 md:pt-10">
                        <div className="text-center">
                            <h1 className="text-3xl md:text-5xl font-bold pb-5 font-sans relative inline-block after:content-[''] after:block after:w-40 after:h-1.5 after:bg-[#FFD700] after:mx-auto after:mt-2">
                                Vision of the Conference
                            </h1>
                        </div>
                        <div className="max-w-[90%]  font-sans lg:max-w-[80%] 2xl:max-w-[70%] mx-auto flex flex-col md:flex-col 2xl:items-start gap-5 lg:gap-5">
                            <div className='  text-justify md:text-[18px] font-medium leading-relaxed'>
                                The International Conference on Advanced Computer Science and Information Technology (ICACSIT) envisions fostering a dynamic platform for researchers, academicians, and industry professionals to exchange knowledge, explore cutting-edge advancements, and collaboratively shape the future of computing and information systems. The conference aims to bridge theoretical research with real-world applications, promoting innovation, sustainability, and inclusive technological growth on a global scale.
                            </div>
                            <div className='  text-justify md:text-[18px] font-medium leading-relaxed'>
                                The vision of the conference is to promote excellence in research and innovation by fostering collaboration across academia, industry, and government. It seeks to provide a fertile environment for presenting pioneering ideas, exchanging scientific knowledge, and exploring emerging trends and challenges in areas such as Artificial Intelligence, Big Data, Cloud Computing, Cybersecurity, IoT, Blockchain, and Human-Centered Computing.                              </div>
                            <div className='  text-justify md:text-[18px] font-medium leading-relaxed'>
                                ICACSIT is committed to nurturing a vibrant community that supports ethical research practices, interdisciplinary collaboration, and the development of sustainable technological solutions that address real-world problems. The conference aims to inspire the next generation of researchers and practitioners to push the boundaries of what’s possible in the digital era.
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Bottom />
        </>
    )
}

export default About
