const dotenv = require('dotenv');
const { log } = console;

dotenv.config({ path: './config.env' });
const app = require('./app');


const port = process.env.PORT || 3500;
const server = app.listen(port, () => {
  log(`App running on port ${port}...`);
});

