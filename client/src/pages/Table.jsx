

import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Modal, TextField, Button } from '@material-ui/core';
import { Edit, Visibility } from '@material-ui/icons';
import userData from '../data/data.json';
import { useNavigate } from 'react-router-dom'; 
import './UserTable.css';
import Header from '../components/Header';


const UserTable = () => {
  const [users, setUsers] = useState(userData);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const calculateAge = (dob) => {
    const [day, month, year] = dob.split('/');
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleEdit = (index) => {
    setSelectedUser(users[index]);
    setIsModalOpen(true);
  };

  const handleView = (index) => {
    console.log(index);
    navigate(`/table/${index}`);
  };

  const handleSave = (event) => {
    event.preventDefault();
    setUsers((prevUsers) => {
      return prevUsers.map((user) => {
        if (user.email === selectedUser.email) {
          return {
            ...user,
            first_name: event.target.first_name.value,
            last_name: event.target.last_name.value,
            dob: event.target.dob.value,
            gender: event.target.gender.value,
            email: event.target.email.value,
            bio: event.target.bio.value,
            address: event.target.address.value,
            isActive: event.target.isActive.checked,
            country: event.target.country.value,
          };
        } else {
          return user;
        }
      });
    });
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <>
    <Header />
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={user.email}>
              <TableCell>{user.first_name}  {user.last_name}</TableCell>
              <TableCell>{calculateAge(user.dob)}</TableCell>
              <TableCell>{user.gender}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleEdit(index)}>
                  <Edit />
                </IconButton>
                <IconButton onClick={() => handleView(index)}>
                  <Visibility />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div>
          <h2>Edit User</h2>
          <form onSubmit={handleSave}>
            <TextField label="First Name" name="first_name" defaultValue={selectedUser?.first_name} required />
            <br /><br />
            <TextField label="Last Name" name="last_name" defaultValue={selectedUser?.last_name} required />
            <br /><br />
            <TextField label="Date of Birth" name="dob" defaultValue={selectedUser?.dob} required />
<br /><br />
<TextField label="Gender" name="gender" defaultValue={selectedUser?.gender} required />
<br /><br />
<TextField label="Email" name="email" defaultValue={selectedUser?.email} required />
<br /><br />
<TextField label="Bio" name="bio" defaultValue={selectedUser?.bio} required />
<br /><br />
<TextField label="Address" name="address" defaultValue={selectedUser?.address} required />
<br /><br />
<TextField label="Country" name="country" defaultValue={selectedUser?.country} required />
<br /><br />
<input type="checkbox" name="isActive" defaultChecked={selectedUser?.isActive} />
<label htmlFor="isActive">Active</label>
<br /><br />
<Button variant="contained" color="primary" type="submit">
Save
</Button>
</form>
</div>
</Modal>
</TableContainer>
</>
);
};

export default UserTable;









