import React from 'react';

const Connectivity = ({ data }) => {
    let locations = [];
    try {
        locations = JSON.parse(data?.connectivity || "[]");
        if(!Array.isArray(locations)) throw new Error("not array");
    } catch {
        locations = [];
    }

    return (
        <section className="py-24 bg-surface relative overflow-hidden" id="connectivity">
            <div className="container mx-auto px-8 w-full block">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <span className="block text-primary uppercase tracking-[0.2em] text-xs font-extrabold mb-4">Prime Vicinity</span>
                    <h2 className="font-headline italic text-5xl text-primary mb-6">Seamlessly Connected.</h2>
                    <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                        Strategically located in one of Mumbai's most promising suburbs, offering quick access to major hubs, healthcare, and education.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {locations.map((loc, index) => (
                        <div key={index} className="group relative bg-surface-container-low p-7 rounded-3xl border border-outline-variant hover:border-primary hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-700 overflow-hidden transform hover:-translate-y-1">
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 scale-50 group-hover:scale-150 transition-all duration-1000">
                                <span className="material-symbols-outlined text-8xl text-primary">{loc.icon || "location_on"}</span>
                            </div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700">
                                    <span className="material-symbols-outlined text-2xl">{loc.icon || "location_on"}</span>
                                </div>
                                <h3 className="font-headline text-xl text-primary mb-2 transition-colors duration-300">{loc.name}</h3>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-primary/40"></div>
                                    <p className="text-on-surface-variant font-bold text-xs tracking-[0.15em] uppercase opacity-60 group-hover:opacity-100 transition-opacity duration-300">{loc.distance}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Connectivity;
