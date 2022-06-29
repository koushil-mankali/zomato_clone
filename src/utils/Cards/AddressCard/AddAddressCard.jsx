import css from './AddAddressCard.module.css'

import add from '/icons/add.png'

const AddAddressCard = () => {
  return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <img className={css.img} src={add} />
            <div className={css.txt}>Add Address</div>
        </div>
  </div>
}

export default AddAddressCard