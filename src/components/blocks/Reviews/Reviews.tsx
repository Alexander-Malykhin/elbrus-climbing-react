//styles
import styles from './Reviews.module.scss'
//images
import ReviewsImage from '@images/reviews.png'
//layouts
import MainLayout from "@layouts/MainLayout/MainLayout.tsx";
import SectionLayout from "@layouts/SectionLayout/SectionLayout.tsx";
//assets
import SectionLine from "@components/SectionLine/SectionLine.tsx";
//UI
import SectionTitle from "@UI/titles/SectionTitle/SectionTitle.tsx";

const Reviews = () => {
    return (
        <MainLayout>
            <SectionLayout className={styles.reviews}>
                <SectionLine
                    current={8}
                    total={9}
                />
                <SectionTitle>
                    Отзывы
                </SectionTitle>
                <div className={styles.reviews__content}>
                    <img src={ReviewsImage} alt="" className={styles.reviews__image}/>
                </div>
            </SectionLayout>
        </MainLayout>
    );
};

export default Reviews;