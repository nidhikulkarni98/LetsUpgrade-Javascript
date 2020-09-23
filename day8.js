let products = [
    {
      id: 1,
      name: "black dress",
      size: "L",
      color: "Black",
      price: 8000,
      image: "product3.jpg",
      description: "Classic long piece",
    },
    {
      id: 2,
      name: "Short DRess",
      size: "S",
      color: "Combo of Blue&white",
      price: 9000,
      image: "product2.jpg",
      description: "short dress",
    },
  
    {
      id: 3,
  
      name: "Long Dress",
      size: "L",
      color: "Green",
      price: 9000,
      image: "product1.jpg",
      description: "long gown",
    },
  
    {
      id: 4,
      name: "FRok",
      size: "M",
      color: "White",
      price: 5000,
      image: "product4.jpg",
      description: "cute dress",
    },
  
    {
      id: 5,
      name: "Ethnic Kurta",
      size: "S",
      color: "Pink",
      price: 8000,
      image: "product5.jpg",
      description: "Ethnic wear pink kurta",
    },
  
    {
      id: 6,
      name: "Ethnic long Kurta",
      size: "M",
      color: "White",
      price: 1100,
      image: "product6.jpg",
      description: "Elegant kurta",
    },
    {
      id: 7,
      name: "Kurta",
      size: "M",
      color: "Orange",
      price: 6600,
      image: "product7.jpg",
      description: "Good looking Traditional Dress",
    },
    {
      id: 8,
      name: "Palazo & Kurta",
      size: "S",
      color: "Ash colour",
      price: 10000,
      image: "product8.jpg",
      description: "Good looking combo",
    },
    {
      id: 9,
      name: "top",
      size: "-",
      color: "Red",
      price: 1200,
      image: "product9.jpg",
      description: "classy top",
    },
    {
      id: 10,
      name: "Top",
      size: "M",
      color: "beige",
      price: 4000,
      image: "Product10.jpg",
      description: "top",
    },
    {
      id: 11,
      name: "MEN SHIRT",
      size: "M",
      color: "GRAY",
      price: 6000,
      image: "product11.jpg",
      description: "shirt",
    },
    {
      id: 12,
      name: "Blue Shirt",
      size: "M",
      color: "Navy Blue",
      price: 12000,
      image: "product12.jpg",
      description: "classy shirt",
    },
  ];

    cart = [];

  

function displayProducts(productsData, who = "productwrapper") {
  let productsString = "";

  productsData.forEach(function (product, index) {
    let { id, name, image, color, description, price, size } = product;

    if (who == "productwrapper") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="images/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="addToCart(${id})">Add to Cart</button>
        </p>
      </div>`;
    } else if (who == "cart") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="images/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="removeFromCart(${id})">Remove from Cart</button>
          </p>
        </div>`;
      }
    });
  
    document.getElementById(who).innerHTML = productsString;
  }
  
  displayProducts(products);

  function searchProduct(searchValue) {
    let searchedProducts = products.filter(function (product, index) {
      let searchString =
        product.name + " " + product.color + " " + product.description;
  
      return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
  
    displayProducts(searchedProducts);
  }
  
  // this is a function to get a product based on id from a particular array
  // @param 1 the array u want to get products from
  // @param 2 the id u want to search
  
  function getProductByID(productArray, id) {
    return productArray.find(function (product) {
      return product.id == id;
    });
  }
  
  
  
  function removeFromCart(id) {
    // getting the index based on id
    let index = cart.findIndex(function (product) {
      return product.id == id;
    });
  
    //   removing from cart based on index
    cart.splice(index, 1);
    displayProducts(cart, "cart");
  }





  function filter(){
    let minv=document.getElementById("minp").value;
    let maxv = document.getElementById("maxp").value;
    let items= products.filter(function(itemsl){
        return itemsl.price>=minv && itemsl.price<=maxv;
    })
     displayProducts(items);
    document.getElementById("minp").value="";
      document.getElementById("maxp").value="";
}




function addToCart(id) {
// getting the product
    let pro = getProductByID(products, id);
  
     //  putting in cart

     if (cart.length==0){
         document.getElementById("numb").innerText="( " + cart.length +" )";
      cart.push(pro);
    displayProducts(cart, "cart");
    document.getElementById("numb").innerText="( " + cart.length +" )";
  }

  else{
      let obj = cart.find((cartprod) => cartprod.id==id);
      if(obj==undefined){
          cart.push(pro);
          displayProducts(cart, "cart");
          document.getElementById("numb").innerText="( " + cart.length +" )";

      }
      else{
          alert("Product alreay in cart")
      }
  }
}




