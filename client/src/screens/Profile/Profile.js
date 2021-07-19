import axios from "axios";
import React, { useEffect } from "react";
import axiosClient from "../../api/axiosClient";


function Profile() {

  const token = localStorage.getItem("token");

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axiosClient.get("/user/infor", {
          headers: { Authorization: token },
        });
        // console.log("user", res);
      } catch (err) {
        console.log("user err", err.code);
      }
    };

    getUser();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
}

export default Profile;
