//styles
import styles from './TripPhotos.module.scss'
//images
import PhotoImage from '@images/photos/photo-1.png'
//layouts
import MainLayout from "@layouts/MainLayout/MainLayout.tsx";
import SectionLayout from "@layouts/SectionLayout/SectionLayout.tsx";
import SectionLine from "@components/SectionLine/SectionLine.tsx";

const TripPhotos = () => {
    return (
        <MainLayout>
            <SectionLayout className={styles.photos}>
                <SectionLine current={3} total={9}/>

                <div className={styles.photos__content}>
                    <h2 className={styles.photos__title}>Фотографии с маршрута</h2>

                    <div className={styles.photos__grid}>
                        <article className={styles.photos__item}>
                            <img src={PhotoImage} alt="" className={styles.photos__image}/>
                        </article>

                        <article className={styles.photos__item}>
                            <img src={PhotoImage} alt="" className={styles.photos__image}/>
                        </article>

                        <article className={styles.photos__item}>
                            <img src={PhotoImage} alt="" className={styles.photos__image}/>
                        </article>

                        <article className={styles.photos__item}>
                            <img src={PhotoImage} alt="" className={styles.photos__image}/>
                        </article>

                        <article className={styles.photos__item}>
                            <img src={PhotoImage} alt="" className={styles.photos__image}/>
                        </article>

                        <article className={`${styles.photos__item} ${styles.photos__item__more}`}>
                            <img src={PhotoImage} alt="" className={styles.photos__image}/>
                            <span className={styles.photos__more}>+24</span>
                        </article>
                    </div>
                </div>
            </SectionLayout>
        </MainLayout>
    );
};

export default TripPhotos;