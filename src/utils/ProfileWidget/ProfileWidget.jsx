import css from './ProfileWidget.module.css'

let ProfileWidget = ({name, tag, data}) => {

    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.title}>{name}</div>
            <div className={css.tag}>{tag}</div>
            <div className={css.body}>
            <div className={css.userTab}>
                <div className={css.leftBox}>
                    <div className={css.detBox}>
                        <div className={css.imgBox}>
                            <img className={css.profileImg} src={data?.imgSrc} alt='profile picture' />
                        </div>
                        <div className={css.userName}>{data?.userName}</div>
                    </div>
                    <div className={css.detBox2}>
                        <div>
                            <div>0</div>
                            <div>Reviews</div>
                        </div>
                        <div>
                            <div>0</div>
                            <div>Photos</div>
                        </div>
                        <div>
                            <div>0</div>
                            <div>Followers</div>
                        </div>
                    </div>
                </div>
                <div className={css.footer}>
                    <div>Tomato</div>
                </div>
            </div>
            </div>
        </div>
    </div>
}

export default ProfileWidget;