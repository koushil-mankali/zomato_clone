import React from 'react'
import { Field, ErrorMessage } from 'formik';

import css from './TextUtil.module.css'

const TextUtil = (props) => {
  const {name, placeholder, ...restProps} = props;
  return  <div className={css.fieldBox}>
    <Field name={name} type="text" placeholder={placeholder} className={css.field} {...restProps} />
    <ErrorMessage name={name}>
        {msg => <div className={css.errorMessage}>{msg}</div>}
    </ErrorMessage>
</div>
}

export default TextUtil