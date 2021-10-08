import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/Image";

const HistoryCarousel = ({ historyItems }) => {
    console.log(rewardItems);
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
        <section id="historyModule" class="clearFloat">
            <div class="heading">
                <h2>History of Team Cup</h2>
            </div>
            <div className="embla_rewards">
                <div className="embla__viewport" ref={viewportRef}>
                    <div className="embla__container">
                        {rewardItems.map((item) => (
                            <div className="embla__slide_rewards" key={item.rewardType}>
                                <div className="embla__slide__inner_rewards">
                                    <div className="item2">
                                        <div class="textBox">
                                            <p>
                                                <Image src={`https:${item.rewardImage.fields.file.url}`}
                                                    width={item.rewardImage.fields.file.details.image.width}
                                                    height={item.rewardImage.fields.file.details.image.height} />
                                                <strong>{item.rewardType} </strong><br />
                                                <span class="yellow"><strong>{item.rewardDetail}</strong></span> <br />
                                                <span>{item.howToEarn}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HistoryCarousel;
