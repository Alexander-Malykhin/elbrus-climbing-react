//header
import Header from "@components/blocks/Header/Header.tsx";
//blocks
import TourNavigation from "@components/TourNavigation/TourNavigation.tsx";
import Program from "@components/blocks/Program/Program.tsx";
import Features from "@components/blocks/Features/Features.tsx";
import TripPhotos from "@components/blocks/TripPhotos/TripPhotos.tsx";
import Itinerary from "@components/blocks/Itinerary/Itinerary.tsx";
import Cost from "@components/blocks/Cost/Cost.tsx";
import Departures from "@components/blocks/Departures/Departures.tsx";
import Information from "@components/blocks/Information/Information.tsx";
import Reviews from "@components/blocks/Reviews/Reviews.tsx";
import More from "@components/blocks/More/More.tsx";
import Footer from "@components/blocks/Footer/Footer.tsx";

const HomePage = () => {
    return (
        <>
            <Header/>
            <main className="main">
                <TourNavigation/>
                <Program/>
                <Features/>
                <TripPhotos/>
                <Itinerary/>
                <Cost/>
                <Departures/>
                <Information/>
                <Reviews/>
                <More/>
            </main>
            <Footer/>
        </>
    );
};

export default HomePage;