import React, { useState, useEffect } from 'react';
import Loader from "./loaders/loader";
import service from "../Api/service";
import Card from "react-bootstrap/Card";

const UserProfile = (props) => {
  const [isLoading, setisLoading] = useState(true);
  const [userObj, setuserProfile] = useState(null);

  useEffect(() => {
    console.log(props)
    getDetails()
  }, [])

  const getDetails = () => {
    let url = 'user-profile.json'
    service.getRequest(url).then(function (data) {
      setisLoading(false)
      setuserProfile(data.data)
    });
  }

  return (
    <>
      <div className="dashboard-container">
        <div>User Profile</div>
        <Loader isLoading={isLoading}></Loader>
        <div className="userListCard-container">
          {userObj != null &&
            <Card className="userListCard">
              <Card.Body>
                <Card.Text>
                  <div>Name: {userObj.name}</div>
                  <div>Email: {userObj.email}</div>
                  <div>Gender: {userObj.gender}</div>
                  <div>Number: {userObj.contact_number}</div>
                </Card.Text>
              </Card.Body>
            </Card>
          }
        </div>
      </div>
    </>
  )
}

export default UserProfile;
