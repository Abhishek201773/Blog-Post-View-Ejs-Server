import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';

const app = express();
const port = 3000;
let array = [];

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/view', (req, res) => {
    res.render('view', { posts: array }); 
});

app.get('/post', (req, res) => {
    res.render('post.ejs');
});

app.post('/posting', (req, res) => {
    const title = req.body["Title"];
    const post = req.body["Post"];
    const data = {
        title: title,
        post: post,
    };
    array.push(data); 
    res.redirect('/view');
});
