import { useRef, useState } from 'react';
// styles
import styles from './Itinerary.module.scss';
// layouts
import MainLayout from '@layouts/MainLayout/MainLayout.tsx';
import SectionLayout from '@layouts/SectionLayout/SectionLayout.tsx';
// components
import SectionLine from '@components/SectionLine/SectionLine.tsx';
// UI
import SectionTitle from '@UI/titles/SectionTitle/SectionTitle.tsx';
// assets
import ArrowRightIcon from '@images/assets/arrow-right.svg';

type ItineraryListType = {
    id: number;
    title: string;
    description: string;
};

const Itinerary = () => {
    const listRef = useRef<HTMLDivElement | null>(null);

    const list: ItineraryListType[] = [
        {
            id: 1,
            title: 'Встреча',
            description: 'Встречаем Вас в любое время в Аэропорту Минеральные Воды (не позднее 12-00) или в Аэропорту Тбилиси или Кутаиси (в этом случае прилететь нужно днем ранее). Трансфер в наш офис. Выдача снаряжения. Знакомство с гидом. Брифинг для всей группы - инструктор расскажет о предстоящем маршруте и ответит на вопросы. Трансфер в Приэльбрусье. Размещение в хостеле или в отеле (3*) в зависимости от тарифа.'
        },
        {
            id: 2,
            title: 'Гора Чегет',
            description: 'Налегке, с маленькими рюкзаками поднимаемся пешком на гору Чегет. Перед выходом каждый получит ланч-бокс, обед будет на горе с видом на Эльбрус. Инструктор расскажет вам, как правильно ходить и дышать в горах, чтобы экономить силы. Подъем пешком займет 4 часа. С верхней точки открывается прекрасный панорамный вид на Эльбрус и Баксанское ущелье. Обратно спускаемся на канатке, чтобы поберечь ноги.'
        },
        {
            id: 3,
            title: 'Водопад Девичьи Косы',
            description: 'Еще одна акклиматизация. С собой берем маленький рюкзак с термосом и ланч-боксом. Поднимемся пешком до водопада Девичьи Косы. Здесь пообедаем и искупаемся. А после этого поднимемся выше, к Обсерватории. К вечеру вернемся в отель.'
        },
        {
            id: 4,
            title: 'Горный приют',
            description: 'Трансфер к фуникулеру и подъем на снежный склон Эльбруса. Размещение в горном приюте - размещение по 4-6 чел в Базовом тарифе и по 2 чел. в пакете Премиум. Небольшая прогулка вверх по снежному склону. Инструктор проведет тренировку по двум базовым альпинистским навыкам: техника передвижения по веревочным перилам и ходьба в кошках по снежному и ледовому склону.'
        },
        {
            id: 5,
            title: 'Высота 5000 м.',
            description: 'Это день главной акклиматизации. И в этот день вам предстоит набрать около 1200 м. вверх и дойти до высоты 5000 м. В этот день вы прочувствуете недостаток кислорода, будет тяжело, но это даст вам хорошую адаптацию к высоте, и во время восхождения вам будет легче. Достижение по крайней мере высоты 4700 м. в этот день является обязательным условием для попытки восхождения на вершину. В случае невыполнения этого условия восхождение будет возможно только с кислородом.'
        },
        {
            id: 6,
            title: 'Отдых перед восхождением',
            description: 'День отдыха перед восхождением. Тренировка по технике самозадержания на ледовом склоне с помощью ледоруба. Также повторим другие ранее освоенные навыки. Немного прогуляемся, чтобы поддержать мышцы и дыхательную систему в тонусе. Подготовим наши рюкзаки к восхождению. Ранний отбой (17.00), чтобы успеть выспаться перед восхождением. В случае, если на последующие дни будет плохой прогноз погоды, мы не будем отдыхать в этот день, а пойдем на восхождение.'
        },
        {
            id: 7,
            title: 'День восхождения',
            description: 'Подъём в полночь, 1 час на сборы. Отправляемся к вершине Эльбруса. От штурмового лагеря идем в связках, в кошках, с ледорубами, касками и налобными фонарями. С собой берем еду, термос с горячим чаем и воду. Идем очень медленно, чтобы не сбить дыхание и сохранить силы. Восхождение обычно занимает 8-10 часов, спуск еще 3-4. (Если Вы хотите использовать кислород во время восхождения, его можно арендовать у нас.) Ночь в приюте.'
        },
        {
            id: 8,
            title: 'Спуск в долину',
            description: 'На фуникулере спускаемся в долину. Трансфер в отель. Обед в отеле. Программа остатка дня будет на месте согласована и определена вместе с участниками группы. Среди возможных опций - прогулка по лесу до нарзанового источника или традиционная русская баня с вениками и ледяной купелью (в стоимость тура не входит). Вечером - праздничный ужин и вручение медалей и сертификатов. При необходимости этот день будет использован в качестве резервного дня для восхождения на вершину.'
        },
        {
            id: 9,
            title: 'Завершение тура',
            description: 'После завтрака групповой трансфер в Ессентуки. По пути сделаем остановку на Поляне Нарзанов и попьем нарзан прямо из-под земли. В назначенное время индивидуальный трансфер в аэропорт. Обратный билет на самолет Вам следует брать на этот день, но вылет должен быть не ранее 14.00, если вы вылетаете из Минеральных Вод, и не ранее 20.00, если вы летите из Тбилиси.'
        }
    ];

    const [openItems, setOpenItems] = useState<number[]>(list.map((item) => item.id));

    const isAllOpen = openItems.length === list.length;

    const toggleAll = () => {
        setOpenItems(isAllOpen ? [] : list.map((item) => item.id));
    };

    const toggleItem = (id: number) => {
        setOpenItems((prev) =>
            prev.includes(id)
                ? prev.filter((itemId) => itemId !== id)
                : [...prev, id]
        );
    };

    const scrollToNextCard = () => {
        const listElement = listRef.current;

        if (!listElement) return;

        const cardElement = listElement.querySelector(`.${styles.itinerary__item}`);

        if (!cardElement) return;

        const cardWidth = cardElement.getBoundingClientRect().width;
        const gap = 8;

        listElement.scrollBy({
            left: cardWidth + gap,
            behavior: 'smooth',
        });
    };

    const handleArrowClick = (id: number) => {
        const isMobile = window.matchMedia('(max-width: 700px)').matches;

        if (isMobile) {
            scrollToNextCard();
            return;
        }

        toggleItem(id);
    };

    return (
        <MainLayout>
            <SectionLayout className={styles.itinerary}>
                <SectionLine current={4} total={9} />

                <SectionTitle>
                    Описание по дням
                </SectionTitle>

                <div className={styles.itinerary__content}>
                    <button
                        className={styles.itinerary__button}
                        type="button"
                        onClick={toggleAll}
                    >
                        {isAllOpen ? 'Свернуть' : 'Раскрыть все дни'}
                    </button>

                    <div className={styles.itinerary__list} ref={listRef}>
                        {list.map((item) => {
                            const isOpen = openItems.includes(item.id);

                            return (
                                <article
                                    className={`${styles.itinerary__item} ${
                                        isOpen ? styles.itinerary__item_open : ''
                                    }`}
                                    key={item.id}
                                >
                                    <div className={styles.itinerary__item_day}>
                                        <p className={styles.itinerary__item_text}>
                                            День {item.id}
                                        </p>
                                    </div>

                                    <div className={styles.itinerary__item_content}>
                                        <h3 className={styles.itinerary__item_title}>
                                            <span>День {item.id}.</span> {item.title}
                                        </h3>

                                        <div className={styles.itinerary__item_wrapper}>
                                            <p className={styles.itinerary__item_text}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        className={styles.itinerary__item_arrow}
                                        type="button"
                                        aria-label={`День ${item.id}`}
                                        onClick={() => handleArrowClick(item.id)}
                                    >
                                        <img src={ArrowRightIcon} alt="" aria-hidden="true" />
                                    </button>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </SectionLayout>
        </MainLayout>
    );
};

export default Itinerary;