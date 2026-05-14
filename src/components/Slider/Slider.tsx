import { useRef } from 'react'

import styles from './Slider.module.scss'

import Card from "@components/Card/Card.tsx";
import type { CardProps } from "@components/Card/Card.tsx";

interface SliderProps {
    tours: CardProps[]
}

const Slider = ({ tours }: SliderProps) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleSlide = (direction: 'prev' | 'next') => {
        if (!sliderRef.current) return;

        const slider = sliderRef.current;
        const card = slider.firstElementChild as HTMLElement | null;

        if (!card) return;

        const gap = parseFloat(getComputedStyle(slider).columnGap) || 0;
        const cardWidth = card.offsetWidth + gap;

        slider.scrollBy({
            left: direction === 'next' ? cardWidth : -cardWidth,
            behavior: 'smooth'
        });
    };

    return (
        <div className={styles.slider}>
            <button
                className={`${styles.slider__arrow} ${styles.slider__arrow__prev}`}
                type="button"
                onClick={() => handleSlide('prev')}
            />

            <div
                ref={sliderRef}
                className={styles.slider__track}
            >
                {tours.map((tour, index) => (
                    <Card
                        key={index}
                        {...tour}
                    />
                ))}
            </div>

            <button
                className={`${styles.slider__arrow} ${styles.slider__arrow__next}`}
                type="button"
                onClick={() => handleSlide('next')}
            />
        </div>
    );
};

export default Slider;