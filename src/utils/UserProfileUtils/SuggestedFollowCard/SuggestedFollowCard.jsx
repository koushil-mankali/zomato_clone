import UsersTab from './UsersTab'

import css from './SuggestedFollowCard.module.css'

let SuggestedFollowCard = ({name, data}) => {

    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.title}>{name}</div>
            <div className={css.body}>
                {data?.map((val, index) => {
                    return <UsersTab data={val} key={index} />
                })}
            </div>
        </div>
    </div>
}

export default SuggestedFollowCard;