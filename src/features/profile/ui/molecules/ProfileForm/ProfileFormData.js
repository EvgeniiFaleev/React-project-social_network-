import React from "react";
import {ErrorMessage, useForm} from "react-hook-form";
import classes from '../../organisms/ProfileInfo/ProfileInfo.module.scss'
import {useDispatch} from "react-redux";
import {profileActions} from "../../../modules/profile";


export const ProfileForm = ({
  profile: {contacts, lookingForAJob, lookingForAJobDescription, fullName},
  closeEditMode
}) => {
  const dispatch = useDispatch();
  const {register, handleSubmit, errors, triggerValidation, setError} = useForm();

  const onSubmit = (profileData) => {

    dispatch(profileActions.saveProfile(profileData)).then((response) => {
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

    return <p>{item[0]}:
      <input onChange={() => triggerValidation("contacts." + item[0])}
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>Full Name:
        <input ref={register} name={"FullName"}
          defaultValue={fullName}/>
      </p>
      <p>Looking for a Job:
        <select ref={register} name="lookingForAJob"
          defaultValue={lookingForAJob ? "yes" : "no"}>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </p>
      <p>My professional skills:
        <input ref={register} name={"LookingForAJobDescription"}
          defaultValue={lookingForAJobDescription}/>
      </p>
      <p>About Me:
        <input ref={register} name={"AboutMe"}
          defaultValue='About me'/>
      </p>
      <ErrorMessage errors={errors} name="contactsErr" className={classes.error} as="p"/>
      {contactItems}
      <input type="submit" value={"Save"}
      />
    </form>
  )
};