import {useState} from 'react'

import css from './SearchLocation.module.css'

import closeIcon from '/icons/close.png'
import checkMarkIcon from '/icons/check-mark.png'

const SearchLocation = ({setSearchComp}) => {
  return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.header}>
                <div className={css.ttl}>Search Location</div>
                <div className={css.imgBox} onClick={() => setSearchComp(false)}><img className={css.closeIcon} src={closeIcon} /></div>
            </div>
            <div className={css.bdy}>
                <div className={css.addBox}>
                    <div className={css.addressBx}>
                        Search box
                    </div>
                </div>
                <div className={css.results}>
                    <div className={css.result}>
                        <div className={css.name}>name</div>
                        <div className={css.address}>add</div>
                    </div>
                    <div className={css.result}>
                        <div className={css.name}>name</div>
                        <div className={css.address}>add</div>
                    </div>
                    <div className={css.result}>
                        <div className={css.name}>name</div>
                        <div className={css.address}>add</div>
                    </div>
                    <div className={css.result}>
                        <div className={css.name}>name</div>
                        <div className={css.address}>add</div>
                    </div>
                    <div className={css.result}>
                        <div className={css.name}>name</div>
                        <div className={css.address}>add</div>
                    </div>
                    <div className={css.result}>
                        <div className={css.name}>name</div>
                        <div className={css.address}>add</div>
                    </div>
                    <div className={css.result}>
                        <div className={css.name}>name</div>
                        <div className={css.address}>add</div>
                    </div>
                    <div className={css.result}>
                        <div className={css.name}>name</div>
                        <div className={css.address}>add</div>
                    </div>
                    <div className={css.result}>
                        <div className={css.name}>name</div>
                        <div className={css.address}>add</div>
                    </div>
                    <div className={css.result}>
                        <div className={css.name}>name</div>
                        <div className={css.address}>add</div>
                    </div>
                    <div className={css.result}>
                        <div className={css.name}>name</div>
                        <div className={css.address}>add</div>
                    </div>
                </div>
            </div>
        </div>
  </div>
}

export default SearchLocation 