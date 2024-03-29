import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import { getCurrentProfile } from "../../../../services/profileService";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    getCurrentProfile(dispatch)
  }, [])
  return (
    <div className="profile">
      <img className="logo" src="../../../images/elonmusk.jpeg" alt="" />
      <div className="title">{profile.firstName + " " + profile.lastName}</div>
      <div className="tweets">{profile.tweets} tweets</div>
      <img className="img" src="../../../images/bg.jpeg" alt="" />
      <div className="btn-con">
        <Link to="/a8/twitter/profileEdit" className="btn">
          Edit Profile
        </Link>
      </div>
      <div className="title">{profile.firstName + " " + profile.lastName}</div>
      <div className="tweets">@{profile.handle}</div>
      <div className="bio">{profile.bio}</div>
      <div>
        {profile.location}&nbsp;&nbsp;&nbsp;Born {profile.dateOfBirth}
        &nbsp;&nbsp;&nbsp;
        {profile.dateJoined}
      </div>
      <div style={{ margin: "8px 0" }}>
        <span className="white">{profile.followingCount}</span>
        Following&nbsp;&nbsp;&nbsp;
        <span className="white">{profile.followersCount}</span>
        Followers
      </div>
    </div>
  );
};
export default Profile;
