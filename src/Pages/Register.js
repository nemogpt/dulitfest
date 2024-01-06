import React, { useState } from 'react'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        institute:'',
        phone: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
        console.log(formData)
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
            const {name,
            email,
            institute,
            phone}=formData;
            
            const res= await fetch("https://dulitfest-63556-default-rtdb.firebaseio.com/userDatabase.json",
           { method:"POST",
            headers:{
                "Content-Type":"application/json",

            },
            body:JSON.stringify({name,
            email,
            institute,
            phone})
        }
            
            );
            if(res){
                setFormData({
                    name: '',
        email: '',
        institute:'',
        phone: '',

                })
                alert("Registration Completed.");
            }
            else{
                alert("Please register after sometimes.")
            }
          
        }    
      return (
        <section className="get-in-touch">
          <h1 className="title">Register for Event</h1>
          <form className="contact-form row" onSubmit={handleSubmit}>
            <div className="form-field col x-50">
              <input
                id="name"
                className="input-text js-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label className="label" htmlFor="name">Name</label>
            </div>
            <div className="form-field col x-50">
              <input
                id="email"
                className="input-text js-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label className="label" htmlFor="email">E-mail</label>
            </div>
            <div className="form-field col x-100">
              <input
                id="institute"
                className="input-text js-input"
                type="text"
                name="institute"
                value={formData.institute}
                onChange={handleChange}
                required
              />
              <label className="label" htmlFor="email">Institution</label>
            </div>
            <div className="form-field col x-100">
              <input
                id="message"
                className="input-text js-input"
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              
              <label className="label" htmlFor="message">Message</label>
            </div>
            <div className="form-field col x-100 align-center">
              <input className="submit-btn" type="submit" value="Register" />
            </div>
          </form>
          <div>
    </div>
        </section>
  )
}

export default Register