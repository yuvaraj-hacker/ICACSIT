import React from 'react'
import Bottom from '../Bottom/Bottom'

function ConferenceTracks() {
    return (
        <>
            <section className='mt-28'>
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl  font-bold pb-5  relative inline-block after:content-[''] after:block after:w-40 after:h-1.5 after:bg-[#FFD700] after:mx-auto after:mt-2">
                        Conference Tracks
                    </h1>
                </div>
                <div className='max-w-[90rem] mx-auto  md:px-5  px-3'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1   gap-5 mb-10'>
                        <div className=" mx-auto text-left py-6 px-4 flex flex-col gap-4 shadow-lg rounded-lg w-full h-full">
                            <h1 className='md:text-xl text-lg font-semibold text-[#155DFC]'>Artificial Intelligence & Machine Learning</h1>
                            <ul className="list-disc pl-5 space-y-2 ">
                                <li>Deep Learning Architectures & Applications</li>
                                <li>Explainable AI & Trustworthy Systems</li>
                                <li>AI for Edge Computing & IoT</li>
                                <li>Large Language Models & Generative AI</li>
                            </ul>
                        </div>
                        <div className=" mx-auto text-left py-6 px-4 flex flex-col gap-4 shadow-lg rounded-lg w-full h-full">
                            <h1 className='md:text-xl text-lg  font-semibold text-[#155DFC]'>Quantum Computing & Future Computing</h1>
                            <ul className="list-disc pl-5 space-y-2 ">
                                <li>Quantum Algorithms & Cryptography</li>
                                <li>Neuromorphic Computing & Brain-Inspired AI</li>
                                <li>High-Performance & Exascale Computing</li>
                                <li>DNA & Bio-Computing</li>
                            </ul>
                        </div>
                        <div className=" mx-auto text-left py-6 px-4 flex flex-col gap-4 shadow-lg rounded-lg w-full h-full">
                            <h1 className='md:text-xl text-lg  font-semibold text-[#155DFC]'>Intelligent Systems & Automation</h1>
                            <ul className="list-disc pl-5 space-y-2 ">
                                <li>Autonomous Systems & Robotics</li>
                                <li>Human-AI Collaboration & Cognitive Computing</li>
                                <li>AI in Cybersecurity & Threat Detection</li>
                                <li>Intelligent Cloud & Edge Computing</li>
                            </ul>
                        </div>
                        <div className=" mx-auto text-left py-6 px-4 flex flex-col gap-4 shadow-lg rounded-lg w-full h-full" >
                            <h1 className='md:text-xl text-lg  font-semibold text-[#155DFC]'>Data Science & Big Data Technologies</h1>
                            <ul className="list-disc pl-5 space-y-2 ">
                                <li>Scalable Data Engineering & Real-Time Analytics</li>
                                <li>AI-Driven Decision Making </li>
                                <li>Knowledge Graphs & Semantic Computing</li>
                                <li>Federated Learning & Privacy-Preserving AI</li>
                            </ul>
                        </div>
                        <div className=" mx-auto text-left py-6 px-4 flex flex-col gap-4 shadow-lg rounded-lg w-full h-full">
                            <h1 className='md:text-xl text-lg  font-semibold text-[#155DFC]'>Internet of Things (IoT) & Smart Technologies</h1>
                            <ul className="list-disc pl-5 space-y-2 ">
                                <li>AI for Smart Cities & Urban Intelligence</li>
                                <li>IoT Security & Blockchain Integration</li>
                                <li>Digital Twins & Industrial IoT</li>
                                <li>AI in Wearable Tech & Healthcare IoT</li>
                            </ul>
                        </div>
                        <div className=" mx-auto text-left py-6 px-4 flex flex-col gap-4 shadow-lg rounded-lg w-full h-full">
                            <h1 className='md:text-xl text-lg  font-semibold text-[#155DFC]'>NLP & Computer Vision</h1>
                            <ul className="list-disc pl-5 space-y-2 ">
                                <li>Multimodal AI & Speech Processing</li>
                                <li>AI-Powered Content Generation</li>
                                <li>Large-Scale Image & Video Analysis</li>
                                <li>Sentiment Analysis & Emotion Recognition</li>
                            </ul>
                        </div>
                        <div className=" mx-auto text-left py-6 px-4 flex flex-col gap-4 shadow-lg rounded-lg w-full h-full">
                            <h1 className='md:text-xl text-lg  font-semibold text-[#155DFC]'>Cyber-Physical Systems & Embedded AI</h1>
                            <ul className="list-disc pl-5 space-y-2 ">
                                <li>AI for Embedded & Real-Time Systems</li>
                                <li>Edge AI & TinyML for Low-Power Devices</li>
                                <li>Secure & Resilient AI Systems</li>
                                <li>AI in Transportation & Smart Mobility</li>
                            </ul>
                        </div>
                        <div className=" mx-auto text-left py-6 px-4 flex flex-col gap-4 shadow-lg rounded-lg w-full h-full">
                            <h1 className='md:text-xl text-lg  font-semibold text-[#155DFC]'>Ethics, Governance & Social AI</h1>
                            <ul className="list-disc pl-5 space-y-2 ">
                                <li>AI Bias, Fairness & Ethical AI</li>
                                <li>AI Regulations & Governance Policies</li>
                                <li>AI's Impact on Jobs & Future Workforce</li>
                                <li>Sustainable AI & Green Computing</li>
                            </ul>
                        </div>
                        <div className=" mx-auto text-left py-6 px-4 flex flex-col gap-4 shadow-lg rounded-lg w-full h-full">
                            <h1 className='md:text-xl text-lg  font-semibold text-[#155DFC]'>  Computational Intelligence and Soft Computing</h1>
                            <ul className="list-disc pl-5 space-y-2 ">
                                <li>Fuzzy Logic and Neural Networks</li>
                                <li>Evolutionary Computation and Genetic Algorithms</li>
                                <li>Swarm Intelligence and Nature-Inspired Computing</li>
                                <li>Hybrid Intelligent Systems and Applications</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Bottom />
        </>
    )
}

export default ConferenceTracks
