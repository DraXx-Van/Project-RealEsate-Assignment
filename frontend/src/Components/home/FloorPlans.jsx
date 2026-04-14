import React from 'react';

const FloorPlans = () => {
    return (
        <section className="py-24 bg-surface-container" id="floorplans">
            <div className="container mx-auto px-8 w-full block">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="block text-primary uppercase tracking-[0.2em] text-xs font-extrabold mb-4">Spatial Design</span>
                    <h2 className="font-headline italic text-5xl text-primary mb-8">Precision Engineered Living.</h2>
                    <div className="inline-flex p-1.5 bg-surface-container-high rounded-full gap-2">
                        <button className="px-8 py-3 rounded-full primary-gradient text-on-primary font-bold text-sm tracking-widest transition-all">1 BHK UNIT</button>
                        <button className="px-8 py-3 rounded-full text-on-surface-variant hover:bg-surface-variant font-bold text-sm tracking-widest transition-all">2 BHK UNIT</button>
                    </div>
                </div>
                <div className="bg-surface-container-lowest rounded-3xl p-12 editorial-overlap">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <img alt="Floor Plan Illustration" className="w-full rounded-2xl border border-outline-variant/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsDPpxRMZXTBpz_x2rob4BtHXX_Db-zVPqmqw6IKsI29Liy_Hawmox-CmP_kISzByqJBDPksykYHy8fwh3zz0-iMUETf7lTuc_KGy9RjMudjjhdp13h_a3LIomeszb388_FH9EX0MTUdGeHupbLnt8-iefL4PuG7jNMaTD5vx_eKW48YQOqBeSIbp46SowdkF9b0liJaXn6W62OARgPZyfD1E8N9pCirKtxOgVfDjv3sKX9sva0rjrxVGzr32r0cVUSLfQfJ-BO9Y"/>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-headline text-3xl text-primary mb-2">2 BHK - Type Alpha</h3>
                                <p className="text-on-surface-variant">Carpet Area: 850 Sq. Ft.</p>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex justify-between border-b border-surface-variant pb-2">
                                    <span className="text-on-surface-variant">Master Bedroom</span>
                                    <span className="font-bold">12'0" x 14'0"</span>
                                </li>
                                <li className="flex justify-between border-b border-surface-variant pb-2">
                                    <span className="text-on-surface-variant">Living / Dining</span>
                                    <span className="font-bold">18'0" x 12'6"</span>
                                </li>
                                <li className="flex justify-between border-b border-surface-variant pb-2">
                                    <span className="text-on-surface-variant">Modular Kitchen</span>
                                    <span className="font-bold">10'0" x 8'0"</span>
                                </li>
                                <li className="flex justify-between border-b border-surface-variant pb-2">
                                    <span className="text-on-surface-variant">Balcony</span>
                                    <span className="font-bold">5'0" Wide</span>
                                </li>
                            </ul>
                            <div className="flex gap-4 pt-4">
                                <button className="primary-gradient text-on-primary px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-95 duration-150">
                                    Download Plan
                                </button>
                                <button className="border border-outline text-primary px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-surface-variant transition-all">
                                    Enquire Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default FloorPlans;
