import { NavLink } from 'react-router-dom'

import css from './LeftSideCardPanel.module.css'

let LeftSideCardPanel = ({name, data}) => {

    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.title}>{name}</div>
            <div className={css.body}>
                {data?.map(val => {
                    return <NavLink to={`/test-page/${val.hash}`} key={val.hash} className={({isActive}) => isActive ? [css.active, css.bodyLink].join(' ') : css.bodyLink}> <span className={css.linkTxt}>{val.title}</span></NavLink>
                })}
            </div>
        </div>
    </div>
}

export default LeftSideCardPanel;