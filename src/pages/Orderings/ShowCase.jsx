import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Collections from '../../components/Collections/Collections';

import NavigationBar2 from '../../components/NavigationBar2/NavigationBar2';
import CategorySelectionComp from '../../utils/CategorySelectionComp/CategorySelectionComp'
import FilterBox from '../../utils/FilterBox/FilterBox';
import CircleCard1 from '../../utils/CircleCards/CircleCard1/CircleCard1';
import CircleCard2 from '../../utils/CircleCards/CircleCard2/CircleCard2';
import ShowcaseCard from '../../utils/ShowcaseCard/ShowcaseCard'
import ExploreOptionsNearMe from '../../components/ExploreOptionsNearMe/ExploreOptionsNearMe'
import Footer from '../../components/Footer/Footer'

import dinning1 from '../../../public/icons/dinning1.png';
import dinning2 from '../../../public/icons/dinning2.png';
import delivery1 from '../../../public/icons/delivery1.png';
import delivery2 from '../../../public/icons/delivery2.png';
import nightlife1 from '../../../public/icons/nightlife1.png';
import nightlife2 from '../../../public/icons/nightlife2.png';
import filtersIcon from '../../../public/icons/filter.png';
import deliveryTimeIcon from '../../../public/icons/delivery-time.png';
import downArrowIcon from '../../../public/icons/down-arrow.png';

import { orderOnlinePage, diningOutPage, nightLifePage } from '../../helpers/constants'

import css from './ShowCase.module.css';

