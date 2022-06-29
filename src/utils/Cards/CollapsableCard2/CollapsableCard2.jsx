import { useState } from 'react';

import css from './CollapsableCard2.module.css';

import downArrow from '/icons/down-arrow.png';

let CollapsableCard = ({ title, content }) => {
    let [state, setState] = useState(`${css.content} ${css.dnone}`);
    let [rotate, setRotate] = useState(`${css.arrow} ${css.arrowRotateUp} `);

    let toggleBar = () => {
        setState(val => {
            if (val === `${css.content} ${css.dblock} `) {
                return `${css.content} ${css.dnone} `;
            } else {
                return `${css.content} ${css.dblock} `;
            }
        });
        setRotate(val => {
            if (val === `${css.arrow} ${css.arrowRotateUp} `) {
                return `${css.arrow} ${css.arrowRotateDown} `;
            } else {
                return `${css.arrow} ${css.arrowRotateUp} `;
            }
        });
    }

    return <div className={css.outerDiv} onClick={toggleBar}>
        <div className={css.bar}>
            <div className={css.title}>{title}</div>
            <img src={downArrow} alt="down arrow" className={rotate} />
        </div>
        <div className={state}>
            <div className={css.val}>{content}</div>
        </div>
    </div>
}

export default CollapsableCard;