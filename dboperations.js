var config = require('./dbconfig');
var sql = require('mssql');

async function getCustomers(){
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Customer");
        return products.recordsets;
        
    } catch (error) {
        console.log(error);
    }
}
 
async function getCustomer(Customer_id){
    try {
        let pool = await sql.connect(config);
        let products = await pool.request()
            .input('input_parameter',sql.Int,Customer_id)
            .query("SELECT * from Customer where Customer_id = @input_parameter");
        return products.recordsets;
        
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    getCustomers : getCustomers,
    getCustomer : getCustomer
}