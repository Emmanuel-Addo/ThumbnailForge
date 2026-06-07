const Footer = () => {
    const linkSections = [
        {
            title: "Quick Links",
            links: ["Home", "Community", "Generate", "Pricing", "FAQs"]
        },
        {
            title: "Need Help?",
            links: ["How It Works", "Refund Policy", "Payment Methods", "Contact Us"]
        },
        {
            title: "Follow Us",
            links: ["Instagram", "Twitter", "Facebook", "YouTube"]
        }
    ];

    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                <div>
                    {/* ThumbnailForge Logo */}
                    <div className="flex items-center gap-2">
                        <svg viewBox="0 0 36 36" width="36" height="36" fill="none">
                            <rect x="4" y="10" width="28" height="18" rx="3" fill="#16a34a" />
                            <rect x="8" y="14" width="20" height="10" rx="1.5" fill="#dcfce7" />
                            <polygon points="14,16.5 14,21.5 21,19" fill="#16a34a" />
                            <path d="M16 10 L18 5 L20 10" stroke="#16a34a" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
                        </svg>
                        <span className="text-xl font-bold tracking-tight">
                            <span className="text-gray-900">Thumbnail</span>
                            <span className="text-green-600">Forge</span>
                        </span>
                    </div>

                    <p className="max-w-[410px] mt-6">
                        ThumbnailForge helps creators craft bold, scroll-stopping thumbnails
                        powered by AI — no design skills required.
                    </p>
                </div>

                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {linkSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href="#" className="hover:text-green-600 transition-colors">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                Copyright 2025 © ThumbnailForge. All Rights Reserved.
            </p>
        </div>
    );
};

export default Footer;