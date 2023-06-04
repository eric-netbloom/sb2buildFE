import {React,useState } from 'react';
import { Grid, TextField} from '@mui/material';
import { BsChatQuoteFill } from "react-icons/bs";
import axios from "axios";
export default function CtaForm() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    await axios.post(process.env.REACT_APP_URL+`/api/email`, {
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    }).then((response)=>{
        if (response.data.msg === 'success'){
            console.log("Message Sent."); 
            document.getElementById('contact-form').reset();
            
        }else if(response.data.msg === 'fail'){
            console.log("Message failed to send.")
        }
    });

  };

  return (
    <div className='component max1000'>
        <form onSubmit={submitHandler} id="contact-form">
            <Grid container spacing={2}>
                <Grid item sm={6} xs={12} className="input_group" >
                    <TextField type="text" required className="form-control" onChange={(e) => setFirstName(e.target.value)} id="first_name" placeholder='First Name' aria-describedby="first_name" />
                </Grid>
                <Grid item sm={6} xs={12} className="input_group" >
                    <TextField type="text" required className="form-control" id="last_name" onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' aria-describedby="last_name" />
                </Grid>
                <Grid item sm={6} xs={12} className="input_group" >
                    <TextField type="email" required className="form-control" id="Email" onChange={(e) => setEmail(e.target.value)} placeholder='Email' aria-describedby="Email" />
                </Grid>
                <Grid item sm={6} xs={12} className="input_group" >
                    <TextField type="text" required className="form-control" id="Phonenumber" onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Phone Number' aria-describedby="Phonenumber" />
                </Grid>
                <Grid item xs={12} className="input_group" >
                    <TextField multiline rows={4} required className='form-control' id='help' placeholder='How can we help you?' onChange={(e) => setMessage(e.target.value)} aria-describedby='help' />
                </Grid>
                <Grid item xs={12} className="input_group" >
                    <button className='redButton btn right'>Submit</button>
                </Grid>
            </Grid>
        </form>
        
        <BsChatQuoteFill className='bg tr'/>
    </div>
    
  );
}