let ShowCase = () => {
    let location = useLocation();
    const urlParams = new URLSearchParams(location.search);
    const page = urlParams.get('page');

    let [isActive, setIsActive] = useState({
        delivery: page === orderOnlinePage,
        dinning: page === diningOutPage,
        nightlife: page === nightLifePage
    });
    let filterBoxes;

    let filters = {
        delivery: [
            { text: "Filter", leftIcon: filtersIcon },
            { text: "Delivery Time", leftIcon: deliveryTimeIcon },
            { text: "Pure Veg" },
            { text: "Rating: 4.0+" },
            { text: "Freate Offers" },
            { text: "Cuisines", leftIcon: downArrowIcon },
        ],
        dinning: [
            { text: "Filter", leftIcon: filtersIcon },
            { text: "Rating: 4.0+" },
            { text: "Outdoor Seating" },
            { text: "Serves Alcohal" },
            { text: "Open Now" },
        ],
        nightLife: [
            { text: "Filter", leftIcon: filtersIcon },
            { text: "Distance", leftIcon: deliveryTimeIcon },
            { text: "Rating: 4.0+" },
            { text: "Pubs & Bars" },
        ]
    }
    if (page === orderOnlinePage) {
        filterBoxes = filters?.delivery?.map(val => {
            return <div><FilterBox leftIcon={val?.leftIcon ?? null} rightIcon={val?.rightIcon ?? null} text={val.text} /></div>
        })
    } else if (page === diningOutPage) {
        filterBoxes = filters?.dinning?.map(val => {
            return <div><FilterBox leftIcon={val?.leftIcon ?? null} rightIcon={val?.rightIcon ?? null} text={val.text} /></div>
        })
    } else if (page === nightLifePage) {
        filterBoxes = filters?.nightLife?.map(val => {
            return <div><FilterBox leftIcon={val?.leftIcon ?? null} rightIcon={val?.rightIcon ?? null} text={val.text} /></div>
        })
    }

    return <div className={css.outerDiv}>
        <NavigationBar2 />
        <div className={css.innerDiv}>
            <div className={css.breadcrumb}>
                Home
                /
                India
                /
                Hyderabad
                /
                Hyderabad City
                /
                Indira Nagar
            </div>
        </div>
        <div className={css.showCaseDiv}>
            <div className={css.showcaseComps}>
                <CategorySelectionComp title="Delivery" imgSrc={delivery1} imgSrc2={delivery2} color="#FCEEC0" comp='delivery' isActive={isActive} setIsActive={setIsActive} />
                <CategorySelectionComp title="Dinning" imgSrc={dinning1} imgSrc2={dinning2} color="#EDF4FF" comp='dinning' isActive={isActive} setIsActive={setIsActive} />
                <CategorySelectionComp title="NightLife" imgSrc={nightlife1} imgSrc2={nightlife2} color="#EDF4FF" comp='nightlife' isActive={isActive} setIsActive={setIsActive} />
            </div>
        </div>
        {page !== orderOnlinePage ?
            <div className={css.innerDiv2}>
                <div className={css.w7}>
                    <Collections />
                </div>
            </div> : null}
        <div className={css.innerDiv3}>
            <div className={css.filtersDiv}>
                {filterBoxes}
            </div>
        </div>
        {page === orderOnlinePage ? <div className={css.innerDiv4}>
            <div className={css.w7}>
                <div className={css.innerDiv4Title}>
                    Inspiration for your first order
                </div>
                <div className={css.rollerCarosuel}>
                    <div className={css.cardW}>
                        <CircleCard1 />
                    </div>
                    <div className={css.cardW}>
                        <CircleCard1 />
                    </div>
                    <div className={css.cardW}>
                        <CircleCard1 />
                    </div>
                    <div className={css.cardW}>
                        <CircleCard1 />
                    </div>
                    <div className={css.cardW}>
                        <CircleCard1 />
                    </div>
                    <div className={css.cardW}>
                        <CircleCard1 />
                    </div>
                    <div className={css.cardW}>
                        <CircleCard1 />
                    </div>
                    <div className={css.cardW}>
                        <CircleCard1 />
                    </div>
                    <div className={css.cardW}>
                        <CircleCard1 />
                    </div>
                    <div className={css.cardW}>
                        <CircleCard1 />
                    </div>
                    <div className={css.cardW}>
                        <CircleCard1 />
                    </div>
                    <div className={css.cardW}>
                        <CircleCard1 />
                    </div>

                </div>
            </div>
        </div> : null}
        {page === orderOnlinePage ? <div className={css.innerDiv5}>
            <div className={css.w7}>
                <div className={css.innerDiv5Title}>
                    Top brands for you
                </div>
                <div className={css.rollerCarosuel}>
                    <div className={css.cardW}>
                        <CircleCard2 />
                    </div>
                    <div className={css.cardW}>
                        <CircleCard2 />
                    </div>
                    <div className={css.cardW}>
                        <CircleCard2 />
                    </div>
                    <div className={css.cardW}>
                        <CircleCard2 />
                    </div>
                    <div className={css.cardW}>
                        <CircleCard2 />
                    </div>
                    <div className={css.cardW}>
                        <CircleCard2 />
                    </div>
                    <div className={css.cardW}>
                        <CircleCard2 />
                    </div>
                    <div className={css.cardW}>
                        <CircleCard2 />
                    </div>
                    <div className={css.cardW}>
                        <CircleCard2 />
                    </div>
                    <div className={css.cardW}>
                        <CircleCard2 />
                    </div>
                    <div className={css.cardW}>
                        <CircleCard2 />
                    </div>
                    <div className={css.cardW}>
                        <CircleCard2 />
                    </div>

                </div>
            </div>
        </div> : null}
        <div className={css.innerDiv6}>
            <div className={css.w7}>
                <div className={css.innerDiv6Title}>
                    {page === orderOnlinePage ? "Delivery Restaurants in Gachibowli" : page === diningOutPage ? "Dine-Out Restaurants in Gachibowli" : "Nightlife Restaurants in Gachibowli"}
                </div>
                <div className={css.innerDiv6Body}>
                    <ShowcaseCard />
                    <ShowcaseCard />
                    <ShowcaseCard />
                    <ShowcaseCard />
                    <ShowcaseCard />
                    <ShowcaseCard />
                    <ShowcaseCard />
                    <ShowcaseCard />
                    <ShowcaseCard />
                    <ShowcaseCard />
                    <ShowcaseCard />
                    <ShowcaseCard />
                    <ShowcaseCard />
                    <ShowcaseCard />
                    <ShowcaseCard />
                    <ShowcaseCard />
                </div>
            </div>
        </div>
        <ExploreOptionsNearMe />
        <Footer />
    </div >
}

export default ShowCase;