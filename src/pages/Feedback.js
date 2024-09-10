import React, { useState } from 'react';
import './Feedback.css'; // Add styling in this file

const Feedback = () => {
    const [feedbackType, setFeedbackType] = useState('');
    const [additionalFeedback, setAdditionalFeedback] = useState('');
    const [trainOrPlatform, setTrainOrPlatform] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ feedbackType, additionalFeedback, trainOrPlatform, rating });
    };

    return (
        <div className="feedback-container">
            <header className="feedback-header">
                <h1>Provide Your Feedback</h1>
                <p>Help us improve the railway experience by sharing your thoughts.</p>
            </header>

            <form className="feedback-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="feedback-type">Type of Feedback:</label>
                    <select
                        id="feedback-type"
                        value={feedbackType}
                        onChange={(e) => setFeedbackType(e.target.value)}
                        required
                    >
                        <option value="">Select Feedback Type</option>
                        <option value="Service">Service</option>
                        <option value="Cleanliness">Cleanliness</option>
                        <option value="Staff Behavior">Staff Behavior</option>
                        <option value="Facilities">Facilities</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="additional-feedback">Additional Feedback:</label>
                    <textarea
                        id="additional-feedback"
                        value={additionalFeedback}
                        onChange={(e) => setAdditionalFeedback(e.target.value)}
                        placeholder="Type your feedback here..."
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="train-or-platform">Train Number or Platform Number:</label>
                    <select
                        id="train-or-platform"
                        value={trainOrPlatform}
                        onChange={(e) => setTrainOrPlatform(e.target.value)}
                        required
                    >
                        <option value="">Select Train or Platform</option>
                        <option value="Train Number">Train Number</option>
                        <option value="Platform Number">Platform Number</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Enter number here..."
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="rating">Rating:</label>
                    <select
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        required
                    >
                        <option value="">Select Rating</option>
                        <option value="1">1 - Poor</option>
                        <option value="2">2 - Fair</option>
                        <option value="3">3 - Good</option>
                        <option value="4">4 - Very Good</option>
                        <option value="5">5 - Excellent</option>
                    </select>
                </div>

                <button type="submit" className="submit-button">Submit Feedback</button>
            </form>
        </div>
    );
};

export default Feedback;
