const express = require('express');
const app = express();

// DOOMSECURE TEST: Hardcoded Secrets
const AWS_KEY = "AKIAIMVP9EXAMPLE-DO-NOT-USE";
const DB_URL = "mongodb+srv://admin:P4ssw0rd123@cluster.mongodb.net";

app.get('/', (req, res) => {
  res.send('<h1>DoomSecure Test Lab</h1>');
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
