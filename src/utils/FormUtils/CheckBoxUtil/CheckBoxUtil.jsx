import React from 'react'
import { Field, ErrorMessage } from 'formik';

import css from './CheckBoxUtil.module.css'

const CheckBoxUtil = (props) => {
  const {label, name, ...restProps} = props;

  return <div className={css.fieldBox}>
        <label className={css.label}>
            <Field className={css.field} type="checkbox" name={name} {...restProps} />
            <span className={css.labelTxt}>
                {label}
            </span>
        </label>
  </div>
}

export default CheckBoxUtil