import React from 'react'

import css from './UserSettingsPage.module.css'

import Navbar from '../../components/Navbars/NavigationBar2/NavigationBar2'
import RedBtnHov from '../../utils/Buttons/RedBtnHov/RedBtnHov'
import GrayBtn from '../../utils/Buttons/GrayBtn/GrayBtn'
import Footer from '../../components/Footer/Footer'

import NotificationSettingsUtil from '../../utils/UserProfileUtils/NotificationSettingsUtil/NotificationSettingsUtil'

const UserSettingsPage = () => {

    const data = [
        {
            txt: "Enable all",
            tag: "Activate all notifications",
            push: true,
            email: false,
            whatsapp: false,
        },
        {
            txt: "Newsletters",
            tag: "Receive newsletter to stay up-to date with whats brewing in food industry",
            push: true,
            email: false,
            whatsapp: false,
        },
        {
            txt: "Promos and offers",
            tag: "Receive updates about coupons, promotions and money-saving offers",
            push: true,
            email: false,
            whatsapp: false,
        },
        {
            txt: "Social notifications",
            tag: "Get notified when someone follows your profile, or when you get likes and comments on reviews and photos posted by you",
            push: true,
            email: false,
            whatsapp: false,
        },
        {
            txt: "Important updates",
            tag: "Receive important updates related to your account",
            push: true,
            email: false,
            whatsapp: false,
        }
    ]

  return <div className={css.outerDiv}>
    <Navbar />
    <div className={css.innerDiv}>
        <div className={css.bdy}>
            <div className={css.header}>
                <div className={css.LHeader}>
                    <div className={css.ttl}>Notification Preferences</div>
                    <div className={css.tag}>Receive updates related to order status, promo codes and more</div>
                </div>
                <div className={css.RHeader}>
                    {/* <RedBtnHov txt="Save" /> */}
                    <GrayBtn txt="Save" />
                </div>
            </div>
            <div className={css.settingsBdy}>
            <div className={css.checkBoxesTtl}>
                <div className={css.chbkTtl}>Push</div>
                <div className={css.chbkTtl}>Email</div>
                <div className={css.chbkTtl}>Whatsapp</div>
            </div>
                {data?.map((item, id)=>{
                    return <div>
                        <NotificationSettingsUtil key={id} txt={item.txt} tag={item.tag} push={item.push} email={item.email} whatsapp={item.whatsapp} />
                        {data?.length - 1 !== id ? <hr className={css.hr} /> : ""}
                    </div>
                })}
            </div>
        </div>
    </div>
    <Footer />
  </div>
}

export default UserSettingsPage