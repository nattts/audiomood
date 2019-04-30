const app = require('app');

require('dotenv').config();

const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`running on http://127.0.0.1:${ port }/`));

