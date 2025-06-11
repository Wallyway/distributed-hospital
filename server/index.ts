import express from 'express';
import { env } from 'node:process';

const app = express();
const port= env.PORT;

app.get('/get', (req, res) => {
  res.json({ message: 'Hello World' });
  console.log(res.statusCode);
});

app.get('/', (req, res) => {
  res.json({ message: 'Server' });
  console.log(res.statusCode);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
