


// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());
// //mongodb+srv://akhtarumar11223:<db_password>@cluster0.yo3vg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// // MongoDB connection string (ensure this is kept secure)
// const MONGODB_URI = 'mongodb+srv://akhtarumar11223:11december2004@cluster0.yo3vg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log('MongoDB connection error:', err));

// const userSchema = new mongoose.Schema({
//   email: String,
//   password: String,
// });

// const User = mongoose.model('User', userSchema);

// // Register Route (mapped to /Pages/Register)
// app.post('/Pages/Register', async (req, res) => {
//   const { email, password } = req.body;

//   const hashedPassword = await bcrypt.hash(password, 10);
//   const newUser = new User({ email, password: hashedPassword });

//   await newUser.save();
//   res.status(201).json({ message: 'User Registered' });
// });

// // Login Route (mapped to /Pages/Login)
// app.post('/Pages/Login', async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });
//   if (!user) return res.status(400).json({ message: 'User not found' });

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

//   const token = jwt.sign({ userId: user._id }, 'secret_key');
//   res.json({ token });
// });

// // Route to get all users (Show data in MongoDB)
// app.get('/Pages/users', async (req, res) => {
//   try {
//     const users = await User.find(); // Fetch all users from the database
//     res.status(200).json(users); // Send the users data in the response
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching users', error: err });
//   }
// });

// app.listen(3000, () => console.log('Server running on port 3000'));





// require('dotenv').config();  // Load environment variables from .env file

// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Use the MONGODB_URI from the .env file
// const MONGODB_URI = process.env.MONGODB_URI;

// mongoose.connect(MONGODB_URI)
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log('MongoDB connection error:', err));

// const userSchema = new mongoose.Schema({
//   email: String,
//   password: String,
// });

// const User = mongoose.model('User', userSchema);

// app.post('/Pages/Register', async (req, res) => {
//   const { email, password } = req.body;

//   const hashedPassword = await bcrypt.hash(password, 10);
//   const newUser = new User({ email, password: hashedPassword });

//   await newUser.save();
//   res.status(201).json({ message: 'User Registered' });
// });

// app.post('/Pages/Login', async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });
//   if (!user) return res.status(400).json({ message: 'User not found' });

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

//   const token = jwt.sign({ userId: user._id }, 'secret_key');
//   res.json({ token });
// });

// app.get('/Pages/users', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching users', error: err });
//   }
// });

// app.listen(3000, () => console.log('Server running on port 3000'));



require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use the MONGODB_URI from the .env file
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/Pages/Register', async (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ email, password: hashedPassword });

  await newUser.save();
  res.status(201).json({ message: 'User Registered' });
});

app.post('/Pages/Login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'User not found' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ userId: user._id }, 'secret_key');
  res.json({ token });
});

app.get('/Pages/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users', error: err });
  }
});

// Export the app as a Vercel handler for serverless functions
module.exports = app;
