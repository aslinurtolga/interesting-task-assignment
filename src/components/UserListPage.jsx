import React, {useEffect, useState} from 'react'

const UserListPage = () => {
  // state definitions
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function that brings users
    const getUsers = async () => {
    try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await response.json();
    setUsers(userData);
    setLoading(false);
    } catch (error) {
    console.log("Error fetching users:", error);
    }
  };





  })





  return <div>UserListPage</div>;
}

export default UserListPage