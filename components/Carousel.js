import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";


const EmblaCarousel = ({ items }) => {
    const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
    const onSelect = useCallback(() => {
        if (!embla) return;

    }, [embla]);

    useEffect(() => {
        if (!embla) return;
        embla.on("select", onSelect);
        onSelect();
    }, [embla, onSelect]);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={viewportRef}>
                <div className="embla__container">
                    {items.map((item) => (
                        <div className="embla__slide" key={item}>
                            <div className="embla__slide__inner">
                                <p>{item}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmblaCarousel;
