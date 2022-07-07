import React from 'react'
import { Field, ErrorMessage, Formik } from 'formik';

import css from './TextUtilWithCancel.module.css'

const TextUtilWithCancel = (props) => {
  const {txt, name, placeholder, formik, changeHandler, ...restProps} = props;

  return  <div className={css.fieldBox}>
    <div className={css.txtField}>
      <Field name={name} type="text" placeholder={placeholder} className={css.field} {...restProps} />
      <div className={css.cnlBtn} onClick={() => changeHandler(formik)}>{txt}</div>
    </div>
    <ErrorMessage name={name}>
        {msg => <div className={css.errorMessage}>{msg}</div>}
    </ErrorMessage>
</div>
}

export default TextUtilWithCancel