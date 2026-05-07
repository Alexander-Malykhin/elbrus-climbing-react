import { useEffect, useRef, useState } from 'react'
import {Link} from 'react-router-dom'

import styles from './ToursDropDown.module.scss'
import ToursButton from '@UI/buttons/ToursButton/ToursButton.tsx'

const tourCategories = [
    'Эльбрус',
    'Казбек',
    'Пик Ленина',
    'Непал',
    'Килиманджаро',
    'Арарат',
    'Таиланд',
]

const toursByCategory: Record<string, string[]> = {
    Эльбрус: [
        'Эльбрус с юга',
        'Траверс Эльбруса с севера на юг',
        'Восхождение на Эльбрус с востока',
        'Две вершины: Казбек с юга + Эльбрус',
        'Эльбрус с кислородом за 1 день',
        'Зимний тур на Эльбрус',
    ],
    Казбек: ['Казбек с юга', 'Казбек с севера'],
    'Пик Ленина': ['Пик Ленина классика'],
    Непал: ['Трек вокруг Аннапурны', 'Базовый лагерь Эвереста'],
    Килиманджаро: ['Килиманджаро Марангу', 'Килиманджаро Мачаме'],
    Арарат: ['Восхождение на Арарат'],
    Таиланд: ['Туры в Таиланд'],
}

const ToursDropDown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeCategory, setActiveCategory] = useState<string | null>(null)
    const [activeIndex, setActiveIndex] = useState(0)

    const toursRef = useRef<HTMLDivElement>(null)

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                toursRef.current &&
                !toursRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false)
                setActiveCategory(null)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div className={styles.tours} ref={toursRef}>
            <ToursButton isOpen={isOpen} onClick={toggleDropdown} />

            <div
                className={`${styles.tours__dropdown} ${
                    isOpen ? styles.tours__dropdown_open : ''
                }`}
            >
                <ul className={styles.tours__categories}>
                    {tourCategories.map((item, index) => (
                        <li className={styles.tours__item} key={item}>
                            <button
                                className={`${styles.tours__category} ${
                                    activeCategory === item
                                        ? styles.tours__category_active
                                        : ''
                                }`}
                                type="button"
                                onClick={() => {
                                    setActiveCategory(item)
                                    setActiveIndex(index)
                                }}
                            >
                                {item}
                                <span className={styles.tours__category__arrow} />
                            </button>
                        </li>
                    ))}
                </ul>

                {activeCategory && (
                    <div className={styles.tours__content} style={{ top: `calc(${activeIndex} * 44px)` }}>
                        <ul className={styles.tours__list}>
                            {toursByCategory[activeCategory].map((tour) => (
                                <li key={tour} className={styles.tours__list_item}>
                                    <Link to={'#'} className={styles.tours__list_link}>{tour}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ToursDropDown