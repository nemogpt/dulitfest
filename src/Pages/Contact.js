import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';


function Contact() {
    const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(-70.9);
const [lat, setLat] = useState(42.35);
const [zoom, setZoom] = useState(9);
 
useEffect(() => {
if (map.current) return; // initialize map only once
map.current = new mapboxgl.Map({
container: mapContainer.current,
style: 'mapbox://styles/mapbox/streets-v12',
center: [lng, lat],
zoom: zoom
});
 
map.current.on('move', () => {
setLng(map.current.getCenter().lng.toFixed(4));
setLat(map.current.getCenter().lat.toFixed(4));
setZoom(map.current.getZoom().toFixed(2));
});
});

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institute:'',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use your Email.js template ID, user ID, and service ID
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,

      message: formData.message +formData.institute ,
    };

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      templateParams,
      'YOUR_USER_ID'
    )
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <section className="get-in-touch">
      <h1 className="title">Get in touch</h1>
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
          <input className="submit-btn" type="submit" value="Send Message" />
        </div>
      </form>
      <div>
</div>
    </section>
  );
}

export default Contact;
