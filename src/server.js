const app = require('./app');

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Hello World 2!' });
});

app.get('/teste', (req, res) => {
  return res.status(200).json({ message: "Teste concluído!"});
})

app.listen(3033, () => console.log('server running on port 3033'));
