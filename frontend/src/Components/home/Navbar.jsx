import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-[#f8faf9]/80 backdrop-blur-lg shadow-sm">
            <div className="flex justify-between items-center px-8 py-4 max-w-full">
                <div className="flex items-center gap-2 text-[#006c4d]">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 opacity-90">
                        <path d="M12 2L2 22h2h16h2L12 2zm0 4.5l6.5 13h-13L12 6.5z" />
                    </svg>
                    <div className="flex flex-col ml-1">
                        <span className="text-xl font-headline italic tracking-[0.1em] leading-tight mt-1">Vighnaharta</span>
                        <span className="text-[9px] font-body font-bold tracking-[0.3em] uppercase -mt-0.5 ml-0.5">Infinity</span>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-8">
                    <a className="text-[#006c4d] border-b-2 border-[#006c4d] pb-1 font-body uppercase tracking-widest text-xs font-bold transition-colors duration-300" href="#home">Home</a>
                    <a className="text-emerald-800/70 hover:text-[#3eb489] font-body uppercase tracking-widest text-xs font-bold transition-colors duration-300" href="#overview">Overview</a>
                    <a className="text-emerald-800/70 hover:text-[#3eb489] font-body uppercase tracking-widest text-xs font-bold transition-colors duration-300" href="#amenities">Amenities</a>
                    <a className="text-emerald-800/70 hover:text-[#3eb489] font-body uppercase tracking-widest text-xs font-bold transition-colors duration-300" href="#floorplans">Floor Plans</a>
                    <a className="text-emerald-800/70 hover:text-[#3eb489] font-body uppercase tracking-widest text-xs font-bold transition-colors duration-300" href="#contact">Contact</a>
                </div>
                <button className="primary-gradient text-on-primary px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-95 duration-150 shadow-lg shadow-primary/20">
                    Enquiry Now
                </button>
            </div>
        </nav>
    );
};
export default Navbar;
