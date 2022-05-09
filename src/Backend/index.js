const app = require('./config/express');
const port = app.get('port');

app.listen(port, ()=> {
    console.log(`aplicação rodando em http://localhost:${port}`);
});