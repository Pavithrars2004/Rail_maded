import axios from 'axios';
import React, { useState } from 'react';
import './PlatformComplaint.css';

const PlatformComplaint = () => {
    const [formData, setFormData] = useState({
        mobileNumber: '',
        pnrNumber: '',
        complaintType: '',
        incidentDate: '',
        description: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('mobileNumber', formData.mobileNumber);
        data.append('pnrNumber', formData.pnrNumber);
        data.append('complaintType', formData.complaintType);
        data.append('incidentDate', formData.incidentDate);
        data.append('description', formData.description);
        data.append('image', formData.image);

        try {
            const response = await axios.post('http://localhost:5000/api/submit-complaint', data);
            alert(`Complaint Submitted! Reference ID: ${response.data.referenceId}`);
            setFormData({
                mobileNumber: '',
                pnrNumber: '',
                complaintType: '',
                incidentDate: '',
                description: '',
                image: null
            });
        } catch (error) {
            console.error('Error submitting complaint', error);
            alert('Error submitting complaint');
        }
    };

    return (
        <div className="complaint-container">
            <h1>Submit Your Complaint</h1>
            <form onSubmit={handleSubmit} className="complaint-form">
                <input
                    type="text"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
                <input
                    type="text"
                    name="pnrNumber"
                    placeholder="PNR Number"
                    value={formData.pnrNumber}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
                <select
                    name="complaintType"
                    value={formData.complaintType}
                    onChange={handleChange}
                    required
                    className="form-input"
                >
                    <option value="">Select Complaint Type</option>
                    <option value="Security">Security</option>
                    <option value="Medical_Assistance">Medical Assistance</option>
                    <option value="Medical_Assistance">Divyangyan Facilities</option>
                    <option value="Women_Needs">Women Needs</option>
                    <option value="UnReserved_Ticketing">UnReserved Ticketing</option>
                    <option value="Luggage_Parcels">Luggage/Parcels</option>
                    <option value="Reserved_Ticketing">Reserved Ticketing</option>
                    <option value="Refund_of_Tickets">Refund of Tickets</option>
                    <option value="Passenger_Ammenities">Passenger Ammenities</option>
                    <option value="Electrical_Equipemt">Electrical Equipemt</option>
                    <option value="Staff_Behaviour">Staff Behaviour</option>
                    <option value="cleanliness">cleanliness</option>
                    <option value="rCatering_&_Vending_Services">Catering & Vending Services</option>
                    <option value="Water Availability">Water Availability</option>
                    <option value="Goods">Goods</option>
                    <option value="corruption_Bribery">corruption / Bribery</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                </select>
                <input
                    type="date"
                    name="incidentDate"
                    value={formData.incidentDate}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="form-textarea"
                ></textarea>
                <input
                    type="file"
                    name="image"
                    onChange={handleFileChange}
                    className="form-input"
                />
                <button type="submit" className="submit-button">Submit Complaint</button>
            </form>
        </div>
    );
};

export default PlatformComplaint;
