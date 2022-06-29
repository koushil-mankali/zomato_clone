import AddRestaurantHeader from '../../components/AddRestaurantComponents/AddRestaurantHeader/AddRestaurantHeader';
import WhyShouldYouPWZ from '../../components/AddRestaurantComponents/WhyShouldYouPWZ/WhyShouldYouPWZ';
import HowItWorks from '../../components/AddRestaurantComponents/HowItWorks/HowItWorks';
import SearchListedRestaurant from '../../components/AddRestaurantComponents/SearchListedRestaurant/SearchListedRestaurant';
import SmallBannerCard from '../../utils/Cards/SmallBannerCard/SmallBannerCard';
import FrequentlyAskedQues from '../../components/HomeComponents/FrequentlyAskedQues/FrequentlyAskedQues';
import AddRestaurantSec from '../../components/AddRestaurantComponents/AddRestaurantSec/AddRestaurantSec';
import Footer from '../../components/Footer/Footer';

import css from './AddRestaurant.module.css'

let AddRestaurant = () => {
    return <div>
        <AddRestaurantHeader />
        <WhyShouldYouPWZ />
        <HowItWorks />
        <SearchListedRestaurant />
        <SmallBannerCard />
        <FrequentlyAskedQues />
        <AddRestaurantSec />
        <Footer />
    </div>
}

export default AddRestaurant;