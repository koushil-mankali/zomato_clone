import React from 'react'
import { Field, ErrorMessage, Formik } from 'formik';

import css from './TextComponentWithCancel.module.css'

const TextComponentWithCancel = ({name, placeholder, formik}) => {

  const changeFieldValues = () => {
    formik.setFieldValue("addressType", "");
    formik.setFieldValue("addressTypeOther", "");
  }

  return  <div className={css.fieldBox}>
    <div className={css.txtField}>
      <Field name={name} type="text" placeholder={placeholder} className={css.field} />
      <div className={css.cnlBtn} onClick={changeFieldValues}>CANCEL</div>
    </div>
    <ErrorMessage name={name}>
        {msg => <div className={css.errorMessage}>{msg}</div>}
    </ErrorMessage>
</div>
}

export default TextComponentWithCancel