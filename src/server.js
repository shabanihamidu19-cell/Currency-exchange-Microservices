const express = require('express');
const convertRoute = require('./routes/convert');
const app = express();

app.use(express.json());

// Routes
app.use('/convert', convertRoute);

// Custom error handler for JSON parse errors
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ error: 'Invalid JSON payload' });
  }
  next();
});

app.listen(5000, () => console.log('Currency service running on port 5000'));
