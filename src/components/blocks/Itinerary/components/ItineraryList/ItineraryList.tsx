//styles
import styles from './ItineraryList.module.scss'
//components
import ItineraryItem from "@components/blocks/Itinerary/components/ItineraryItem/ItineraryItem.tsx";

type ItineraryListItem = {
    id: number
    title: string
    description: string
}

type FeaturesListProps = {
    list: ItineraryListItem[]
    openedItems: number[]
    onToggleItem: (id: number) => void
};

const ItineraryList = ({ list, openedItems, onToggleItem }: FeaturesListProps) => {
    return (
        <div className={styles.list}>
            {list.map(item =>
                <ItineraryItem
                    key={item.id}
                    day={item.id}
                    title={item.title}
                    description={item.description}
                    isOpen={openedItems.includes(item.id)}
                    onToggle={() => onToggleItem(item.id)}
                />
            )}
        </div>
    );
};
export default ItineraryList;