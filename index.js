const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors()); 
// Connect to MongoDB (replace 'your-database-uri' with your MongoDB connection string)
mongoose.connect('mongodb://127.0.0.1:27017/assignment');

// Define MongoDB schema and model
const universitySchema = new mongoose.Schema({
  university: [
    {
      name: String,
      country:String,
      domains: [String],
      alpha_two_code: String,
      web_pages: [String],
      
    },
  ],
});

const University = mongoose.model('University', universitySchema);

// API to save country name and data of universities in the database
app.post('/api/save', async (req, res) => {
  try {
    const { universities} = req.body;
    universities.map(async (university)=>{
      await University.create({university});

    })
    res.json(savedData);
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to retrieve data of universities based on country name
app.get('/api/retrieve/:country', async (req, res) => {
  try {
    const { country } = req.params;
    const data = await University.findOne({ country });
    res.json(data || {});
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to retrieve data of universities based on country name and uni name


app.get('/api/retrieveByUni/:country/:name', async (req, res) => {
  try {
    const { country , name} = req.params;
    const data = await University.findOne({'university.name':name, 'university.country':country});
    res.json(data || {});
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// API to update the data of a university based on country name and university ID
app.put('/api/update/:country/:universityId', async (req, res) => {
  try {
    const { country, universityId } = req.params;
    const updateData = req.body;
    const updatedUniversity = await University.findOneAndUpdate(
      { country, 'universities._id': universityId },
      { $set: { 'universities.$': updateData } },
      { new: true }
    );
    res.json(updatedUniversity || {});
  } catch (error) {
    console.error('Error updating data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
