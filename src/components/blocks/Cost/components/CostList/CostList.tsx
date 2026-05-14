//components
import CostBlock from '../CostBlock/CostBlock.tsx';

type CostBlockVariant = 'green' | 'red';

type CostBlockType = {
    id: number
    image: string
    title: string
    variant: CostBlockVariant
    items: string[]
}

type CostListProps = {
    list: CostBlockType[]
}

const CostList = ({ list }: CostListProps) => {
    return (
        <>
            {list.map(item => (
                <CostBlock
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    variant={item.variant}
                    items={item.items}
                />
            ))}
        </>
    );
};

export default CostList;