const MongoClient = require("mongoose")

const is_render = process.env.IS_RENDER || false;


const renderURI = "mongodb+srv://theMongoAdmin:accidentalLoginSteps@cluster0.hwmliaf.mongodb.net/lab_example?retryWrites=true&w=majority"

const localURI = "mongodb://localhost/lab_example?authSource=admin&retryWrites=true" 

if (is_render) {
	var database = new MongoClient(renderURI, {useNewUrlParser: true, useUnifiedTopology: true});
}
else {
	var database = new MongoClient(localURI, {useNewUrlParser: true, useUnifiedTopology: true});
}

module.exports = database;
		