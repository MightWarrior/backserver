const config = require('config');
const App = require("core/App");
const Server = require("core/Server");
const {connect} = require('lib/sequelize');



let RunApp = async () => {
  await App.init();
  connect();
  const server = new Server(App);
  await server.start(config.appPort);
};

RunApp();