import {useState} from 'react'

import css from './SearchLocation.module.css'

import closeIcon from '/icons/close.png'
import locationIcon from '/icons/locationB.png'
import checkMarkIcon from '/icons/check-mark.png'

const SearchLocation = ({setSearchComp}) => {

    let [data, setData] = useState([
        {
            id: 1,
            name: "Name of the city",
            address: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi"
        },
        {
            id: 2,
            name: "Name of the city",
            address: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi"
        },
        {
            id: 3,
            name: "Name of the city",
            address: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi"
        },
        {
            id: 4,
            name: "Name of the city",
            address: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi"
        },
        {
            id: 5,
            name: "Name of the city",
            address: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi"
        },
        {
            id: 6,
            name: "Name of the city",
            address: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi"
        },
        {
            id: 7,
            name: "Name of the city",
            address: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi"
        },
        {
            id: 8,
            name: "Name of the city",
            address: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi"
        },
        {
            id: 9,
            name: "Name of the city",
            address: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi"
        }
    ])

    const getSearchData = (e) => {
        console.log(e.target.value, 'search value');
    }

  return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.header}>
                <div className={css.ttl}>Search Location</div>
                <div className={css.imgBox} onClick={() => setSearchComp(false)}><img className={css.closeIcon} src={closeIcon} /></div>
            </div>
            <div className={css.bdy}>
                <div className={css.addBox}>
                    <div className={css.iconImgBox}>
                        <img src={locationIcon} className={css.lcticon} />
                    </div>
                    <input type='text' className={css.inptBox} placeholder="Start typing to search" onChange={getSearchData} />                    
                </div>
                <div className={css.results}>
                {data ? data?.map(val => {
                    return <div className={css.result} key={val.id}>
                        <div className={css.name}>{val.name}</div>
                        <div className={css.address}>{val.address}</div>
                    </div>
                }): ""}
                </div>
            </div>
        </div>
  </div>
}

export default SearchLocation 