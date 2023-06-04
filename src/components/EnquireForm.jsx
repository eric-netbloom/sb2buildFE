import {React } from 'react';
import { Grid, TextField} from '@mui/material';
// import axios from "axios";
export default function EnquireForm() {

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState("");
  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   const { data } = await axios.post(`/api/email`, {
  //     firstName,
  //     lastName,
  //     email,
  //     phoneNumber,
  //     message,
  //   });
  // };
  
  return (
    <div className='component max1000'>
        {/* <form onSubmit={submitHandler} >
            <Grid container spacing={2}>
                <Grid item xs={12} className="input_group" >
                    <TextField type="text" required className="form-control" onChange={(e) => setFirstName(e.target.value)} id="first_name" placeholder='First Name' aria-describedby="first_name" />
                </Grid>
                <Grid item xs={12} className="input_group" >
                    <TextField type="text" required className="form-control" id="last_name" onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' aria-describedby="last_name" />
                </Grid>
                <Grid item xs={12} className="input_group" >
                    <TextField type="email" required className="form-control" id="Email" onChange={(e) => setEmail(e.target.value)} placeholder='Email' aria-describedby="Email" />
                </Grid>
                <Grid item xs={12} className="input_group" >
                    <TextField type="text" required className="form-control" id="Phonenumber" onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Phone Number' aria-describedby="Phonenumber" />
                </Grid>
                <Grid item xs={12} className="input_group" >
                    <TextField multiline rows={4} required className='form-control' id='help' placeholder='How can we help you?' onChange={(e) => setMessage(e.target.value)} aria-describedby='help' />
                </Grid>
                <Grid item xs={12} className="input_group" >
                    <button className='redButton btn right'>Submit</button>
                </Grid>
            </Grid>
        </form> */}
        <form >
            <Grid container spacing={1}>
                <Grid item xs={12} className="input_group">
                    <TextField type="text" fullWidth required className="form-control" id="first_name" placeholder='First Name' aria-describedby="first_name" />
                </Grid>
                <Grid item xs={12} className="input_group" >
                    <TextField type="text" fullWidth required className="form-control" id="last_name" placeholder='Last Name' aria-describedby="last_name" />
                </Grid>
                <Grid item xs={12} className="input_group" >
                    <TextField type="email" fullWidth required className="form-control" id="Email" placeholder='Email' aria-describedby="Email" />
                </Grid>
                <Grid item xs={12} className="input_group" >
                    <TextField type="text" fullWidth required className="form-control" id="Phonenumber" placeholder='Phone Number' aria-describedby="Phonenumber" />
                </Grid>
                <Grid item xs={12} className="input_group" >
                    <TextField multiline rows={4} fullWidth required className='form-control' id='help' placeholder='How can we help you?' aria-describedby='help' />
                </Grid>
                <Grid item xs={12} className="input_group" >
                    <button className='redButton btn right'>Submit</button>
                </Grid>
            </Grid>
        </form>
    </div>
    
  );
}