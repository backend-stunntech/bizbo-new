
import * as express from "express";
import * as dotenv from 'dotenv';

import * as path from 'path';
import setRoutes from './routes';


import {BusinessInfoCtrl} from './businessreport';


const app = express();
dotenv.load({ path: '.env' });
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

setRoutes(app);

    app.get('/*', function(req, res) {
      res.sendFile(path.join(__dirname, '../public/index.html'));
    });


      app.listen(app.get('port'), () => console.log(`Bizbo listening on port ${app.get('port')}`));
