import css from './UserBody.module.css'

const UserBody = () => {
  return (
    <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.leftBar}></div>
            <div className={css.rightBar}></div>
        </div>
    </div>
  )
}

export default UserBody