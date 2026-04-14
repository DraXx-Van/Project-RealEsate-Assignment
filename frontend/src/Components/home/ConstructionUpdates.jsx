import React from 'react';

const ConstructionUpdates = ({ data }) => {
    let timeline = [];
    let statusLabel = "Oct 2026";
    
    try {
        const parsed = JSON.parse(data?.construction || "{}");
        timeline = parsed.timeline || [];
        statusLabel = parsed.status || "Dec 2026";
    } catch {
        timeline = [];
        statusLabel = "Dec 2026";
    }

    return (
        <div className="bg-surface-container-low p-8 rounded-3xl">
            <div className="flex justify-between items-center mb-8">
                <h3 className="font-headline text-2xl text-primary">Construction Updates</h3>
                <span className="text-xs bg-primary-container/20 text-primary px-3 py-1 rounded-full font-bold">{statusLabel}</span>
            </div>
            <div className="space-y-8 relative before:absolute before:left-[3.5px] before:top-2 before:bottom-2 before:w-[1px] before:bg-outline-variant/30">
                {timeline.map((item, index) => (
                    <div key={index} className="group flex gap-6 relative transition-all duration-300">
                        <div className={`w-2 h-2 rounded-full absolute left-0 top-1.5 z-10 transition-all duration-500 ${item.completed ? 'bg-primary shadow-[0_0_10px_rgba(0,108,77,0.5)] scale-125' : 'bg-outline-variant group-hover:bg-primary/40'}`}></div>
                        <div className="pl-4">
                            <div className="flex items-center gap-3 mb-1">
                                <h4 className="font-bold text-sm text-primary group-hover:translate-x-1 transition-transform duration-300">{item.title}</h4>
                                {item.completed && (
                                    <span className="material-symbols-outlined text-primary text-xs font-black">check_circle</span>
                                )}
                            </div>
                            <p className="text-xs text-on-surface-variant leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-300">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <img alt="Construction Site" className="mt-8 w-full h-48 object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_Wm7QTYLrQ8KSrjD4qmdJWX4HOlh44j1p_FkCSs-HVgRAADFpC1YrSlw54EP_vQtLxTZdfRPAeCTVa-sjYXm9vx4ZxFp-7iz8K8IMEbyz7vnwHWHsPvWxgBRVrWRLGrX2t_S_jdsHChIgq_mcx5t7xbTFLbCin2XGzdOerzp3R2Y3jQouJkRc43q-VT0xbTpXr6TOJujwkTlss8S_m10d9yxF_LhuCVfpiAVL4bUS3OeLz1PR1PeAAnjWLur31N_tO9v5dqZTntk"/>
        </div>
    );
};

export default ConstructionUpdates;
