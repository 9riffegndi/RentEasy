
// Components
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import ListCard from "../Components/ListCard"
import Footer from "../Components/Footer"

// Layout
import LayaoutMain from '../Layouts/LayoutMain'


export default function Home() {

    return (
        <LayaoutMain>
            <Navbar />
            <Banner/>
            <ListCard/>
            <Footer/>
        </LayaoutMain>
    )
}