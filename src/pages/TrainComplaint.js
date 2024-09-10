import axios from 'axios';
import React, { useState } from 'react';
import './TrainComplaint.css'; // Ensure this is the same CSS file as used for PlatformComplaint

const TrainComplaint = () => {
    const [formData, setFormData] = useState({
        mobileNumber: '',
        trainNumber: '',
        compartmentName: '',
        complaintType: '',
        incidentDate: '',
        description: '',
        image: null,
        subtype: '',
        additionalInfo: ''
    });

    const [showSubtypes, setShowSubtypes] = useState(false);
    const [subtypes, setSubtypes] = useState([]);

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

    const handleComplaintTypeChange = (e) => {
        const complaintType = e.target.value;
        setFormData({
            ...formData,
            complaintType,
            subtype: '',
            additionalInfo: ''
        });

        // Dynamically set subtypes based on complaint type
        if (complaintType === 'Security') {
            setSubtypes([
                'Eve-Teasing', 'Misbehavior with lady passengers', 'Rape', 'Theft of Passengers Belongings',
                'Snatching', 'Nuisance by Hawkers', 'Hooliganism', 'Smoking/Alcohol', 'Dacoity/Robbery',
                'Others', 'Passengers Fallen down'
            ]);
        } else if (complaintType === 'Women_Needs' || complaintType === 'Divyangyan_Facilities') {
            setSubtypes([
                'Ramp at Entry/Exit gates', 'Tactile Pathway', 'Parking', 'Wheelchair facilities', 'Others'
            ]);
        } else if (complaintType === 'UnReserved_Ticketing') {
            setSubtypes([
                'Digital Payment', 'Overcharging', 'ATVM', 'Inadequate Counters', 'Others'
            ]);
        } else if (complaintType === 'Luggage_Parcels') {
            setSubtypes([
                'Booking', 'Delivery', 'Overcharging', 'Staff not available', 'Others'
            ]);
        } else if (complaintType === 'Reserved_Ticketing') {
            setSubtypes([
                'E-ticketing', 'Tatkal', 'Overcharging', 'Inadequate counters', 'Others'
            ]);
        } else if (complaintType === 'Passenger_Ammenities') {
            setSubtypes([
                'Parking', 'Public Announcement System', 'Foot over bridge', '139', 'Others'
            ]);
        } else if (complaintType === 'Electrical_Equipemt') {
            setSubtypes([
                'Air Conditioner', 'Fans/Lights', 'Charging Points', 'Display/Couch Indicator Board', 'Others'
            ]);
        } else {
            setShowSubtypes(false);
        }

        if (complaintType === 'Security' || complaintType === 'Women_Needs' || complaintType === 'Divyangyan_Facilities') {
            setShowSubtypes(true);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach((key) => data.append(key, formData[key]));

        try {
            const response = await axios.post('http://localhost:5000/api/submit-complaint', data);
            alert(`Complaint Submitted! Reference ID: ${response.data.referenceId}`);
            setFormData({
                mobileNumber: '',
                trainNumber: '',
                compartmentName: '',
                complaintType: '',
                incidentDate: '',
                description: '',
                image: null,
                subtype: '',
                additionalInfo: ''
            });
        } catch (error) {
            console.error('Error submitting complaint', error);
            alert('Error submitting complaint');
        }
    };

    return (
        <div className="complaint-container">
            <h1>Submit Your Train Complaint</h1>
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
                    name="trainNumber"
                    placeholder="Train Number"
                    value={formData.trainNumber}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
                <input
                    type="text"
                    name="compartmentName"
                    placeholder="Compartment Name"
                    value={formData.compartmentName}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
                <select
                    name="complaintType"
                    value={formData.complaintType}
                    onChange={handleComplaintTypeChange}
                    required
                    className="form-input"
                >
                    <option value="">Select Complaint Type</option>
                    <option value="Security">Security</option>
                    <option value="Medical_Assistance">Medical Assistance</option>
                    <option value="Women_Needs">Women Needs</option>
                    <option value="UnReserved_Ticketing">UnReserved Ticketing</option>
                    <option value="Luggage_Parcels">Luggage/Parcels</option>
                    <option value="Reserved_Ticketing">Reserved Ticketing</option>
                    <option value="Refund_of_Tickets">Refund of Tickets</option>
                    <option value="Passenger_Ammenities">Passenger Ammenities</option>
                    <option value="Electrical_Equipemt">Electrical Equipemt</option>
                    <option value="Staff_Behaviour">Staff Behaviour</option>
                    <option value="cleanliness">Cleanliness</option>
                    <option value="Catering_Vending_Services">Catering & Vending Services</option>
                    <option value="Water Availability">Water Availability</option>
                    <option value="Goods">Goods</option>
                    <option value="corruption_Bribery">Corruption / Bribery</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                </select>

                {showSubtypes && (
                    <>
                        <select
                            name="subtype"
                            value={formData.subtype}
                            onChange={handleChange}
                            className="form-input"
                        >
                            <option value="">Select Subtype</option>
                            {subtypes.map((subtype, index) => (
                                <option key={index} value={subtype}>{subtype}</option>
                            ))}
                        </select>
                        {formData.complaintType === 'Security' && (
                            <>
                                <label>Did the incident happen before an hour?</label>
                                <input
                                    type="radio"
                                    name="locationFetched"
                                    value="true"
                                    onChange={handleChange}
                                /> Yes
                                <input
                                    type="radio"
                                    name="locationFetched"
                                    value="false"
                                    onChange={handleChange}
                                /> No
                            </>
                        )}
                    </>
                )}

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

export default TrainComplaint;
