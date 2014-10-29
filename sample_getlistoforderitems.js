var mws = require('./lib/mws.js'),
    client = new mws.Client(  ...................
var mwsOrderAPI = require('./lib/orders.js');

var marketplaceId = "ATVPDKIKX0DER";

var sf = new mwsOrderAPI.requests.ListOrderItems();
sf.set("AmazonOrderId", "111-1715221-5800265");
client.invoke(sf, function(RESULT){
  console.log("--------");
  console.log(JSON.stringify(RESULT));
  console.log("--------");
});

