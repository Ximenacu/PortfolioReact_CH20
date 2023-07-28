import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import React, { useState } from 'react';



export default function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [showNameError, setShowNameError] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleBlurName = () => {
        if (name.trim() === '') {
          setShowNameError(true);
        } else {
          setShowNameError(false);
        }
    };

    const handleBlurEmail = () => {
        if (email.trim() === '') {
          setShowEmailError(true);
        } else {
          setShowEmailError(false);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setIsValidEmail(validateEmail(e.target.value));
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValidEmail){
            alert('Invalid email address!');
        }
    };

    return (

        <div className="body flex align" style={{flexDirection: "column"}}>
            <h1>Contact me!</h1>
            <p style={{marginRight: "7%"}} >Leave your name, email and message here and I will get in contact.</p>
            <form className="form" onSubmit={handleSubmit}>
                <div className='sect' >
                    <label>Name</label>
                    <input class="form-control" 
                    placeholder="Your name here..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={handleBlurName}/>
                    {showNameError && <div className="error" style={{textAlign: "center"}}>Oops! Your name is required...</div>}

                </div>
                <div className='sect' >
                    <label>Email address</label>
                    <input class="form-control" 
                    type="email" 
                    placeholder="Enter your email..."
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={handleBlurEmail}/>
                    {showEmailError && <div className="error" style={{textAlign: "center"}}>Oops! Your email is required...</div>}
                    {!isValidEmail && <div className="error" style={{textAlign: "center"}}>Invalid email address!</div>}
                </div>
                <div className='sect' >
                    <label >Message</label>
                    <input style={{height:"15vh"}} type="text" class="form-control" placeholder="Leave your message here..."/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            
        </div>
      

    );
  }