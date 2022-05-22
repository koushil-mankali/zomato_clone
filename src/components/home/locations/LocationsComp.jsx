import { useEffect, useState } from 'react';

import LocationCard from './LocationCard';
import SeeMoreComp from './SeeMoreComp';

import './LocationsComp.css'

let LocationsComp = () => {

    let [locations, setLocations] = useState([{
        locationName: 'Hyderabad',
        count: '20',
        link: 'https://www.koushilmankali.com/'
    }, {
        locationName: 'Hyderabad',
        count: '20',
        link: 'https://www.koushilmankali.com/'
    }, {
        locationName: 'Hyderabad',
        count: '20',
        link: 'https://www.koushilmankali.com/'
    }, {
        locationName: 'Hyderabad',
        count: '20',
        link: 'https://www.koushilmankali.com/'
    }, {
        locationName: 'Hyderabad',
        count: '20',
        link: 'https://www.koushilmankali.com/'
    }])

    let [locationComp, setLocationComp] = useState('');

    let handleLocations = (count) => {
        console.log('run')
        let places = [];
        for (let i = 0; i < count; i++) {
            places.push(
                {
                    locationName: 'Hyderabad',
                    count: '20',
                    link: 'https://www.koushilmankali.com/'
                }
            )
        }
        setLocations(places);
    }

    useEffect(() => {
        locations.map((location, index) => {
            setLocationComp(prevState => { return [...prevState, < LocationCard locationName={location.locationName} count={location.count} link={location.link} />] })
        })
    }, [locations])

    return <div className='LocationComp'>
        <div className='locationBody'>
            <div className='locationCompTitle'>Popular localities in and around <span className='cityName'>Hyderabad</span></div>
            <div className='locationCards'>
                {locationComp}
                <SeeMoreComp handleLocations={handleLocations} />
            </div>
        </div>
    </div>
}
export default LocationsComp;