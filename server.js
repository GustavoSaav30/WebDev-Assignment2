const connection = require('./config/mongoose');
const app = require('./config/express');
const PORT = 3000;

connection();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});