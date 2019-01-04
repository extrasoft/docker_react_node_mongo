const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const url = `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:27017`;
console.log(url);

const app = express();
app.use((req, resp, next) => {
	// Website
	resp.setHeader('Access-Control-Allow-Origin','*');

	// Request Method
	resp.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');

	// Request Header
	resp.setHeader('Access-Control-Allow-Header','X-Requested-With, Content-type');

	next();
});

app.get("/api/products", (req, resp) => { 
	MongoClient.connect(
		url,
		(err, client) => {
			if (err) throw err;
			console.log("Database connected!");
            
			const db = client.db("shoppers");
			db.collection("products")
				.find()
				.toArray((err, result) => {
					if (err) throw err;
						resp.status(200).send(result);
						client.close();
				});
		}
	);
});

app.listen(8000, () => {
	console.log("Server listening on port 8000");
});

//docker run --name mynodejsapp2 -p 3001:3000 -v /usr/app/node_modules -v /Users/user/learning/application/nodejs:/usr/app -e DATABASE_USER=admin -e DATABASE_PASSWORD=1111 -e DATABASE_HOST=mymongodb2 --network shoppers2 mynodejsapp:2.0