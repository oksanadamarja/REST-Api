var Customer = require('./customer');
const dboperations = require('./dboperations');

var express = require('express');
var cors = require('cors');
var app = express();
var router = express.Router();
   
app.use(cors());
app.use('/api',router);

router.use((request , response , next) => {
    console.log('middleware');
    next();
}) 

router.route('/customers').get((request,response)=>{
    dboperations.getCustomers().then(result => {
        response.json(result[0]);
    })
})

router.route('/customers/:id').get((request,response)=>{
    dboperations.getCustomer(request.params.id).then(result => {
        response.json(result[0]);
    })
})

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Customer API is running at: ',port); 