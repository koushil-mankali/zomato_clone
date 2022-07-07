import React from 'react'
import { Field, ErrorMessage } from 'formik';

import css from './RadioUtil.module.css'

const RadioUtil = ({label, name, value}) => {

  return <div className={css.fieldBox}>
        <label className={css.label}>
            <Field className={css.field} type="radio" name={name} value={value} />
            <span className={css.labelTxt}>
                {label}
            </span>
        </label>
  </div>
}

export default RadioUtil