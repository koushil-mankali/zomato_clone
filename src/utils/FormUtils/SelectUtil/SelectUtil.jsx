import React from 'react'
import { Field } from 'formik';

import css from './SelectUtil.module.css'

const SelectUtil = ({name, defaultSelected}) => {
  return  <div className={css.fieldBox}>
    <Field name={name} component="select" className={css.field}>
        <option className={css.option} value="red">Red</option>
        <option className={css.option} value="green">Green</option>
        <option className={css.option} value="blue">Blue</option>
    </Field>
</div>
}

export default SelectUtil