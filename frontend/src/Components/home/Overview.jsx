import React from 'react';

const Overview = ({ data }) => {
    return (
        <section className="py-24 bg-surface relative overflow-hidden" id="overview">
            <div className="container mx-auto px-8 w-full block">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-7 relative">
                        <div className="relative z-10 w-4/5 aspect-square rounded-full overflow-hidden border-[16px] border-surface-container-low editorial-overlap">
                            <img alt="Modern Living Room" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6zZ6x7buqqv09v1f7ViIbirr4iDkVhd2XBcmBlZoj1KgiFgCoBXXlWJRFXaSc30gMltV0-BuMffCvS1c-Sg51sSETG2b-CUYC5CrFbSYb6WLvb8PfGHN-h-FU6hKjL4X_hvcOcI2eOMUtSGcwDI_l7ozw0g1e49kazcmiMEltOMbeKuPiCmfk_eVEADZuT_ABJftdjsZpu-IRUm271ezL5zHCJM71C8tIZ1A7X1pxDqch1j6FOPwgrB-tJgWOgGKlKx6OFSIIULs"/>
                        </div>
                        <div className="absolute -bottom-12 -right-4 z-20 w-1/2 aspect-square rounded-full overflow-hidden border-[12px] border-surface editorial-overlap">
                            <img alt="Interior Details" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeW7N2T2Fzk6rc4idYczlzBIFuViROVcPnphEBXQA3ty8RvYDHGU5Fx8RpyeM4GyixfouWBH_tRnxcxTB0p3GCNkTIriVDvowbMED2iq8B2YUMzccV2vDq8UmXW_v5BxFw_9DXSCpejwCaP_VNKruht666wSOFnCXL40oLvHmgYTc7Z7WYNGvgXYJn6YHvK6K_JXhgA0Vtd4ikw8S5cbyA3V_Ny5KybnlupBXY29jiRcix6uo4hWPp6alNu-_Ppk_zY-fmhY5Vr38"/>
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <span className="block text-primary uppercase tracking-[0.2em] text-xs font-extrabold mb-4">The Narrative</span>
                        <h2 className="font-headline italic text-5xl text-primary mb-8">Architectural Brilliance In Every Corner.</h2>
                        <div className="space-y-6 text-on-surface-variant leading-relaxed mb-10 whitespace-pre-line">
                            <p>{data?.overview || "Vighnaharta Infinity is more than just a residence; it's a meticulously curated lifestyle statement. Designed by world-class architects, the structure blends modern aesthetics with functional luxury.\n\nLocated in the heart of the city's most promising hub, it offers unparalleled connectivity while maintaining a serene sanctuary-like atmosphere for you and your family."}</p>
                        </div>
                        <button className="flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-sm hover:gap-5 transition-all">
                            <span>Download Brochure</span>
                            <span className="material-symbols-outlined">download</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Overview;
