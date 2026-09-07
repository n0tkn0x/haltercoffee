import React from "react";

interface MarqueeTickerProps {
    reverse?: boolean;
    bgColor?: string;
    textColor?: string;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
    reverse = false,
    bgColor = "bg-[#2D52C1]",
    textColor = "text-white",
}) => {
    const tickerItems = [
        "Cozy Vibes",
        "Good Times",
        "Fresh Beans",
        "Warm Cups",
        "Crew Love",
        "Slicing Togetherness",
        "The Volcano Pizza",
        "Malang Special Blend",
        "Service Bintang 6",
    ];

    // Duplicate list to create a seamless infinite loop
    const displayList = [...tickerItems, ...tickerItems, ...tickerItems];

    return (
        <div
            className={`w-full overflow-hidden ${bgColor} ${textColor} py-3 sm:py-3.5 select-none`}
        >
            <div
                className={`flex whitespace-nowrap ${
                    reverse ? "animate-marquee-reverse" : "animate-marquee"
                }`}
            >
                {displayList.map((item, index) => (
                    <div
                        key={`${item}-${index}`}
                        className="flex items-center mx-3 sm:mx-6 font-['Paytone_One',sans-serif] text-sm sm:text-base tracking-wide uppercase"
                    >
                        <span>{item}</span>
                        <span className="ml-3 sm:ml-6 text-[#F2BF4A] text-lg select-none">
                            ✦
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
