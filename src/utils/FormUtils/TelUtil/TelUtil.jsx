import React from 'react'
import { Field, ErrorMessage } from 'formik';

import css from './TelUtil.module.css'

const TelUtil = ({name, placeholder,}) => {
  return  <div className={css.fieldBox}>
    <Field name={name} type="tel" placeholder={placeholder} className={css.field} />
    <ErrorMessage name={name}>
        {msg => <div className={css.errorMessage}>{msg}</div>}
    </ErrorMessage>
</div>
}

export default TelUtil