import * as express from 'express';
import BusinessInfoCtrl from './businessreport'


export default function setRoutes(app) {

  const router = express.Router();

  
 
  
  router.route('/report-business-info').post(BusinessInfoCtrl.insert);
  
  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
