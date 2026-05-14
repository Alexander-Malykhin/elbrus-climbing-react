// styles
import styles from './ProgramBottom.module.scss';
// components
import ProgramInfoList from "@components/blocks/Program/components/ProgramInfoList/ProgramInfoList.tsx";
import Details from "@components/blocks/Program/components/Details/Details.tsx";
import Map from "@components/blocks/Program/components/Map/Map.tsx";

const ProgramBottom = () => {
    return (
        <div className={styles.bottom}>
            <ProgramInfoList/>

            <div className={styles.bottom__information}>
                <Details/>
                <Map/>
            </div>
        </div>
    );
};

export default ProgramBottom;