import { useEffect, useState } from "react";

import css from "./UploadPhotoCard.module.css";

import uploadImage from "/images/upload-image.png";

import ViewUploadedCard from "../ViewUploadedCard/ViewUploadedCard";

const UploadPhotoCard = ({ setAnyUpload, files, setFiles, isError, setIsError, setErrorMessage, errorMessage }) => {

  useEffect(() => {
    if (files?.length > 0) {
      setAnyUpload(true);
    } else {
      setAnyUpload(false);
    }
  }, [files]);

  const fileUplaod = (e) => {
    setFiles((val) => {
      return [...val, e.target.files[0]];
    });
  };

  const removeFromFiles = (idVal) => {
    setFiles((val) => {
      return val?.filter((val, id) => {
        if (id !== idVal) {
          return val;
        }
      });
    });

    setIsError(val => {
      // return val?.filter(fv => fv !== idVal)
    })

    setErrorMessage(val => {
      // return val?.filter(fv => fv !== idVal)
    })
  };

  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <div className={css.txt}>
          Drag & Drop to upload or
          <input
            type="file"
            id="browse"
            name="browse"
            className={css.browseInpt}
            onChange={(e) => fileUplaod(e)}
          />
          <label htmlFor="browse" className={css.browseTxt}>
            Browse
          </label>
        </div>
        <div className={css.bdyBox}>
          <div className={css.viewCards}>
            {files?.map((val, id) => {
              console.log(id, "files id")
              return <ViewUploadedCard file={val} id={id} key={id} removeFromFiles={removeFromFiles} isError={isError} setIsError={setIsError} setErrorMessage={setErrorMessage} errorMessage={errorMessage}/>;
            })}
          </div>
          <label className={css.imgBox} htmlFor="browse2">
            <input
              type="file"
              id="browse2"
              name="browse2"
              className={css.browseInpt}
              onChange={(e) => fileUplaod(e)}
            />
            <img src={uploadImage} className={css.img} alt="upload image" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default UploadPhotoCard;
