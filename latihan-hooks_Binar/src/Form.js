import React, { useState } from 'react'
import './App.css'


function Form() {
    const [values, setvalues] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const [submitted, SetSubmitted]= useState(false)

    const [valid, setValid]  = useState(false)

    const handleFirstNameInputChange = (event) => {
        setvalues({...values, firstName: event.target.value})
    };

    const handleLastNameInputChange = (event) => {
        setvalues({...values, lastName: event.target.value})
    };

    const handleEmailInputChange = (event) => {
        setvalues({...values, email: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault ();
        if (values.firstName && values.lastName && values.email) {
            setValid(true);
        }
        SetSubmitted(true)
    }

  return (
    <div className='container p-5 border margin-top'>
        <form onSubmit={handleSubmit}>
            {submitted && valid ? <div className="alert alert-success" role="alert">Success! Thank you for Registerering</div> : null }
            <div className="mb-3">
                <input 
                    onChange={handleFirstNameInputChange}
                    value={values.firstName}
                    type="text" 
                    class="form-control" 
                    placeholder="First name" 
                    aria-label="First name"/>
                {submitted && !values.firstName ? <span className='text-danger'>Please enter a first name</span> : null }
            </div>
            <div className="mb-3">
                <input 
                    onChange={handleLastNameInputChange}
                    value={values.lastName}
                    type="text" 
                    class="form-control" 
                    placeholder="Last name" 
                    aria-label="Last name"/>
                {submitted && !values.lastName ? <span className='text-danger'>Please enter a last name</span> : null }
            </div>
            <div className="mb-3">
                <input 
                    onChange={handleEmailInputChange}
                    value={values.email}
                    type="email" 
                    name ="email" 
                    placeholder="Email" 
                    class="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" />
                {submitted && !values.email ? <span className='text-danger'>Please enter an email address</span> : null } 
            </div>
            <div className='mb-3'>
                <button type="submit" className="btn btn-success w-100">Register</button>
            </div>
        </form>
    </div>
  )
}

export default Form