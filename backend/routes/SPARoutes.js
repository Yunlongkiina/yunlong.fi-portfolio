const express = require("express");
const router = express.Router();
const axios = require('axios');

//************** Production ************************* */
// Token in production Under User: goldencrop13@gmail.com
const odoo15_token = 'access_token_3b4622ca5582d4ef340cca5e84197d1901af6150';
// production URL
const odoo15_url = 'https://goldencrop.fi';

//************** Test ************************* */
// // Token in production Under User: goldencrop13@gmail.com
// const odoo15_token = 'access_token_585c923aa9c53eed56d7845dbef113372ecbe045';
// // production URL
// const odoo15_url = 'https://goldencrop15-stage.sprintit.fi';

router.post('/api/v15/gcappsignin', async (req, res) => {
    try {
      // const token = req.header('access-token');
      const body_data = req.body
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${odoo15_url}/api/v15/gcappsignin`,
        headers: { 
          'Content-Type': 'application/json', 
          'access-token': odoo15_token, 
        },
        data :  JSON.stringify(body_data)
      };
      let response = await axios.request(config)
      res.status(200).send(response.data);

  } catch (error) {
      // console.error(error);
      res.status(500).send('Something went wrong!');
    }
  });

  router.get('/api/v15/deliveryorders/:nsonumber', async (req, res) => {
    try {
      const nsonumber = req.params.nsonumber
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${odoo15_url}/api/v15/deliveryorders/${nsonumber}`,
        headers: {'access-token': odoo15_token}
      };
      let response = await axios.request(config)
      if(response.status === 200){
        response = response.data.data
        res.status(200).send(response);
      }
     
    } catch (error) {
      // console.error(error);
      res.status(500).send('Something went wrong!');
    }
  });

  router.post('/api/v15/deliveryordersspa', async (req, res) => {

    try {
      const body_data = req.body
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${odoo15_url}/api/v15/deliveryordersspa`,
        headers: { 
          'Content-Type': 'application/json', 
          'access-token': odoo15_token, 
        },
        data : JSON.stringify(body_data)
      };
      let response = await axios.request(config)
      res.status(200).send(response.data);
  } catch (error) {
      console.error(error);
      res.status(500).send('Something went wrong!');
    }
  });

  router.get('/api/v15/productsqtylocationhandv', async (req, res) => {
    try {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${odoo15_url}/api/v15/productsqtylocationhandv`,
        headers: {'access-token': odoo15_token}
      };
      let response = await axios.request(config)
      if(response.status === 200){
        response = response.data.data
        res.status(200).send(response);
      }
     
    } catch (error) {
      // console.error(error);
      res.status(500).send('Something went wrong!');
    }
  });

  router.get('/api/v15/productlableinfo/:barcode', async (req, res) => {
    try {
      const productBarcode = req.params.barcode
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${odoo15_url}/api/v15/productlableinfo/${productBarcode}`,
        headers: {'access-token': odoo15_token}
      };
      let response = await axios.request(config)
      if(response.status === 200){
        response = response.data.data
        res.status(200).send(response);
      }
     
    } catch (error) {
      console.error(error);
      res.status(500).send('Something went wrong!');
    }
  });

module.exports = router;