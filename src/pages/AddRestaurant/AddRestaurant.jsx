import AddRestaurantHeader from '../../components/AddRestaurantHeader/AddRestaurantHeader';
import WhyShouldYouPWZ from '../../components/WhyShouldYouPWZ/WhyShouldYouPWZ';
import HowItWorks from '../../components/HowItWorks/HowItWorks';

import css from './AddRestaurant.module.css'

let AddRestaurant = () => {
    return <div>
        <AddRestaurantHeader />
        <WhyShouldYouPWZ />
        <HowItWorks />
    </div>
}

export default AddRestaurant;