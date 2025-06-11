import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/get', (req, res) => {
  res.json({ message: 'Hello World' });
  console.log(res.statusCode);
  
});

app.get('/', (req, res) => {
    res.json({ message: 'Server' });
    console.log(res.statusCode)
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
