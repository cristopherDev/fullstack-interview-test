const server = require('./server');

const PORT = 3000;
const serverStart = () => console.log(`Server start on port: ${PORT}`);
const serverError = (error) => console.log(`Server error: ${error}`);

server.listen(PORT, (error) => error ? serverError(error) : serverStart());
