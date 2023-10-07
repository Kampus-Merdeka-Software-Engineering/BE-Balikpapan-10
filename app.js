require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
// const PORT = process.env.PORT || 3000;
const PORT = 5501;
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use((req, res, next) =>{
    console.log(`Method: ${req.method} ${req.path}`);
    next();
})

// router.get('/', (req, res) => {
//     res.send('OK')
// })

// app.use(router);

routes.forEach((route) => app.use(route));

app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`);
})