import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


import * as db from './utils/DataBaseUtils.js';

db.setUpConnection();

const app = express();


app.use(bodyParser.json());

app.use(cors({ origin: '*' }));

app.get('/recipes', (req, res) => {
	db.listRecipes().then(data => res.send(data));
});
app.post('/recipes', (req, res) => {
	db.createRecipe(req.body).then(data => res.send(data));
});
app.delete('/recipes/:id', (req, res) => {
	db.deleteRecipe(req.params.id).then(data => res.send(data));

});


const server = app.listen(8080, () => {
	console.log('Server started on port: 8080');
})

