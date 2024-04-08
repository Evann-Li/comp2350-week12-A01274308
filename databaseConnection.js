const database = require("mongoose")

const is_render = process.env.IS_RENDER || false;


const renderURI = "mongodb+srv://theMongoAdmin:accidentalLoginSteps@cluster0.hwmliaf.mongodb.net/lab_example?retryWrites=true&w=majority"

const localURI = "mongodb://localhost/lab_example?authSource=admin&retryWrites=true" 

if (is_render) {
	database.connect(renderURI, {useNewUrlParser: true, useUnifiedTopology: true});
}
else {
	database.connect(localURI, {useNewUrlParser: true, useUnifiedTopology: true});
}

module.exports = database;
		