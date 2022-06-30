import css from './AddAddressCard.module.css'

import add from '/icons/add.png'

const AddAddressCard = ({setAddressModal}) => {
  return <div className={css.outerDiv} onClick={() => setAddressModal(true)}>
        <div className={css.innerDiv}>
            <img className={css.img} src={add} />
            <div className={css.txt}>Add Address</div>
        </div>
  </div>
}

export default AddAddressCard