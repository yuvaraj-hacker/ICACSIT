import { useRef } from "react";
import Bottom from "../Bottom/Bottom";

export default function HeroSection({ data }) {
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
      <section className="h-[100vh] bg-cover bg-center flex flex-col relative" style={{ backgroundImage: "url('/images/home/101865.jpg')" }}  >
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-black/45 to-black/10"></div>
        <div className="relative flex flex-col py-[40vh] px-7 md:px-30 lg:px-70 text-white text-center items-center">
          <p className="text-xl md:text-4xl font-bold font-mono" style={{ opacity: 1, transform: 'none' }} >
            18<sup>th</sup> August - 2025
          </p>
          <h1 className="text-3xl md:text-5xl xl:text-6xl font-medium font-sans tracking-tight bg-gradient-to-r from-[#FFD700] via-[#F3B552] to-[#8B8608] bg-clip-text text-transparent" style={{ transform: 'none', opacity: 1 }}>
            International Conference
          </h1>
          <span className="md:text-[25px] font-sans py-3 md:py-7 font-medium" style={{ opacity: 1, transform: 'none' }} >
            Advances in Computer Science and Information Technology
          </span>
          <div className="flex justify-center w-full" style={{ opacity: 1, transform: 'none' }}>
            <a className="w-40 cursor-pointer py-3 px-6 text-white font-semibold border-2 border-white rounded-lg transition-all duration-300 ease-in-out hover:bg-[#F3B552] hover:text-white hover:border-[#F3B552] hover:scale-105" href="/paper-submission" data-discover="true"  >
              Register Now
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="py-10 pt-10 md:pt-15">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold md:pb-10 pb-5 font-sans relative inline-block after:content-[''] after:block after:w-40 after:h-1.5 after:bg-[#FFD700] after:mx-auto after:mt-2">
              About the Conference
            </h1>
          </div>
          <div className="max-w-[90%] lg:max-w-[80%] 2xl:max-w-[70%] mx-auto flex flex-col md:flex-row 2xl:items-start gap-5 lg:gap-15">
            <div className="w-full md:w-[40%] flex items-center  justify-center">
              <img src="/images/home/young-man.jpg" alt="About Us" loading="lazy" className="h-[250px] w-[350px] md:h-[300px] md:w-full xl:h-[350px] rounded-[10px] object-cover" />
            </div>
            <div className="w-full md:w-[70%] font-sans">
              <h1 className="text-xl text-black md:text-2xl font-bold pb-3 md:pb-6">    The International Conference on Advanced Computer Science and Information Technology    </h1>
              <p className="pb-3 md:pb-6 text-justify md:text-[18px] font-medium leading-relaxed">
                We are pleased to invite researchers, academicians, industry professionals, and students from around the world to join us for this prestigious event. The conference aims to bring together innovative minds to exchange and explore the latest advancements, trends, challenges, and solutions in the rapidly evolving fields of Computer Science and Information Technology.
              </p>
              <div className="flex flex-col">
                <p className="flex gap-2 md:text-2xl text-base items-center font-bold text-black">
                  <i class="fi fi-sr-marker flex items-center"></i>  Location
                </p>
                <p className="md:text-[20px]">Abuja, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="md:py-10 md:pt-15">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold md:pb-3 pb-5  font-sans relative inline-block after:content-[''] after:block after:w-40 after:h-1.5 after:bg-[#FFD700] after:mx-auto after:mt-2">
              Scope of the Conference
            </h1>
          </div>
          <div className="max-w-[90%] lg:max-w-[80%] 2xl:max-w-[70%] mx-auto py-1 md:py-8 grid grid-cols-1 lg:grid-cols-2 lg:gap-15">
            <p className="md:text-[18px] text-justify font-medium leading-relaxed md:mb-0  mb-5 font-sans">
              "The International Conference on Advanced Computer Science and Information Technology serves as a dynamic platform for researchers, academicians, industry professionals, and technology innovators to come together and share their latest findings, ideas, and innovations. This conference is dedicated to exploring cutting-edge advancements and emerging trends in computer science and information technology, fostering a global exchange of knowledge and collaboration and exploring cutting-edge advancements and emerging trends in computer science and information technology."
            </p>
            <div className="flex justify-center items-center">
              <img className="h-[300px] object-top object-cover rounded-lg" src="/images/home/scope of conference.jpg" alt="Scope of Conference" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 pb-10 text-center">
        <div className="text-center pt-10">
          <h1 className="text-3xl md:text-4xl font-bold pb-6 md:pb-10 font-sans relative inline-block after:content-[''] after:block after:w-40 after:h-1.5 after:bg-[#FFD700] after:mx-auto after:mt-2">
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
      <Bottom />

    </>
  );
}