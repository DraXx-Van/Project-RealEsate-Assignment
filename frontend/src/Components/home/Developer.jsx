import { ConstructionUpdates } from './index';

const Developer = ({ data }) => {
    return (
        <section className="py-24 bg-surface">
            <div className="container mx-auto px-8 w-full block">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="block text-primary uppercase tracking-[0.2em] text-xs font-extrabold mb-4">Our Legacy</span>
                        <h2 className="font-headline italic text-5xl text-primary mb-8">Vighnaharta Group</h2>
                        <p className="text-on-surface-variant leading-relaxed mb-12 whitespace-pre-line">
                            {data?.about || "With over two decades of excellence, Vighnaharta Group has been at the forefront of crafting landmark residential and commercial developments. Our commitment to quality and transparency has made us a trusted name for over 5,000 happy families."}
                        </p>
                        <div className="grid grid-cols-3 gap-8">
                            <div>
                                <div className="text-primary text-4xl font-headline italic mb-2">15+</div>
                                <div className="text-on-surface-variant text-xs uppercase tracking-widest font-bold">Projects Delivered</div>
                            </div>
                            <div>
                                <div className="text-primary text-4xl font-headline italic mb-2">2M+</div>
                                <div className="text-on-surface-variant text-xs uppercase tracking-widest font-bold">Sq. Ft. Developed</div>
                            </div>
                            <div>
                                <div className="text-primary text-4xl font-headline italic mb-2">5K+</div>
                                <div className="text-on-surface-variant text-xs uppercase tracking-widest font-bold">Happy Families</div>
                            </div>
                        </div>
                    </div>
                    <ConstructionUpdates data={data} />
                </div>
            </div>
        </section>
    );
};
export default Developer;
