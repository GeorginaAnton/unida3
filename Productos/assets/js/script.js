
let products = {
    data: [
      {
        productName: "Photoderm Spray SPF50+ 300ml",
        category: "Topwear",
        price: "198.10",
        image: "https://vider.com.pe/public/img/products/prd_wc653d80340de90.png",
      },
      {
        productName: "Avéne Espuma limpiadora 150ml",
        category: "Bottomwear",
        price: "100.00",
        image: "https://vider.com.pe/public/img/products/prd_wc650a2d4e55566.png",
      },
      {
        productName: "CeraVe Loción Hidrantante de Rostro SPF30 52ml",
        category: "Watch",
        price: "58.20",
        image: "https://uperfect.pe/cdn/shop/files/locion50ml.png?v=1699466296",
      },
      {
        productName: "Eucerin ANTI-PIGMENT Dual Serum Facial 30ml",
        category: "Topwear",
        price: "183.90",
        image: "https://images-us.eucerin.com/~/media/eucerin%20relaunch%20media/eucerin/local/latam/sales%20visuals/anti-pigment/83500_dual%20serum%20facial/2022/01.jpg?rx=0&ry=0&rw=2000&rh=2000&hash=C91F5D72C0980AA4443BFD6ACBF60473",
      },
      {
        productName: "Isdin Dúo Verano",
        category: "Jacket",
        price: "212-80",
        image: "https://d2jcoqvpcepbfn.cloudfront.net/wp-content/uploads/2024/01/Isdin-Duo-Verano.png",
      },
      {
        productName: "Effaclar Gel Limpiador Facial 400ml",
        category: "Bottomwear",
        price: "135.50",
        image: "https://www.laroche-posay.pe/-/media/project/loreal/brand-sites/lrp/america/latam/products/effaclar/effaclar-cleansing-foaming-gel/effaclargelmoussantpurifiantflaconrgb-v2.png",
      },
      {
        productName: "neutrogena Hidratante Facial Hydro Boost 50g",
        category: "Jacket",
        price: "49.95",
        image: "https://static.wixstatic.com/media/f3d51d_7209e1b065f54dfc960e01c4fd7486bc~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f3d51d_7209e1b065f54dfc960e01c4fd7486bc~mv2.jpg",
      },
      {
        productName: "Serums Rellenador Vicky Liftactiv HA Epidermic Filler",
        category: "Bottomwear",
        price: "178.90",
        image: "https://static.beautytocare.com/cdn-cgi/image/width=1600,height=1600,f=auto/media/catalog/product//v/i/vichy-liftactiv-supreme-h-a-epidermic-filler-serum-30ml.jpg",
      },
      {
        productName: "Anthelios UV Mune 400 Oil Control Fluido SPF50+ 50ml",
        category: "Jacket",
        price: "118.90",
        image: "https://www.vitapointperu.com/wp-content/uploads/2023/07/LRP167-scaled-1.jpg",
      }
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "S/" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };
