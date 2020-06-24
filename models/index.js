const mogoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/messanger", {
  keepAlive: true,
  useMongoClient: true,
});
