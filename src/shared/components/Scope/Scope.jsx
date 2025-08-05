import React from 'react'
import Bottom from '../Bottom/Bottom'

function Scope() {
    return (
        <>
            <section>
                <section className='md:mt-16 mt-16 '>
                    <div className="md:py-2 pt-10 md:pt-15">
                        <div className="text-center">
                            <h1 className="text-3xl md:text-4xl font-bold md:pb-0 pb-5 font-sans relative inline-block after:content-[''] after:block after:w-40 after:h-1.5 after:bg-[#FFD700] after:mx-auto after:mt-2">
                                Scope of the Conference
                            </h1>
                        </div>
                        <div className="max-w-[90%] lg:max-w-[80%] 2xl:max-w-[70%] mx-auto py-1 md:py-8 grid grid-cols-1 lg:grid-cols-2 lg:gap-15  font-sans" >
                            <p className="md:text-[18px] text-justify font-medium leading-relaxed md:mb-0  mb-5">
                                "The International Conference on Advanced Computer Science and Information Technology (ICACSIT) serves as a dynamic platform for researchers, academicians, industry professionals, and technology innovators to come together and share their latest findings, ideas, and innovations. This conference is dedicated to exploring cutting-edge advancements and emerging trends in computer science and information technology, fostering a global exchange of knowledge and collaboration and exploring cutting-edge advancements and emerging trends in computer science and information technology."
                            </p>
                            <div className="flex justify-center items-center">
                                <img className="h-[300px] object-top object-cover rounded-lg" src="/images/home/scope of conference.jpg" alt="Scope of Conference" />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="bg-white">
                <div className="max-w-[90%] lg:max-w-[80%] 2xl:max-w-[70%] mx-auto py-1 grid grid-cols-1 lg:grid-cols-1  font-sans">
                    <p className="mb-6 md:text-lg leading-relaxed text-justify font-medium ">
                        The <strong>International Conference on Advances in Computer Science and Information Technology (ICACSIT)</strong> aims to bring together leading academicians, researchers, practitioners, and industry experts to exchange ideas, share insights, and present their latest research findings in the evolving fields of computer science and information technology.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mb-10 font-medium ">
                        <div className=''>
                            <h3 className="text-xl font-semibold text-blue-800 mb-2">Core Areas of Interest</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Advanced Algorithms and Data Structures</li>
                                <li>Artificial Intelligence and Machine Learning</li>
                                <li>Big Data Analytics and Data Science</li>
                                <li>Cloud Computing and Edge Computing</li>
                                <li>Cybersecurity and Cryptography</li>
                                <li>Human-Computer Interaction</li>
                                <li>Software Engineering and Testing</li>
                                <li>IoT and Sensor Networks</li>
                                <li>Computer Vision and Image Processing</li>
                                <li>Natural Language Processing</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-blue-800 mb-2">Emerging Technologies</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Blockchain and Distributed Ledgers</li>
                                <li>Quantum Computing</li>
                                <li>AR/VR and Mixed Reality</li>
                                <li>Intelligent Systems and Smart Applications</li>
                                <li>Digital Twin and Simulation</li>
                                <li>Robotics and Autonomous Systems</li>
                            </ul>
                        </div>
                        <div className="md:mb-10">
                            <h3 className="text-xl font-semibold text-blue-800 mb-2">Information Technology Applications</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Health Informatics and Bioinformatics</li>
                                <li>E-Governance and Smart Cities</li>
                                <li>Educational Technologies and E-Learning</li>
                                <li>Financial Technology (FinTech)</li>
                                <li>Sustainable Computing</li>
                                <li>Information Systems and Databases</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Bottom />
        </>
    )
}

export default Scope
