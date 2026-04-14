import React from 'react';

const Amenities = ({ data }) => {
    let cards = [];
    try {
        cards = JSON.parse(data?.amenities || "[]");
        if(!Array.isArray(cards)) throw new Error("not array");
    } catch {
        // Fallback for transition
        const parts = (data?.amenities || "").split(",");
        cards = parts.map((title) => ({
            title: title.trim(),
            icon: 'spa',
            description: 'Experience refined living.'
        })).filter(c => c.title);
        
        if (cards.length === 0) {
           cards = [
               { title: "Gymnasium", icon: "fitness_center", description: "State-of-the-art equipment with panoramic views to inspire your daily workout." },
               { title: "Kids Play Area", icon: "child_care", description: "Safe and vibrant environment designed for the creative growth of your little ones." },
               { title: "Jogging Track", icon: "directions_run", description: "A scenic peripheral track surrounded by lush greenery for your morning ritual." },
               { title: "Yoga Deck", icon: "self_improvement", description: "Quiet, open-air spaces perfect for meditation and finding your inner peace." }
           ];
        }
    }

    return (
        <section className="py-24 bg-surface-container-low" id="amenities">
            <div className="container mx-auto px-8 w-full block">
                <div className="text-center mb-16">
                    <span className="block text-primary uppercase tracking-[0.2em] text-xs font-extrabold mb-4">Exclusive Lifestyle</span>
                    <h2 className="font-headline italic text-5xl text-primary">Curated For Every Need.</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cards.map((card, index) => (
                        <div key={index} className="group bg-surface-container-lowest p-8 rounded-2xl border border-transparent hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out transform hover:-translate-y-2">
                            <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                                <span className="material-symbols-outlined text-3xl">{card.icon || "spa"}</span>
                            </div>
                            <h3 className="font-headline text-2xl text-primary mb-4 group-hover:translate-x-1 transition-transform duration-300">{card.title}</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Amenities;
