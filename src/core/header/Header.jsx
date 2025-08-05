import { Sling as Hamburger } from 'hamburger-react'
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import 'preline/preline';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpe, setIsDropdownOpe] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdow = () => {
    setIsDropdownOpe(!isDropdownOpe);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const location = useLocation();
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const isHome = location.pathname === '/';

  return (
    <>

      <header className={`relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full  text-sm py-3     ${!isHome || scrolled || (isHome && isMobile) ? "bg-black/90" : " bg-transparent"} `}>
        <nav className="max-w-[110rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-between">
            <a className="flex-none text-xl font-semibold dark:text-white focus:outline-hidden focus:opacity-80" href="#" aria-label="Brand">
              <Link to='/'>
                <img className='lg:w-40 w-40 h-14' src="/images/home/logo.webp" alt="LOGO" />
              </Link>
            </a>
            <div className="sm:hidden">
              <button type="button" className="hs-collapse-toggle relative   flex justify-center items-center gap-x-2 rounded-lg  shadow-2xs  focus:outline-hidden   disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent "
                id="hs-navbar-example-collapse"
                aria-expanded={menuOpen ? "true" : "false"}
                aria-controls="hs-navbar-example"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-navbar-example"
                onClick={() => setMenuOpen(!menuOpen)} >
                <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={20} color={menuOpen ? "#fff" : "#fff"} direction="right" />
                <span className="sr-only">Toggle navigation</span>
              </button>
            </div>
          </div>
          <div id="hs-navbar-example" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-example-collapse"   >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <a to='/' onClick={() => setIsDropdownOpen(false)} className="font-medium text-white focus:outline-hidden  text-base" href="/" aria-current="page">
                Home
              </a>
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--adaptive:adaptive]">
                <button id="hs-navbar-example-dropdown" type="button" onClick={toggleDropdown} className={`hs-dropdown-toggle flex items-center w-full text-white text-base gap-1 cursor-pointer font-medium ${isDropdownOpen ? 'text-blue-400' : ''}`} aria-haspopup="menu" aria-expanded={isDropdownOpen} aria-label="Mega Menu"  >
                  About Us
                  <i className={`fi fi-rr-angle-small-down transform transition-transform text-sm duration-200 mt-1 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} ></i>
                </button>
                <div className="hs-dropdown-menu transition-[opacity,margin] ease-in-out duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-56 z-10   sm:shadow-md rounded-lg p-1 space-y-1 bg-black before:absolute top-full  before:-top-5 before:start-0 before:w-full before:h-5 hidden"
                  role="menu" aria-orientation="vertical" aria-labelledby="hs-navbar-example-dropdown" >
                  <a to='/about' onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700" href="/about">
                    About the Conference
                  </a>
                  <a to='/scope' onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700" href="/scope">
                    Scope of the Conference
                  </a>
                  <a to='/editorial' onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700" href="/editorial">
                    Editorial Board
                  </a>
                </div>
              </div>
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--adaptive:adaptive]">
                <button id="hs-navbar-example-dropdown" type="button" onClick={toggleDropdow} className={`hs-dropdown-toggle flex items-center w-full text-white text-base gap-1 cursor-pointer font-medium ${isDropdownOpe ? 'text-blue-400' : ''}`} aria-haspopup="menu" aria-expanded={isDropdownOpe} aria-label="Mega Menu"   >
                  Author Desk's
                  <i className={`fi fi-rr-angle-small-down transform transition-transform text-sm duration-200 mt-1 ${isDropdownOpe ? 'rotate-180' : 'rotate-0'}`}  ></i>
                </button>
                <div className="hs-dropdown-menu transition-[opacity,margin] ease-in-out duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-56 z-10   sm:shadow-md rounded-lg p-1 space-y-1 bg-black before:absolute top-full  before:-top-5 before:start-0 before:w-full before:h-5 hidden"
                  role="menu" aria-orientation="vertical" aria-labelledby="hs-navbar-example-dropdown" >
                  <a to='/conference-tracks' onClick={() => setIsDropdownOpe(false)} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700" href="/conference-tracks">
                    Conference Tracks
                  </a>
                  <a to='/dates' onClick={() => setIsDropdownOpe(false)} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700" href="/dates">
                    Key Dates
                  </a>
                  <a to='/paper-submission' onClick={() => setIsDropdownOpe(false)} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700" href="/paper-submission">
                    Paper Submission
                  </a>
                </div>
              </div>
              <a className="font-medium text-white text-base sm:pb-0 pb-5" href="/contact">
                Contact Us
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
