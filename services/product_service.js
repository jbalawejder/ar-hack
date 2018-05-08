var productService = (function(){
  
  var getAllProducts = function(){
    return  productCatalog.catalog
  }
  
  var getProductNames = function(){
    var productNames = [];
    for (var i = 0; i<productCatalog.catalog.length(); i++) {
    productNames[i] = productCatalog.catalog[i].productName;
    }
    return productNames;
  }
  
  var getProductPrices = function(){
    var productPrices = [];
    for (var i = 0; i<productCatalog.catalog.length(); i++) {
    productPrices[i] = productCatalog.catalog[i].productPrice;
    }
    return productPrices;
  }
  
  var getProductRatings = function(){
    var productRatings = [];
    for (var i = 0; i<productCatalog.catalog.length(); i++) {
    productRatings[i] = productCatalog.catalog[i].productRating;
    }
    return productRatings;
  }
  
  var getProductReviews = function(){
    var productReviews = [];
    for (var i = 0; i<productCatalog.catalog.length(); i++) {
    productReviews[i] = productCatalog.catalog[i].productReview;
    }
    return productReviews;
  }
  
  var getProductBatteryLives = function(){
    var productBatteryLives = [];
    for (var i = 0; i<productCatalog.catalog.length(); i++) {
    productBatteryLives[i] = productCatalog.catalog[i].productBatteryLife;
    }
    return productBatteryLives;
  }
    
  var getProductMemories = function(){
    var productMemories = [];
    for (var i = 0; i<productCatalog.catalog.length(); i++) {
    productMemories[i] = productCatalog.catalog[i].productMemory;
    }
    return productMemories;
  }
  
  var getProductSKUs = function(){
    var productSKUs = [];
    for (var i = 0; i<productCatalog.catalog.length(); i++) {
    productSKUs[i] = productCatalog.catalog[i].productSKU;
    }
    return productSKUs;
  }
  
  return {
    getAllProducts : getAllProducts,
    getProductNames : getProductNames,
    getProductPrices : getProductPrices,
    getProductRatings : getProductRatings,
    getProductReviews : getProductReviews,
    getProductBatteryLives : getProductBatteryLives,
    getProductMemories : getProductMemories
  }
  
})()

var productCatalog = { 
  "catalog": [

    {
     productSKU: "123",
     productName:"Nexus6P", 
     productPrice:"$499.97", 
     productMemory:"32GB",
     productBatteryLife:"8hrs",
     productRating:"4.2", 
     productReview:"I just got this phone and it is AWESOME!! I love google:)"
    },
  
    {
     productSKU: "124",
     productName:"iPhone6", 
     productPrice:"$309.99",
     productMemory:"64GB",
     productBatteryLife:"2hrs",
     productRating:"4.4", 
     productReview:"Well built! I love the look and feel of this phone"
    },
  
    {
     productSKU: "125",
     productName:"iPhone4", 
     productPrice:"$199.99",
     productMemory:"4GB",
     productBatteryLife:"30mins",
     productRating:"3.5", 
     productReview:"In 2018 this phone is like a brick but back in the day decent phone"
    },
  
    {
     productSKU: "126",
     productName:"iPhoneX", 
     productPrice:"$1319.00",
     productMemory:"128GB",
     productBatteryLife:"3hr",
     productRating:"4.5", 
     productReview:"The notch at the top of the screen is a bit odd but all in all a solid phone"
    },
  
    {
     productSKU: "127",
     productName:"SamsungSII", 
     productPrice:"$149.99",
     productMemory:"8GB",
     productBatteryLife:"4hr",
     productRating:"3.2", 
     productReview:"Very sturdy I can throw it off a building!"
    }
  ]
}