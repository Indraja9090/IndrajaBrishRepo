//aadharProfile.js
import React from 'react';
import '../App.css'

function AadharProfile({ name, aadharNumber, dob, gender }) {
  return (
    <div className="aadhar-card">
      <h2>Aadhaar Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Aadhaar Number:</strong> {aadharNumber}</p>
      <p><strong>Date of Birth:</strong> {dob}</p>
      <p><strong>Gender:</strong> {gender}</p>
    </div>
  );
}

export default AadharProfile;