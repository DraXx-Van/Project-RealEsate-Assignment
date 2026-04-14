import React from 'react';

const Explore = () => {
    return (
        <section className="py-24 bg-surface">
            <div className="container mx-auto px-8 w-full block">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="block text-primary uppercase tracking-[0.2em] text-xs font-extrabold mb-4">Visual Journey</span>
                        <h2 className="font-headline italic text-5xl text-primary">A Glimpse of Infinity.</h2>
                    </div>
                    <div className="hidden md:flex gap-4">
                        <button className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
                    <div className="col-span-1 md:col-span-8 rounded-3xl overflow-hidden group aspect-[4/3] md:aspect-auto md:h-full">
                        <img alt="Luxury Exterior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG_W_FdgFmwDIPOEPXIr9Y36Po5buBetkJsW3A3ozMlxYoKKYQaxXQ5KWoWHDKLfRrdCQH5NECYj1dR9g45KLRVmp6wZbEfNkkuDkTGj54mVCqZPgm8fgkLoimnEQSB0mw-vE86EnUX4JyWT0MpRIsjDW1tDLaHVwSVen_vYcpgDaiJhoAvSGXb0J0fGa1J_EOXsQ7kC0ilK7KmsvFa8Nc0u5wx0SdguS5OpwHCAuYdcwgPwlN3jILUDOuFfTSh80dnTJbOUBRLow"/>
                    </div>
                    <div className="col-span-1 md:col-span-4 flex flex-col gap-6">
                        <div className="rounded-3xl overflow-hidden aspect-video md:aspect-[4/3] flex-1">
                            <img alt="Kitchen Interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACZ1qYxjrCSo2a_ReCNoEdMK8OQ-wmzKOXVLgMTeXUT8wsYuz0qP0jyG3ajZl08DQyJZ1jFWvlTCu5pPtZyUB_r81qxxXX85RjPgiJW6wqGxNq1jbSdQx7-n5KQjggfvNZJk-Isu_X-Yrkszh7ycaT3VUm4Q2t6lDnGKkQWBPB36aPzE41cg5ol3T9_c159Cq0uhYq7AKk4v97i7mEGEQHR3RArEze_zL5co_15irJckOnupN0XsiDgKkUhEyr5jyb6A6AL_UhlDI"/>
                        </div>
                        <div className="rounded-3xl overflow-hidden aspect-video md:aspect-[4/3] flex-1">
                            <img alt="Bedroom View" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgkpKskqMgNSzXk983UH0vE6n1QFKNiTyPN-bwqm3YtoRKx71SixihiyEHm9W-0qMjyq9X-n9oW76GCBElR3KA9Kp33JEa2zCy57Tv5thyoTikjDNz9w4j0gJh5QEZDbkQnRQm-m6DV4iSUXqNTyFnDJ3jV9tgMlAoPyFGWllCH1Ov866zoXpf8ncb8CUdb6sqgBptMvv1buHmIm3ijmBmq-IbNXyVAV7Ol37OACZxIDHf1Ls--eXVqc7mAPJ-5-_m_kVPWKmiBLM"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Explore;
