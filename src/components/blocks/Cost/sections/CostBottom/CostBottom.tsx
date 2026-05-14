//styles
import styles from './CostBottom.module.scss';
//images
import CheckBoxGreenImage from '@images/assets/check-box-green.svg';
import CloseImage from '@images/assets/close.svg';
//components
import CostList from "@components/blocks/Cost/components/CostList/CostList.tsx";

type CostBlockVariant = 'green' | 'red';

type CostBlockType = {
    id: number
    image: string
    title: string
    variant: CostBlockVariant
    items: string[]
}

const CostBottom = () => {

    const includedList: CostBlockType[] = [
        {
            id: 1,
            image: CheckBoxGreenImage,
            title: 'В стоимость включено:',
            variant: 'green',
            items: [
                'Помощь туристического менеджера на всех этапах',
                'Визовая поддержка и помощь в подборе дешевых авиабилетов',
                'Индивидуальный трансфер из аэропорта Минеральные Воды MRV и обратно - в любое время суток',
                'Услуги горных гидов - 2 гида на группу до 8 человек, не более 4 участников на гида',
                'Все трансферы по программе',
                'Проживание: 4-5 ночей в хостеле и 3-4 ночи в горном приюте (всего 8 ночей)',
                'Полноценное 3-разовое питание все дни тура и услуги повара в горном приюте',
                'Оплата за вход в Национальный парк',
                'Все подъемы и спуски на фуникулере на Эльбрусе и Чегете',
                'Групповое снаряжение (веревки, газ, кухня и т.д.)',
                'Все средства безопасности: спутниковый телефон, спутниковый навигатор, аптечка, регистрация в МЧС',
                'Кислородное оборудование для помощи в случае горной болезни (достаточно для 10 часов дыхания)',
                'Сертификат об успешном восхождении на Эльбрус с онлайн верификацией подлинности'
            ]
        }
    ];

    const extraList: CostBlockType[] = [
        {
            id: 2,
            image: CheckBoxGreenImage,
            title: 'Пакет премиум (+ €450):',
            variant: 'green',
            items: [
                '4-5 ночей в отдельном номере в отеле 3* вместо размещения по 6-8 человек в хостеле',
                'Двухместное размещение в горном приюте 3-4 ночи',
                'Местная сим-карта для звонков и доступа в Интернет (20 Гб)',
                'Уникальный значок "За восхождение на Эльбрус" от Федерации Альпинизма России'
            ]
        },
        {
            id: 3,
            image: CloseImage,
            title: 'В стоимость не включено:',
            variant: 'red',
            items: [
                'Перелет в Минеральные Воды (MRV), Тбилиси (TBS) или Кутаиси (KUT)',
                'Личное снаряжение и одежда - все доступно в аренду в нашем офисе',
                'Проживание/питание до и после тура, питание в ресторане',
                'Трансфер из/в Тбилиси или Кутаиси (если Вы прилетаете в Грузию)',
                'Альпинистская страховка на все дни тура (обязательно)'
            ]
        }
    ];

    return (
        <div className={styles.bottom}>
            <div className={styles.bottom__column}>
                <CostList list={includedList} />
            </div>

            <div className={styles.bottom__column}>
                <CostList list={extraList} />
            </div>
        </div>
    );
};

export default CostBottom;