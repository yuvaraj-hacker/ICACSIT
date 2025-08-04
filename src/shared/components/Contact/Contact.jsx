import React, { useState } from 'react'
import { toast } from 'react-toastify';


function Contact() {
    const [formData, setFormData] = useState({ firstname: "", email: "", number: "", message: "" });
    const [status, setStatus] = useState('');
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('firstname', formData.firstname);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('number', formData.number);
            formDataToSend.append('message', formData.message);
            const response = await fetch('http://192.168.1.30/ICACSIT/icacsit/message_mail.php', {
                method: 'POST',
                body: formDataToSend,
            });
            if (response.ok) {
                const result = await response.text();
                setStatus(result);
                setFormData({ firstname: '', email: '', number: '', message: '', });
                toast.success("submitted successfully!");
                console.log("success")
            } else {
                setStatus('Failed to send submission. Please try again.');
                toast.error('Failed to send submission. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred. Please try again.');
            toast.error('An error occurred. Please try again.');
        }
    };

    return (
        <>
            <section>
                <div className="flex flex-col items-center md:mt-20 mt-10 py-10">
                    <div className="text-center pt-5">
                        <h1 className="text-3xl md:text-5xl font-bold   font-sans relative inline-block after:content-[''] after:block after:w-40 after:h-1.5 after:bg-[#FFD700] after:mx-auto after:mt-2">
                            Contact Us
                        </h1>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5 grid-cols-1 md:py-10 py-5 px-6 w-full max-w-5xl">
                        <div className="flex flex-col gap-4 md:gap-6 md:px-9 bg-white p-4 md:p-8 rounded-xl shadow-xl w-full">
                            <h1 className="md:text-3xl text-xl font-bold font-sans text-gray-700 pb-5">Get in Touch</h1>
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <input type="text" name="firstname" id="firstname" value={formData.firstname} onChange={handleChange} placeholder="Enter your name" className="w-full h-12 p-2 text-lg border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600" required />
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-full h-12 p-2 text-lg border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600" required />
                                <input type="text" name="number" id="number" onChange={handleChange} value={formData.number} placeholder="Enter your number" className="w-full h-12 p-2 text-lg border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600" required />
                                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" className="w-full h-40 p-4 text-lg border rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-600" required   ></textarea>
                                <button type="submit" className="w-full cursor-pointer p-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-500 flex justify-center items-center gap-2"  >
                                    {status === 'Sending...' ? 'Submitting...' : 'Send message'}
                                    {/* Submit */}
                                </button>
                            </form>
                        </div>
                        <div className="flex flex-col gap-6 bg-white p-8 rounded-xl shadow-xl w-full md:px-10">
                            <h2 className="text-3xl font-bold font-sans pb-5">Contact Details</h2>
                            <div className="flex items-center gap-4">
                                <i class="fi fi-ts-land-layer-location text-2xl text-red-500 flex items-center  "></i>
                                <p className="md:text-2xl">Abuja, Nigeria</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <i class="fi fi-rs-phone-call text-2xl text-green-500 flex items-center"></i>
                                <p className="md:text-2xl">+91 1234567890</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <i class="fi fi-rr-envelope flex items-center text-2xl text-blue-500"></i>
                                <p className="md:text-2xl">info.icacsit@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
