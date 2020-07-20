import React from "react";
import {ErrorMessage, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {profileActions} from "../../../modules/profile/";
import classes from "./ProfileForm.module.scss"


export const ProfileForm = ({
  profile: {contacts, lookingForAJob, lookingForAJobDescription, fullName}, closeEditMode
}) => {
  const dispatch = useDispatch();
  const {register, handleSubmit, errors, triggerValidation, setError} = useForm();

  const onSubmit = (profileData) => {

    dispatch(profileActions.saveProfile(profileData))
      .then((response) => {
        if (response && response.length) {
          response.forEach(() => setError('contactsErr',
            'servererror',
            "Invalid Url Format"));
        } else {
          closeEditMode();
        }
      });

  };

  const contactItems = Object.entries(contacts).map((item) => {

    return <p className={classes.contacts_item}>{item[0].charAt(0)
      .toUpperCase() + item[0].slice(1)}:
      <input className={classes.contacts_input}
        onChange={() => triggerValidation("contacts." + item[0])}
        ref={register({
          maxLength: {
            value: 20,
            message: <p>"ERROR"</p>
          }
        })}
        name={"contacts." + item[0]}
        defaultValue={item[1]}/>
      <ErrorMessage errors={errors}
        name={"contacts." + item[0]} as="p" className={classes.error}/>
    </p>
  });


  return (
    <form className={classes.profileForm}
      onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.profileForm_close} onClick={closeEditMode}>
        <i className="fa fa-times" aria-hidden="true"/>
      <small>close</small>
      </div>
      <section className={classes.name_wrapper}><p>Full Name:
        <input ref={register} placeholder={"Full Name"}
          name={"FullName"}
          defaultValue={fullName}/>
      </p>
        <p>Looking for a Job:
          <select ref={register} name="lookingForAJob"
            defaultValue={lookingForAJob ?
              "yes" :
              "no"}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </p>
      </section>
      <p>My professional skills:
        <input ref={register} name={"LookingForAJobDescription"}
          defaultValue={lookingForAJobDescription}/>
      </p>
      <p>About Me:
        <input ref={register} name={"AboutMe"}
          defaultValue='About me'/>
      </p>
      <ErrorMessage errors={errors} name="contactsErr"
        className={classes.error} as="p"/>
      <div className={classes.info_box}>{contactItems}</div>
      <button className={classes.editProfile_btn}>Save</button>

    </form>
  )
};