import React, { useEffect, useState } from "react";
import "./Profile.css";
import { getUserById } from "../../services/userService.jsx";

export const Profile = ({ currentUser }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (currentUser && currentUser.id) {
      getUserById(currentUser.id).then((userData) => {
        setUser(userData);
      });
    }
  }, [currentUser]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="wrapper-center">
      <div className="profile">
        <h2>{user.username}</h2>
        <img src={user.img} alt="User Avatar" />
        <div>
          <br></br>
          {user.bio}
        </div>
      </div>
    </div>
  );
};
