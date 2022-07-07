
import React from 'react'
import { Field } from 'formik';

import css from './TextAreaUtil.module.css'

const CustomInputComponent = ({
    field, 
    form: { touched, errors }, 
    ...props
  }) => (
    <div>
      <textarea type="textarea" {...field} {...props} />
    </div>
  );

const TextAreaUtil = ({name, placeholder,}) => {
  return  <div className={css.fieldBox}>
    <Field name={name} component={CustomInputComponent} placeholder={placeholder} className={css.textAreaField} />
</div>
}

export default TextAreaUtil