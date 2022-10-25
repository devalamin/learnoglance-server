const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

const categories = require('./data/details.json');
const courseDetails = require('./data/details.json')


app.use(cors());

app.get('/', (req, res) => {
    res.send('hello World')
})

app.get('/courses', (req, res) => {
    res.send(categories)
})

app.get('/course-details/:id', (req, res) => {
    const id = req.params.id;
    const detailCourse = courseDetails.find(course => course._id === id);
    res.send(detailCourse)
})

app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courseDetails.find(course => course._id === id);
    res.send(selectedCourse)
})

app.listen(port, () => {
    console.log('Server Running On', port);
})