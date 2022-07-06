import {useState, useEffect} from 'react'

import css from './ViewUploadedCard.module.css'

import multiplyCancelIcon from '/icons/multiply-cancel.png'

const ViewUploadedCard = ({file, id, removeFromFiles}) => {

    let [isError, setIsError] = useState(false);
    let [errorMessage, setErrorMessage] = useState("");
    let [clicked, setClicked] = useState(false);

    useEffect(()=>{
        if((file?.size / 1024 / 1024) > 1){
            setIsError(true);
            setErrorMessage("Image size should be less then 1 mb");
        }
    }, [file])

    document.addEventListener("click", () => {
        setClicked(false)
    }, true)

  return <div className={css.outerDiv} >
    <div className={css.innerDiv}>
        <div className={isError ? [css.imgBox, css.error]?.join(" ") : css.imgBox}>
            <div className={css.cancelIconBox} onClick={() => removeFromFiles(id)}><img src={multiplyCancelIcon} alt="cancel button" className={css.cancelIcon} /></div>
            <img src={URL.createObjectURL(file)} className={css.img} />
            {isError ? <div className={css.errorTxt} title={errorMessage}>{errorMessage}</div> : "" }
        </div>
        <div className={css.messageBox}>
            <label htmlFor='textArea' className={clicked ? [css.labelCaption, css.labelCaption2]?.join(" ") : css.labelCaption}>Caption</label>
            <textarea id="textArea" className={clicked ? [css.textArea, css.textArea2]?.join(" ") : css.textArea } rows="8" cols="10" onClick={() => setClicked(true)}></textarea>
        </div>
    </div>
  </div>
}

export default ViewUploadedCard