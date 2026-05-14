import styles from './More.module.scss'
// images
import TourImage from '@images/tours/tour-1.png'
// layouts
import MainLayout from "@layouts/MainLayout/MainLayout.tsx";
import SectionLayout from "@layouts/SectionLayout/SectionLayout.tsx";
// components
import SectionLine from "@components/SectionLine/SectionLine.tsx";
import Slider from "@components/Slider/Slider.tsx";
// UI
import SectionTitle from "@UI/titles/SectionTitle/SectionTitle.tsx";
//type
import type { CardProps } from "@components/Card/Card.tsx";

const tours : CardProps[] = [
    {
        image: TourImage,
        title: 'Эльбрус с юга',
        tags: ['Россия', 'Восхождение'],
        days: 9,
        distance: 25,
        difficulty: 1,
        comfort: 2,
        date: '10.05.2026',
        toursInfo: 'ещё 29 туров и под заказ',
        oldPrice: '€1 650',
        price: '€1 130'
    },
    {
        image: TourImage,
        title: 'Траверс Эльбруса с севера на юг',
        tags: ['Россия', 'Восхождение'],
        days: 9,
        distance: 34,
        difficulty: 2,
        comfort: 2,
        date: '30.05.2026',
        toursInfo: 'ещё 4 тура и под заказ',
        oldPrice: '€3 390',
        price: '€2 100'
    },
    {
        image: TourImage,
        title: 'Эльбрус с кислородом за 1 день',
        tags: ['Россия', 'Восхождение'],
        days: 3,
        distance: 5,
        difficulty: 3,
        comfort: 3,
        toursInfo: 'Только под заказ',
        price: '€1 900'
    },
    {
        image: TourImage,
        title: 'Эльбрус с кислородом за 1 день',
        tags: ['Россия', 'Восхождение'],
        days: 3,
        distance: 5,
        difficulty: 3,
        comfort: 3,
        toursInfo: 'Только под заказ',
        price: '€1 900'
    },
    {
        image: TourImage,
        title: 'Эльбрус с кислородом за 1 день',
        tags: ['Россия', 'Восхождение'],
        days: 3,
        distance: 5,
        difficulty: 3,
        comfort: 3,
        toursInfo: 'Только под заказ',
        price: '€1 900'
    },
    {
        image: TourImage,
        title: 'Эльбрус с кислородом за 1 день',
        tags: ['Россия', 'Восхождение'],
        days: 3,
        distance: 5,
        difficulty: 3,
        comfort: 3,
        toursInfo: 'Только под заказ',
        price: '€1 900'
    }
];

const More = () => {
    return (
        <MainLayout>
            <SectionLayout className={styles.more}>
                <SectionLine
                    current={9}
                    total={9}
                />

                <SectionTitle>
                    Еще Туры:
                </SectionTitle>

                <Slider tours={tours} />
            </SectionLayout>
        </MainLayout>
    );
};

export default More;