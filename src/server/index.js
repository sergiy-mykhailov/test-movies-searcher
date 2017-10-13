
import restify from 'restify';

import config from './config/index';
import routes from './routes/index';
import * as db from './db/index';

//**** Initialize Server ****
const server = restify.createServer({
    name: config.name,
    version: config.version,
});

//**** Middleware ****
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.authorizationParser());
server.use(restify.plugins.dateParser());
server.use(restify.plugins.queryParser());
server.use(restify.plugins.jsonp());
server.use(restify.plugins.bodyParser());

// static
server.get(/\/?.*/, restify.plugins.serveStatic({
    directory: './build/public',
    default: 'index.html'
}));

//**** Routes ****
routes(server);

//**** Start Server, Connect to DB ****
server.listen(config.port, () => {

    // establish connection to mongodb
    const database = db.connect();

    database.on('error', (err) => {
        console.error(err);
        process.exit(1);
    });

    database.once('open', () => {
        console.log(`Server is listening on port ${config.port}`);
    });
});
