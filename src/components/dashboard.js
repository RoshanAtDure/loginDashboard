import React, { useState, useEffect } from 'react';
import Loader from "./loaders/loader";
import service from "../Api/service";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  let history = useHistory();
  const [isLoading, setisLoading] = useState(true);
  const [userList, setuserList] = useState([]);

  useEffect(() => {
    getUserList()
  }, [])

  const  getUserList = async() => {
    let url = 'users.json'
    const res = await service.getRequest(url)
    if(res.status == 200){
      setisLoading(false)
      setuserList(res.data)
    }
  }

  const gotoprofile = (userObj) => {
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
          {/* {userList.length > 0 && userList.map(userObj => {
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
          })} */}
          {
            userList.length > 0 &&
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Number</th>
                  <th>Profile</th>
                </tr>
              </thead>
              <tbody>
                {
                  userList.map((userObj, i) => {
                    return (<tr key={i}>
                      <td>{i+1}</td>
                      <td>{userObj.name}</td>
                      <td>{userObj.email}</td>
                      <td>{userObj.gender}</td>
                      <td>{userObj.contact_number}</td>
                      <td><Badge pill bg="primary" onClick={() => gotoprofile(userObj)}>view</Badge></td>
                    </tr>
                    )
                  })
                }
              </tbody>
            </Table>

          }

        </div>
      </div>
    </>
  )
}

export default Dashboard
