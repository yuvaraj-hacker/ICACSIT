import React from 'react'

export default function Footer() {
  return (
    <section>
      <footer className="bg-black text-white py-5 pb-5 flex justify-center">
        <div className="w-4/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-3">Pages</h3>
              <ul className="space-y-2 md:text-lg">
                <li>
                  <a className="hover:text-blue-500" href="/" data-discover="true">Home</a>
                </li>
                <li>
                  <a className="hover:text-blue-500" href="/about" data-discover="true">About the Conference</a>
                </li>
                <li>
                  <a className="hover:text-blue-500" href="/scope" data-discover="true">Scope of the conference</a>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-3">Conference Information</h3>
              <ul className="space-y-2 md:text-lg">
                <li>
                  <a className="hover:text-blue-500" href="/conference-tracks">Conference Tracks</a>
                </li>
                <li>
                  <a className="hover:text-blue-500" href="/paper-submission" data-discover="true">Paper Submission</a>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-3">Contact</h3>
              <ul className="space-y-2 md:text-lg">
                <li>
                  Email: <a href="mailto:support@acsitconference.com" className="hover:text-blue-500">contact.icacsit@gmail.com</a>
                </li>
                {/* <li>
                  Phone: <a href="tel:+14157891234" className="hover:text-blue-500">+91 1234567890</a>
                </li> */}
                <li>
                  Location: Abuja, Nigeria
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-4 md:text-base text-sm text-center text-gray-400">
            <p>© 2025 ICACSIT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  )
}
