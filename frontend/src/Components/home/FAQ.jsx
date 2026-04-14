import React, { useState } from 'react';

const FAQ = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    let faqs = [];
    try {
        faqs = JSON.parse(data?.faq || "[]");
        if(!Array.isArray(faqs)) throw new Error("not array");
    } catch {
        // Fallback or default
        if (data?.faq && typeof data.faq === 'string' && data.faq.length > 5 && !data.faq.startsWith('[')) {
            faqs = [{q: "Additional Information", a: data.faq}];
        } else {
            faqs = [
                {
                    q: "What is the expected possession date?",
                    a: "The project is scheduled for possession by December 2026, encompassing all residential towers and lifestyle amenities."
                },
                {
                    q: "Is the project RERA registered?",
                    a: "Yes, our project is fully RERA registered. The registration number is available on the state RERA website for your verification."
                },
                {
                    q: "What home loan options are available?",
                    a: "We have partnered with all leading national banks and financial institutions including SBI, HDFC, and ICICI, offering flexible payment plans and quick loan approvals."
                },
                {
                    q: "What are the security features?",
                    a: "The property features 3-tier security, 24/7 CCTV surveillance, biometric access for residents, and a dedicated rapid response team."
                }
            ];
        }
    }

    return (
        <section className="py-24 bg-surface-container-low" id="faq">
            <div className="container mx-auto px-8 max-w-4xl w-full block">
                <div className="text-center mb-16">
                    <span className="block text-primary uppercase tracking-[0.2em] text-xs font-extrabold mb-4">Inquiries</span>
                    <h2 className="font-headline italic text-5xl text-primary whitespace-pre-line">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className="bg-surface rounded-xl overflow-hidden border border-surface-container transition-all duration-300"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <h3 className="font-headline text-xl text-primary pr-8">{faq.q}</h3>
                                <span className="material-symbols-outlined text-on-surface-variant flex-shrink-0 transition-transform duration-300 transform" style={{ transform: activeIndex === index ? 'rotate(45deg)' : 'rotate(0)' }}>
                                    add
                                </span>
                            </button>
                            <div 
                                className={`overflow-hidden transition-all duration-300 ease-in-out`}
                                style={{ maxHeight: activeIndex === index ? '300px' : '0', opacity: activeIndex === index ? 1 : 0 }}
                            >
                                <div className="p-6 pt-0 text-on-surface-variant leading-relaxed">
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
