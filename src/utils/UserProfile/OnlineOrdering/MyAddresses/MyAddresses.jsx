import css from './MyAddresses.module.css'

import AddressCard from '../../../AddressCard/AddressCard';
import AddAddressCard from '../../../AddressCard/AddAddressCard';

const MyAddresses = () => {

    let data = [
        {
            id: 1,
            title: "Hostel",
            address: "Dilshuk Nagar, Hyderabad",
        },
        {
            id:2,
            title: "Hostel2",
            address: "Manjeera Trinity, Kukatpally, Hyderabad",
        }
    ]

  return (<div className={css.outerDiv}>
    <AddAddressCard />
    {data?.map(val => {
        return <AddressCard title={val?.title} address={val?.address} key={val?.id} />
    }) }
  </div>);
}

export default MyAddresses