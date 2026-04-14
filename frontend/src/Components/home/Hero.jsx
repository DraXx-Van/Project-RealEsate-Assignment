import React from 'react';

const Hero = ({ data }) => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="home">
            <div className="absolute inset-0 z-0">
                <img alt="Luxury Residential Exterior" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt_a5eceAF1lRa-G5YheHrX0-oH8ASnPcTlNqwnq_E9xWduYFTWKBRcI2NFtc1zU_xekTh4vg_ZcpM9fJLuUhuH_Pj36xSh4OD019NBpul_pWr5Xgm1H96acx7I8cN0wpcFcsI5LM-L7jjfc8gJNC1eqYJlY6ZHLiC4hS-gDnNS9upPgntyrofMLDTmQyxzUae-s0BRVd5KRY9F0mvYputV92oOXcfI0zP6k6QBv4-F6LacBR8Z1QVT8HTKHy67jjtnnt3Dk3o8pM"/>
                <div className="absolute inset-0 bg-black/30 hero-gradient"></div>
            </div>
            <div className="container mx-auto px-8 relative z-10 w-full mt-12">
                <div className="max-w-4xl">
                    <span className="block text-primary-fixed uppercase tracking-[0.25em] text-xs font-bold mb-4 opacity-90 drop-shadow-sm">Experience Unlimited Serenity</span>
                    <h1 className="font-headline italic text-[3.5rem] md:text-7xl text-white mb-10 leading-[1.05] drop-shadow-lg whitespace-pre-line">
                        {data?.heroText || "THINKING OF A \nFANTASTIC VICINITY?"}
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[550px]">
                        <div className="bg-surface/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-xl">
                            <h3 className="text-white text-[10px] uppercase tracking-widest mb-1.5 opacity-70">1 BHK Apartments</h3>
                            <p className="text-white text-2xl font-headline italic">Starting ₹ 75 Lakhs*</p>
                        </div>
                        <div className="bg-surface/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-xl">
                            <h3 className="text-white text-[10px] uppercase tracking-widest mb-1.5 opacity-70">2 BHK Apartments</h3>
                            <p className="text-white text-2xl font-headline italic">Starting ₹ 1.2 Crores*</p>
                        </div>
                    </div>
                    <div className="mt-12 flex flex-wrap gap-4">
                        <button className="primary-gradient text-on-primary px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-95 transition-transform duration-150">
                            Book A Site Visit
                        </button>
                        <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/20 transition-all">
                            View Virtual Tour
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
