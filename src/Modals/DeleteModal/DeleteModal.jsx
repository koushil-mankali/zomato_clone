import { createPortal } from 'react-dom'

import css from './DeleteModal.module.css'

let DeleteModal = ({txt, setModal}) => {

    const deleteAction = () => {
        setModal(false);
    }

    const domObj = <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.txt}>{txt}</div>
            <div className={css.btns}>
                <div className={css.btn1} onClick={() => setModal(false)}>No</div>
                <div className={css.btn2} onClick={deleteAction}>Yes</div>
            </div>
        </div>
    </div>

    return createPortal(domObj, document.getElementById('modal'));
}

export default DeleteModal;