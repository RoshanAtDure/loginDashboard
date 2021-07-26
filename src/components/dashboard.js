import React, { useState, useEffect } from 'react';
import Loader from "./loaders/loader";
import service from "../Api/service";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  let history = useHistory();
  const [isLoading, setisLoading] = useState(true);
  const [userList, setuserList] = useState([]);

  useEffect(() => {
    getUserList()
  }, [])

  const getUserList = () => {
    let url = 'users.json'
    service.getRequest(url).then(function (data) {
      setisLoading(false)
      setuserList(data.data)
    });
  }

  const gotoprofile = (userObj) => {
    console.log(userObj)
    history.push({
      pathname: "/userProfile",
      state: userObj,
    });
  }

  return (
    <>
      <div className="dashboard-container">
        <div>User List</div>
        <Loader isLoading={isLoading}></Loader>
        <div className="userListCard-container">
          {userList.length > 0 && userList.map(userObj => {
            return (
              <Card className="userListCard" onClick={() => gotoprofile(userObj)}>
                <Card.Body>
                  <Card.Text>
                    <div>Name: {userObj.name}</div>
                    <div>Email: {userObj.email}</div>
                    <div>Gender: {userObj.gender}</div>
                    <div>Number: {userObj.contact_number}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Dashboard
