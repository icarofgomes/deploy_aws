const app = require('./app');

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Hello World!' });
});

app.listen(3033, () => console.log('server running on port 3033'));
