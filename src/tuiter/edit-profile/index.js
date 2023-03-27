import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { Link } from "react-router-dom";
import {saveProfile} from "./profile-reducer";

const EditProfile = () => {
    const profile = useSelector(state => state.profile);
    const name = profile.firstName.concat(" ").concat(profile.lastName);
    const dispatch = useDispatch();
    let updatedProfile = {...profile}
    const save = () => {
        dispatch(saveProfile(updatedProfile));
    }
    const nameOnChangeHandler = (value) => {
        const arrSplit = value.split(" ");
        updatedProfile.firstName = arrSplit[0]
        updatedProfile.lastName = arrSplit[1]
    }
    const bioOnChangeHandler = (value) => {
        updatedProfile.bio=value;
    }
    const locationOnChangeHandler = (value) => {
        updatedProfile.location=value;
    }
    const websiteOnChangeHandler = (value) => {
        updatedProfile.website=value;
    }

    const dateOnChangeHandler = (value) => {
        updatedProfile.dateOfBirth=value;
    }

    return (
        <>
            <div>
                <div className="row mb-2">
                    <div className="col-1">
                        <Link to="/tuiter/profile"><span className=""><i className="fa fa-solid fa-window-close"></i></span></Link>
                    </div>
                    <div className="col-11">
                        <span className=""> <strong className="">Edit Profile</strong></span>
                        <Link to="/tuiter/profile"><button type="button" onClick={() => save()} className="btn btn-dark btn-sm float-end wd-button-save">Save</button></Link>
                    </div>

                </div>
            </div>
            <div>
                <img src={profile.bannerPicture} className="wd-bannerPicture" alt="" ></img>
            </div>
            <div className="mt-2">
                <img src={profile.profilePicture} className="wd-profilePicture" alt=""></img>
            </div>
            <div className="wd-div">
                <label for="name" className="text-muted">Name</label><br/>
                <input id="name" type="text" onChange={(event) => {
                    nameOnChangeHandler(event.target.value);
                }} className="form-control wd-input  bg-transparent" defaultValue={name}></input>
            </div>
            <div className="wd-div">
                <label for="bio" className="text-muted">Bio</label><br/>
                <textarea id="bio" onChange={(event) => {
                    bioOnChangeHandler(event.target.value);
                }}  className="form-control wd-input  bg-transparent" defaultValue={profile.bio}></textarea>
            </div>
            <div className="wd-div">
                <label for="location" className="text-muted">Location</label><br/>
                <input id="location" onChange={(event) => {
                    locationOnChangeHandler(event.target.value);
                }}  type="text" className="form-control wd-input  bg-transparent" defaultValue={profile.location}></input>
            </div>
            <div className="wd-div">
                <label for="date" className="text-muted">Date of Birth</label><br/>
                <input id="date" onChange={(event) => {
                    dateOnChangeHandler(event.target.value);
                }} type="date" className="form-control wd-input bg-transparent" defaultValue={profile.dateOfBirth}></input>
            </div>
            <div className="wd-div">
                <label for="website" className="text-muted">Website</label><br/>
                <input id="website" onChange={(event) => {
                    websiteOnChangeHandler(event.target.value);
                }}  type="text" className="form-control wd-input  bg-transparent" defaultValue={profile.website}></input>
            </div>
        </>
    );
};
export default EditProfile;