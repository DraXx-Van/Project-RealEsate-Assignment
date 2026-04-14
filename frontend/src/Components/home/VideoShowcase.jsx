import React from 'react';

const VideoShowcase = () => {
    return (
        <section className="py-24 bg-primary relative min-h-[600px] flex items-center overflow-hidden">
            <div className="absolute inset-0 opacity-40">
                <img alt="Urban Landscape" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_gS1KXvxYPcKzRpplPIh7xfkmqFP2J_rMhcZzUQz8sRtkJhds2Dl77Vw8S9JU8DnBQ9CBnDpWrzeRy7q8W8kE3VG6kbgQYslqbAcqZ_UOPO7dtqv66f3GOffKVpKwoxCS2glKZFrgUQcofY-IirlL0MzPZ2i0yis0bYEQm6zzTQZEEG0J00HPK_c2nVjrH_jJGjPh1C9pCE8_-Y65qyiUFJGSGI5R3GWswOovhGE2WxgZPDXKRKQJldPUh8wHou3k7JRUUburZ9A"/>
            </div>
            <div className="container mx-auto px-8 relative z-10 text-center w-full block">
                <button className="w-24 h-24 rounded-full bg-white text-primary flex items-center justify-center mb-8 mx-auto hover:scale-110 transition-transform shadow-2xl">
                    <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </button>
                <h2 className="font-headline italic text-5xl text-white mb-4">Watch the Vision Unfold</h2>
                <p className="text-on-primary/80 max-w-xl mx-auto">Take a virtual cinematic tour through the upcoming landmark of luxury.</p>
            </div>
        </section>
    );
};
export default VideoShowcase;
