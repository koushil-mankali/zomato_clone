import AddRestaurantHeader from '../../components/AddRestaurantHeader/AddRestaurantHeader';
import WhyShouldYouPWZ from '../../components/WhyShouldYouPWZ/WhyShouldYouPWZ';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import SearchListedRestaurant from '../../components/SearchListedRestaurant/SearchListedRestaurant';
import SmallBannerCard from '../../utils/SmallBannerCard/SmallBannerCard';
import FrequentlyAskedQues from '../../components/FrequentlyAskedQues/FrequentlyAskedQues';
import AddRestaurantSec from '../../components/AddRestaurantSec/AddRestaurantSec';
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