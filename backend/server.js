const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 3001; //Line 3
const axios = require('axios');
var bodyParser = require("body-parser");
const androidAppRoutes = require('./routes/androidAppRoutes');
const SPARoutes = require('./routes/SPARoutes');

var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(androidAppRoutes);
app.use(SPARoutes);

// Production URL
  // var allowedOrigins = ['http://94.237.119.161:3000','http://94.237.119.161','http://94.237.119.161:80'];

// Tesing URL
// var allowedOrigins = ['http://localhost:3000','http://94.237.119.161:3000'];
app.use(cors());
//   app.use(cors({
//   origin: function(origin, callback){
//     console.log(origin);
//     // allow requests with no origin 
//     // (like mobile apps or curl requests)
//     if(!origin) return callback(null, true);
//     if(allowedOrigins.indexOf(origin) === -1){
//       var msg = 'The CORS policy for this site does not ' +
//                 'allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// }));

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

//*********************Forbidden to Change anything Under********************* */
// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});

  // const token = 'magento'
  const magento_url = 'https://b2b.agmarket.fi/rest/V1/magedelight-customerprice/getTopsell'

  const post_magento_url = 'https://b2b.agmarket.fi/rest/V1/magedelight-customerprice/updateInventory'

  //   {
  //     "sku": "XXXXX",
  //     "status": "instock/outofstock"
  // }

app.get('/magento_allproduct', async (req, res) => {
    try {
      const token = req.header('token');
      const response = await axios.get(magento_url,{
        headers: {
            Authorization: `Bearer: ${token}`,
            'Content-Type': 'application/json',
        }}
    );
      response_data = response.data
      for (let i = 0; i < response_data.length; i++) {
        response_data[i]['inStock'] = true
      }      
      res.json(response_data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Something went wrong!');
    }
  });

  app.post('/postmagento_allproduct', async (req, res) => {
    try {
      const token = req.header('token');
      const body_data = req.body
      const post_magento_data = []

      for (let i = 0; i < body_data.length; i++) {
        post_magento_data.push({
          "sku":body_data[i]['sku'],
          "status": body_data[i]['inStock'] ? "instock":"outofstock"
        })
      }    

    for await (let item of post_magento_data) {
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: post_magento_url,
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer: ${token}`, 
          // 'Cookie': 'PHPSESSID=vhb0ipphl8hji6e6ncoh7ekl1a'
        },
        data :  JSON.stringify(item)
      };
      let response = await axios.request(config)
      console.log(response.data);
    }
    res.sendStatus(200);

  } catch (error) {
      console.error(error);
      res.status(500).send('Something went wrong!');
    }
  });