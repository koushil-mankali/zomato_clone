import { useState, useEffect } from 'react'

import copyIcon from '/icons/copy.png'
import directioIcon from '/icons/direction.png'

import css from './OverviewAboutCard.module.css'

import AlertBox from '../../../Alerts/AlertBox/AlertBox'
import BtnWithIcon from '../../../Buttons/BtnWithIcon/BtnWithIcon'

const OverviewAboutCard = ({data}) => {
  const {phone, address, lat, lng} = data;

  const [alert, setAlert] = useState({
    show: false
  });

  if(alert.show){
    setTimeout(()=>{
      setAlert({show: false});
    }, [5000])
  }

  return <>
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <div className={css.header}>
          <div className={css.htxt}>Call</div>
          <div className={css.phone}>+91{phone}</div>
        </div>
        <div className={css.direction}>
          <div className={css.htxt}>Direction</div>
          <div className={css.map}>MAP</div>
          <div className={css.addTxt}>{address}</div>
        </div>
        <div className={css.btns}>
            <BtnWithIcon icon={copyIcon} txt="Copy" onClick={() => setAlert({show: true})} />
            <BtnWithIcon icon={directioIcon} txt="Direction" />
        </div>
      </div>
    </div>
    {alert.show ? <AlertBox text="Restaurant Address Copied to Clipboard" setClose={setAlert} stateVal="show" /> : "" }
  </>
}

export default OverviewAboutCard