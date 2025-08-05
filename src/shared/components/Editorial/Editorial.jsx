
import React from 'react'
import Edit from './Edit';
import Bottom from '../Bottom/Bottom';

function Editorial() {
    const Tech = [

        {
            name: "Twana A. Hamad",
            position: "Harran University",
            location: "Turkey"
        },

        {
            name: "Ammar Amjad",
            position: " National Yang Ming Chiao Tung University",
            location: "Taiwan"
        },


        {
            name: "Qiang Tong",
            position: "Shenzhen Institute of Information Technology",
            location: "China"
        },

        {
            name: "Abraham Musa Peter ",
            position: "Federal University Lokoja",
            location: "Nigeria"
        },
        { name: 'V. Pravenea', position: ' Dr.N.G.P Institute of Technology', location: ' India' },

        {
            name: "Waseem",
            position: "Jiangsu University",
            location: "China"
        },
        { name: 'Ankit Sharma', position: ' Nirma University', location: 'India' },
        { name: 'Theresa Omodunbi', position: 'Obafemi Awolowo University', location: 'Nigeria' },
        { name: 'Hua Qu', position: 'Tianjin Medical University', location: 'China' },
        { name: 'Satyabrata Roy', position: 'Manipal University Jaipur', location: 'India' },
        { name: 'Chen Li', position: 'Hangzhou TCM Hospital', location: 'China' },
        { name: 'K. Ramesh', position: ' V.R.S. College of Engineering and Technology', location: ' India' },
        { name: 'Asma Sbeih', position: 'Palestine Ahliya university', location: 'Palestine' },
        { name: 'R. Veerandrakumar', position: ' Panimalar Engineering College', location: 'India' },
        { name: 'Asef Shahriar', position: 'Khulna University of Engineering & Technology', location: 'Bangladesh' },
        { name: 'Zhao Qianyi', position: 'Jinan University', location: 'China' },
        { name: 'Elegbeleye Femi Abiodun', position: 'Walter Sisulu University', location: 'South Africa' },
        { name: 'Masoud Asghari', position: 'University of Maragheh', location: 'Iran' },
        { name: 'Maryam Anwer', position: 'Majma University', location: 'Saudi Arabia' },
        { name: 'G. Vinodhini', position: 'Annamalai University', location: 'India' },

        { name: 'Asghar Ali Shah', position: 'Bahria university', location: 'Pakistan' },

    ];
    return (
        <>
            <section className='min-h-[65vh]'>
                <div className="text-center mt-28">
                    <h1 className="text-3xl md:text-4xl font-bold md:pb-5 pb-5 font-sans relative inline-block after:content-[''] after:block after:w-40 after:h-1.5 after:bg-[#FFD700] after:mx-auto after:mt-2">
                        Editorial Board
                    </h1>
                </div>
                <div className="max-w-[90%]  font-sans lg:max-w-[80%] 2xl:max-w-[70%] mx-auto flex flex-col md:flex-col 2xl:items-start gap-5 lg:gap-5">
                    <div className='  text-justify md:text-[18px] font-medium leading-relaxed'>
                        The Editorial Board of the International Conference on Advances in Computer Science and Information Technology (ICACSIT) comprises a distinguished panel of scholars, academicians, and industry professionals from renowned institutions worldwide. Their expertise spans across diverse domains in computer science and IT, ensuring that the conference maintains the highest standards of academic excellence and integrity.                    </div>
                    <div className='  text-justify md:text-[18px] font-medium leading-relaxed'>
                        Our Editorial Board plays a vital role in upholding the scholarly value of the conference by overseeing the peer-review process, maintaining ethical publication practices, and providing strategic direction in line with global research trends.
                    </div>
                </div>
                <div className="max-w-[90%]  font-sans lg:max-w-[80%] 2xl:max-w-[70%] mt-10 mx-auto flex flex-col md:flex-col 2xl:items-start gap-5 lg:gap-5">
                    <h1 className='md:text-2xl font-bold '>Roles and Responsibilities : </h1>
                    <div className='  text-justify md:text-[18px] font-medium leading-relaxed'>
                        The Editorial Board of the International Conference on Advances in Computer Science and Information Technology (ICACSIT) comprises a distinguished panel of scholars, academicians, and industry professionals from renowned institutions worldwide. Their expertise spans across diverse domains in computer science and IT, ensuring that the conference maintains the highest standards of academic excellence and integrity.                    </div>
                    <div className='  text-justify md:text-[18px] font-medium leading-relaxed'>
                        Our Editorial Board plays a vital role in upholding the scholarly value of the conference by overseeing the peer-review process, maintaining ethical publication practices, and providing strategic direction in line with global research trends.
                    </div>
                </div>
                <div className='  bg-gray-100 md:p-6 p-3 rounded-lg font-sans w-fit   my-10 mx-auto flex flex-col md:flex-col 2xl:items-start gap-5 lg:gap-5'>
                    <div className="grid  bg-white p-3 md:p-6 grid-cols-1 lg:grid-cols-1 md:gap-5 gap-5 mx-auto">
                        {Tech.map((member, index) => (
                            <Edit key={index} position={member.position} name={member.name} location={member.location} />
                        ))}
                    </div>
                </div>
            </section>
            <Bottom />
        </>
    )
}

export default Editorial
