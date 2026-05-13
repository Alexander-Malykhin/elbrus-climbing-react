//header
import Header from "@components/Header/Header.tsx";
//blocks
import TourNavigation from "@components/TourNavigation/TourNavigation.tsx";
import Program from "@components/Program/Program.tsx";
import Features from "@components/Features/Features.tsx";
import TripPhotos from "@components/TripPhotos/TripPhotos.tsx";
import Itinerary from "@components/Itinerary/Itinerary.tsx";
import Cost from "@components/Cost/Cost.tsx";
import Departures from "@components/Departures/Departures.tsx";
import Information from "@components/Information/Information.tsx";
import Reviews from "@components/Reviews/Reviews.tsx";
import More from "@components/More/More.tsx";
import Footer from "@components/Footer/Footer.tsx";

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