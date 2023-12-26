const express = require("express");
const router = express.Router();
const axios = require('axios');

const odoo15_token = 'access_token_585c923aa9c53eed56d7845dbef113372ecbe045';
const odoo15_url = 'https://goldencrop15-stage.sprintit.fi';

router.post('/api/v15/signinrn', async (req, res) => {
    try {
      // const token = req.header('access-token');
      const body_data = req.body
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${odoo15_url}/api/v15/signinrn`,
        headers: { 
          'Content-Type': 'application/json',
          'access-token': odoo15_token, 
        },
        data :  JSON.stringify(body_data)
      };
      let response = await axios.request(config)
      res.status(200).send(response.data);

  } catch (error) {
      console.error(error);
      res.status(500).send('Something went wrong!');
    }
  });

  router.get('/api/v15/orders/:partnerid', async (req, res) => {
    try {
      const partnerId = req.params.partnerid
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${odoo15_url}/api/v15/orders/${partnerId}`,
        headers: {'access-token': odoo15_token}
      };
      let response = await axios.request(config)

      if(response.status === 200){
        response = response.data.data
      }
      res.status(200).send(response);
     
    } catch (error) {
      console.error(error);
      res.status(500).send('Something went wrong!');
    }
  });

  router.post('/api/v15/deliveryorderrn', async (req, res) => {

    try {
      const body_data = req.body
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${odoo15_url}/api/v15/deliveryorderrn`,
        headers: { 
          'Content-Type': 'application/json', 
          'access-token': odoo15_token, 
        },
        data :  JSON.stringify(body_data)
      };
      let response = await axios.request(config)
      res.status(200).send(response.data);
  } catch (error) {
      console.error(error);
      res.status(500).send('Something went wrong!');
    }
  });

  // Get product info by Barcode
  router.get('/api/v15/gcproducts/:barcode', async (req, res) => {
    try {
      const barcode = req.params.barcode
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${odoo15_url}/api/v15/gcproducts/${barcode}`,
        headers: {'access-token': odoo15_token}
      };
      let response = await axios.request(config)

      if(response.status === 200){
        response = response.data.data
      }
      res.status(200).send(response);
    } catch (error) {
      console.error(error);
      res.status(500).send('Something went wrong!');
    }
  });

module.exports = router;