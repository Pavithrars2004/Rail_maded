const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

// Initialize the app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage });

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/complaints', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define the complaint schema and model
const complaintSchema = new mongoose.Schema({
    mobileNumber: { type: String, required: true },
    pnrNumber: { type: String, required: true },
    complaintType: { type: String, required: true },
    incidentDate: { type: Date, required: true },
    description: { type: String },
    image: { type: String },
});

const Complaint = mongoose.model('Complaint', complaintSchema);

// API route to handle complaint submissions
app.post('/api/submit-complaint', upload.single('image'), async (req, res) => {
    try {
        const { mobileNumber, pnrNumber, complaintType, incidentDate, description } = req.body;

        // Create a new complaint object
        const newComplaint = new Complaint({
            mobileNumber,
            pnrNumber,
            complaintType,
            incidentDate,
            description,
            image: req.file ? req.file.filename : null,
        });

        // Save the complaint to the database
        const savedComplaint = await newComplaint.save();

        // Generate a reference ID
        const referenceId = savedComplaint._id;

        // Respond with the reference ID
        res.json({ referenceId });
    } catch (error) {
        console.error('Error saving complaint:', error);
        res.status(500).json({ message: 'Error saving complaint' });
    }
});

// Serve static files (for example, uploaded images)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
