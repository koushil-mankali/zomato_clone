import {Formik, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup';

import css from './AddAddressForm.module.css'

import closeIcon from '/icons/close.png'
import checkMarkIcon from '/icons/check-mark.png'

import RadioComponent from '../../../FormComponents/RadioComponent/RadioComponent'
import TextComponent from '../../../FormComponents/TextComponent/TextComponent'
import TextComponentWithCancel from '../../../FormComponents/TextComponentWithCancel/TextComponentWithCancel'

const AddAddressForm = ({setPage, setAddressModal, setSearchComp}) => {
   
    let initialValues = {
        completeAddress: "",
        floor: "",
        nearBy: "",
        addressType: "",
        addressTypeOther:""
    }

    let validationSchema = Yup.object({
        completeAddress: Yup.string().min(5, "Minimum 5 charecters needed!").required("Required"),
        floor: Yup.string().min(5, "Minimum 5 charecters needed!"),
        nearBy: Yup.string().min(5, "Minimum 5 charecters needed!"),
        addressType: Yup.string().required("Required"),
        addressTypeOther: Yup.string().min(3, "Minimum 3 charecters required!")
    })

    let submitForm = (values) => {
        console.log(values, 'form values');
        setAddressModal(false);
    }

  return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
        <div className={css.header}>
            <div className={css.ttl}>Add Address</div>
            <div className={css.imgBox} onClick={() => setPage(1)}><img className={css.closeIcon} src={closeIcon} /></div>
        </div>
        <div className={css.bdy}>
            <div className={css.labelTxt}>DELIVERY AREA</div>
            <div className={css.addBox}>
                <div className={css.addressBx}>
                    <div className={css.addIcon}><img className={css.rightArrIcon} src={checkMarkIcon} /></div>
                    <div className={css.address}>Malkajgiri, Mir Alam Mandi, Pathar Gatti</div>
                </div>
                <div className={css.chgTxt} onClick={()=> setSearchComp(true)}>CHANGE</div>
            </div>
        </div>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submitForm}
            >
            {(formik) => {
                return <Form>
                    <TextComponent name="completeAddress" placeholder="Complete address*" />
                    <TextComponent name="floor" placeholder="Floor (Optional)" />
                    <TextComponent name="nearBy" placeholder="Nearby landmark (Optional)" />
                    <div className={css.radioBtns}>
                        {formik.values.addressType !== "other" ? 
                        <>
                            <RadioComponent label="Home" name="addressType" value="home" />
                            <RadioComponent label="Work" name="addressType" value="work" />
                            <RadioComponent label="Other" name="addressType" value="other" />
                        </> : 
                        <div className={css.otherRadio}>
                            <RadioComponent label="Other" name="addressType" value="other" />
                            <div className={css.txtCancelField}>
                                <TextComponentWithCancel name="addressTypeOther" placeholder="Add tag" formik={formik} />
                            </div>
                        </div>
                        }
                    </div>
                    <ErrorMessage name="addressType">
                        {msg => <div className={css.errorMessage}>{msg}</div>}
                    </ErrorMessage>
                    <div className={css.ftr}>
                        <button type='submit' className={css.btn}>
                            Save And Proceed
                        </button>
                    </div>
                </Form>
            }}
        </Formik>
        </div>
  </div>
}

export default AddAddressForm 