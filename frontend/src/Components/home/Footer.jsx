import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#f8faf9] border-t border-emerald-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 w-full max-w-7xl mx-auto">
                <div className="space-y-6">
                    <div className="font-headline italic text-xl text-[#006c4d]">Vighnaharta Infinity</div>
                    <p className="text-emerald-700/60 text-sm leading-relaxed max-w-xs">Crafting infinite possibilities in luxury living since 1998. Your sanctuary awaits.</p>
                    <div className="flex gap-4">
                        <a className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-[#006c4d] hover:bg-primary hover:text-white transition-all" href="#"><span className="material-symbols-outlined text-xl">public</span></a>
                        <a className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-[#006c4d] hover:bg-primary hover:text-white transition-all" href="#"><span className="material-symbols-outlined text-xl">mail</span></a>
                        <a className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-[#006c4d] hover:bg-primary hover:text-white transition-all" href="#"><span className="material-symbols-outlined text-xl">call</span></a>
                    </div>
                </div>
                <div className="space-y-6">
                    <h4 className="font-headline italic text-lg text-[#006c4d]">Quick Links</h4>
                    <ul className="space-y-3">
                        <li><a className="text-emerald-700/60 text-sm hover:underline hover:text-[#006c4d] transition-colors" href="#">Privacy Policy</a></li>
                        <li><a className="text-emerald-700/60 text-sm hover:underline hover:text-[#006c4d] transition-colors" href="#">Terms of Service</a></li>
                        <li><a className="text-emerald-700/60 text-sm hover:underline hover:text-[#006c4d] transition-colors" href="#">RERA Registration</a></li>
                        <li><a className="text-emerald-700/60 text-sm hover:underline hover:text-[#006c4d] transition-colors" href="#">Site Map</a></li>
                    </ul>
                </div>
                <div className="space-y-6">
                    <h4 className="font-headline italic text-lg text-[#006c4d]">Site Address</h4>
                    <p className="text-emerald-700/60 text-sm leading-relaxed">Infinity Heights, Sector 24, <br/>Palm Beach Road, <br/>Navi Mumbai - 400706</p>
                    <div className="rounded-xl overflow-hidden h-32 w-full editorial-overlap grayscale hover:grayscale-0 transition-all duration-500">
                        <img alt="Map Preview" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf5LLH_7_2XXAcPEp8Ra2-ShuHAwhmm_sQTqYj1yGj-enskczaDyC6mLKCt6S4_On1mEE6HUpDC8pWL8m09lKO-SXGu40bD5ff1omA_vAUpyZ-Cv3TfjL9PBbkau9O87cLKhaeIUccBw0ClS2OUNVkD8Xsam4bysnNFDtVdG2XyiCHC9Wm7CakX4cvLBeWg2oC4lx76Is3H-CmnMzusurlPwtg95DFhI0HrChoayXtFzUAbi-T1-xuC0-nSOqtzPvyx6r8JGmYi34"/>
                    </div>
                </div>
            </div>
            <div className="px-12 py-8 border-t border-emerald-50 text-center">
                <p className="text-emerald-700/40 text-xs tracking-widest uppercase">
                    © 2026 Vighnaharta Infinity. All Rights Reserved. | Designed & Developed by <span className="font-bold text-[#006c4d]">DraXx</span>
                </p>
            </div>
        </footer>
    );
};
export default Footer;
