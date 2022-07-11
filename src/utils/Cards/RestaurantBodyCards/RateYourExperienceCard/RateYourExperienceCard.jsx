import { useState } from "react";
import { Formik, Form } from "formik";

import css from "./RateYourExperienceCard.module.css";

import RadioBtn from "../../../FormUtils/RadioUtil/RadioUtil";
import RatingNumberBox from '../../../RestaurantUtils/RatingNumberBox/RatingNumberBox'

const RateYourExperienceCard = () => {
  const [stars, setStars] = useState(0);

  const [quots] = useState([
    "",
    "Horrible",
    "Bad",
    "Average",
    "Good",
    "Excellent",
  ]);

  const initialValues = {
    type: "dining"
  }

  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <div className={css.ttl}>Rate your experience for</div>
        <div className={css.radioOptns}>
          <Formik initialValues={initialValues}>
            <Form className={css.form}>
                <RadioBtn label="Dining" name="type" value="dining" />
                <RadioBtn label="Delivery" name="type" value="delivery" />
            </Form>
          </Formik>
        </div>
        <div className={css.ratingBox}>
            <RatingNumberBox stars={stars} txt="1" iconR={stars > 1} isActive={stars >= 1} onClick={() => setStars(1)} />
            <RatingNumberBox stars={stars} txt="2" iconR={stars > 2} isActive={stars >= 2} onClick={() => setStars(2)} />
            <RatingNumberBox stars={stars} txt="3" iconR={stars > 3} isActive={stars >= 3} onClick={() => setStars(3)} />
            <RatingNumberBox stars={stars} txt="4" iconR={stars > 4} isActive={stars >= 4} onClick={() => setStars(4)} />
            <RatingNumberBox stars={stars} txt="5" iconR={stars > 5} isActive={stars >= 5} onClick={() => setStars(5)} />
            <div className={css.ratingTxt}>{quots[stars]}</div>
        </div>
        <div className={css.modalTxt}>Write a Review</div>
      </div>
    </div>
  );
};

export default RateYourExperienceCard;
