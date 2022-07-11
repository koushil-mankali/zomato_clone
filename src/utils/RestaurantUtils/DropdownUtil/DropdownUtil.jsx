import {useState} from 'react'

import css from './DropdownUtil.module.css'

const DropdownUtil = (props) => {
    const {options = [], icon1, icon2, filFunc= () => {}} = props;
    const [selected, setSelected] = useState(options?.[0]);
    const [dropDown, setDropdown] = useState(false);

    const clickHandler = (value) => {
        setSelected(value);
        filFunc(value);
        setDropdown(false);
    }

    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.dropdown} onClick={() => setDropdown(val => !val)}>
                {icon1 ?  <div className={css.imgBox1}><img src={icon1} alt='icon' className={css.img} /></div> : ""}
                <div className={css.ttl}>{selected}</div>
                {icon2 ? <div className={css.imgBox2}><img src={icon2} alt='icon' className={css.img} /></div> : ""}
            </div>
            {dropDown ? <div className={css.dropdownList}>
                {options?.map((val, id) => {
                    console.log(selected === val, selected, val)
                    return <div key={id} onClick={() => clickHandler(val)} className={selected === val ? [css.option, css.selected].join(" ") : css.option}>
                        {val}
                    </div>
                })}
            </div> : ""}
        </div>  
    </div>
}

export default DropdownUtil