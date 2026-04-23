interface SliderItem {
    image: string;
    alt?: string;
    text?: string;
}

interface InfiniteSliderProps {
    items: SliderItem[];
    itemWidth?: number;
    height?: number;
    duration?: number;
    className?: string;
}

const Slider: React.FC<InfiniteSliderProps> = ({
    items,
    itemWidth = 200,
    height = 54,
    duration = 20,
    className = "",
}) => {
    const quantity = items.length;

    return (
        <div
            className={`group relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,#000_15%,#000_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,#000_15%,#000_85%,transparent)] ${className}`}
            style={{ height }}
        >
            <div
                className="relative flex h-full"
                style={{ minWidth: itemWidth * quantity }}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="absolute left-full flex flex-row items-center justify-center gap-3 animate-[slider-autorun_var(--duration)_linear_infinite] transition-[filter] duration-500 ease-in-out group-hover:[animation-play-state:paused] group-hover:filter-[grayscale(1)_brightness(0.8)] hover:filter-[grayscale(0)_brightness(1)]!"
                        style={
                            {
                                width: itemWidth,
                                height,
                                "--duration": `${duration}s`,
                                "--item-width": `${itemWidth}px`,
                                animationDelay: `calc((${duration}s / ${quantity}) * (${index} - 1))`,
                            } as React.CSSProperties
                        }
                    >
                        <img
                            src={item.image}
                            alt={item.alt ?? item.text ?? `Slide ${index + 1}`}
                            className="shrink-0 object-contain"
                            style={{ width: height, height }}
                        />
                        {item.text && (
                            <span className="truncate text-sm font-semibold leading-none">
                                {item.text}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
