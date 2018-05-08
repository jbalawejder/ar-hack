
var app = (function(){
  
  // start method
  var start = () => {
    console.log("Hello world! - main.js"); 
    
    // the linter is pointer out an error incorrectly here. This can be safely ignored
    // console.log(productService.getAllProducts());
    
  }
  
  var onDOMReady = function() {
    $(document).ready(function() {
      
      var products = productService.getAllProducts();
      
      for(var i = 0; i < products.length; i++) {
         
        var product = products[i];
        var block = create3DBlock( product );

        // get the <a-marker element
        var markerElement = $('#' + product.productSKU);
        
        if ( markerElement != null ) {
          markerElement.append( block ) 
        }
        
      }
    });
  }
  
  
  var create3DBlock = function( product ){
    
    // product here refers to the 1 item from the catalog
    var productTitle = `
      <a-text position="-0.55 1.3 0" width="6" height="4" color="white" font="exo2bold" value=${product.productName} class="product-title">
      </a-text>
    `;
    
    var productPrice = `
      <a-text position="-0.4 0.7 0.55" rotation="0 0 0" width="1" color="white" value=${product.productPrice} wrap-count="10" class="product-price">
      </a-text>
    `;
    
    var productReview = `
      <a-text position="-0.55 0.45 -0.4"" rotation="0 -90 0" width="0.9" color="white" value="This is a great phone for what I needed it for! Would recommend" class="product-review" wrap-count="13">
      </a-text>
    `;
    
    var productRating = `
    <a-text position="0.55 0.7 0.4" rotation="0 90 0" width="1" color="white" value=${product.productRating} wrap-count="10" class="product-rating">
    </a-text>
    `;
    
    var block = `${productTitle} ${productPrice} ${productReview} ${productRating}`
    
    return block
    
  }
  
  var createTextForBlock = function( attributes, text ) {
    
  }
  
  
  return {
     start: start,
     onDOMReady: onDOMReady
  }
  
})()

app.start()
app.onDOMReady();