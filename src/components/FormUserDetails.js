import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const FormUserDetails = (values, handleChange) => {
  let History = useHistory();
  const [user, setUser] = useState({
    name: '',
    email: '',
    rollno: ''
  });
  const { name, rollno, email } = user;

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const onsubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:4000/students/create-student', user);
    History.push('/');
  }
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter User Details" />
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              onChange={e => onInputChange(e)}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastName')}
              onChange={e => onInputChange(e)}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={handleChange('email')}
              onChange={e => onInputChange(e)}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }


export default FormUserDetails;
