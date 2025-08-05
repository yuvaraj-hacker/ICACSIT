import { Briefcase, Building2, MapPin, User } from 'lucide-react'

function Edit({ position, name, location }) {
    return (
        <>
            <div className=" relative   ">
                <div className="relative z-10 text-center  flex flex-col gap-2 ">
                    <div>
                        {/* <i class="fi fi-rr-circle-user text-xl"></i> */}
                        <h3 className="md:text-lg font-semibold text-gray-800 text-left  -hover:text-blue-600 transition-colors duration-300">
                            Dr. {name}, <span className='text-gray-600 font-medium font-serif italic'>{position}, {location}</span>
                        </h3>
                    </div>
                    {/* <div className="flex items-center justify-center gap-2 text-gray-600">

                        <p className="text-sm font-medium">{position}</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-500">

                        <p className="text-sm">{location}</p>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Edit
