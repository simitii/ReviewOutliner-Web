
const http = require('http');
const express = require('express');
const app = express();

// create servers
const httpServer = http.createServer(app);

app.use(express.json());

app.use('/search', (req, res) => {
	if(req.method != "POST"){
		res.status(400).send("request method must be: POST");
		return;
	}
	if(!req.is('application/json')){
		res.status(400).send("content-type must be: application/json");
		return;
	}
	const query = req.body.query;
	if(typeof query !== 'string' && !(query instanceof String)){
		res.status(400).send("query must be string");
		return;
	}
	const page = req.body.page || 1;
	if(!Number.isInteger(page) || page<1){
		res.status(400).send("page must be integer >= 1");
		return;
    }
    res.send([
        {
          "id": "B072C4KCQH",
          "name": "Echo Buttons (2 Buttons Per Pack)",
          "image_url": "https://images-na.ssl-images-amazon.com/images/I/61GquaDrMWL._SY355_.jpg",
          "product_url":"https://www.amazon.com/Echo-Buttons-2-Pack/dp/B072C4KCQH",
          "short_description": "cool",
          "category_path": "./review/review2/review3",
          "price": -1,
          "score": -1,
          "positive_arguments": ["positive","poive"],
          "negative_arguments": ["negative", "ga"],
          "neutral_arguments": ["neutral","tra"]
        },
        {
          "id": "B072C4KCQH",
          "name": "adem",
          "image_url": "https://images-na.ssl-images-amazon.com/images/I/61GquaDrMWL._SY355_.jpg",
          "product_url":"https://www.amazon.com/Echo-Buttons-2-Pack/dp/B072C4KCQH",
          "short_description": "cool",
          "category_path": "./review/review2/review3",
          "price": -1,
          "score": -1,
          "positive_arguments": ["positive","poive"],
          "negative_arguments": ["negative", "ga"],
          "neutral_arguments": ["neutral","tra"]
        }
      ]);
});

app.use('/get_product', (req, res) => {
	if(req.method != "POST"){
		res.status(400).send("request method must be: POST");
		return;
	}
	if(!req.is('application/json')){
		res.status(400).send("content-type must be: application/json");
		return;
	}
	const product_id = req.body.product_id;
	if(typeof product_id !== 'string' && !(product_id instanceof String)){
		res.status(400).send("product_id must be string");
		return;
	}
	if(product_id != "B072C4KCQH"){
		res.sendStatus(404);
	}else {
		res.send({
			"id": "B072C4KCQH",
			"name": "Echo Buttons (2 Buttons Per Pack)",
			"image_url": "https://images-na.ssl-images-amazon.com/images/I/61GquaDrMWL._SY355_.jpg",
			"product_url":"https://www.amazon.com/Echo-Buttons-2-Pack/dp/B072C4KCQH",
			"short_description": "cool",
			"category_path": "./review/review2/review3",
			"price": -1,
			"score": -1,
			"positive_arguments": ["positive","poive"],
			"negative_arguments": ["negative", "ga"],
			"neutral_arguments": ["neutral","tra"]
		  });
	}
});

app.post('/post_comment', (req, res) => {
	if(req.method != "POST"){
		res.status(400).send("request method must be: POST");
		return;
	}
	if(!req.is('application/json')){
		res.status(400).send("content-type must be: application/json");
		return;
	}
	console.log("WARNING: post_comment without multiple comment prevention");
	const comment = req.body.comment;
	if(!comment){
		res.sendStatus(400); // Bad Request
		return;
	}{
		//rabbitmq.send_json_message("user_comment_received", comment);
		res.sendStatus(200); // OK
		return;
	}
});

app.use('/help', (req, res) => {
	if(req.method != "GET"){
		res.status(400).send("request method must be: GET");
		return;
	}
	res.send([
			{
				"url": "/api/data/search",
				"request": {
					"type": "POST",
					"content-type": "application/json",
					"parameters": [
						{
							"name": "query",
							"type": "string"
						},
						{
							"name": "page",
							"type": "integer"
						}
					],
				},
				"response": {
					"content-type": "application/json",
                    "content": "product[]"
				}
			},
			{
				"url": "/api/data/get_product",
				"request": {
					"type": "POST",
					"content-type": "application/json",
					"parameters": [
						{
							"name": "product_id",
							"type": "string"
						}
					]
				},
				"response": {
					"content-type": "application/json",
                    "content": "product"
				}
			}
		]);
});

app.use('/', (req, res) => {
	res.sendStatus(404);
});

const port = process.env.PORT || 3001;

// start servers
httpServer.listen(port, () => {
	console.log('TEST-API: Server listening on port ' + port);
});
