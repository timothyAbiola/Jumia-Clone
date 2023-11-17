// function displayProducts() {
//   const views = document.getElementById("view");
//   const mainDiv = document.getElementById("mainDiv");
//   const stock = document.getElementById("stock");
//   const products = JSON.parse(localStorage.getItem("product"));

//   // Display category in the views and mainDiv elements
//   if (products.length > 0) {
//     views.innerHTML = products[0].category;
//     mainDiv.innerHTML = products[0].category;

//     // Display each product in the stock element
//     products.forEach((item) => {
//       let shortDescription =
//         item.description.length >= 25
//           ? item.description.slice(0, 21) + "..."
//           : item.description;

//       stock.innerHTML += `
//         <div class="perStock" onclick="mainProductPage(${JSON.stringify(
//           item
//         )})">
//           <img src="${item.image}" class="stockImg">
//           <p class="desc">${shortDescription}</p>
//           <p class="s-price">₦${item.price}</p>
//           <p class="s-through">₦${item.ip}</p>
//         </div>`;
//     });
//   }
// }

// function mainProductPage(clickedProduct) {
//   // Perform actions or navigate to a new page based on the clicked product
//   console.log(clickedProduct, "yes");
// }

// // Call the displayProducts function when the page is loaded
// document.addEventListener("DOMContentLoaded", displayProducts);
  const product = JSON.parse(localStorage.getItem("product"));

(function display() {
  let views = document.getElementById("view");
  let mainDiv = document.getElementById("mainDiv");
  const stock = document.getElementById("stock");
  // console.log("new product", product)
  views.innerHTML = product[0].category;
  mainDiv.innerHTML = product[0].category;
  product.forEach((item) => {
    let desc = item.description;
    if (desc.length >= 25) {
      desc = item.description.slice(0, 21);
      // console.log(desc);
      
      // console.log(item);
    }
    stock.innerHTML += `<div class="perStock" onclick='mainProductPage(${item.id})'>
        <img src="${item.image}" class="stockImg">
        <p class="desc">${desc}...</p>
        <p class="s-price">₦${item.price}</p>
        <p class="s-through">₦${item.ip}</p>
      </div>`;
  });
  
})();

function mainProductPage(clickedProduct) {
  let myObj = product.find((el) => el.id === clickedProduct);
  localStorage.setItem("clickedItem", JSON.stringify(myObj));
  window.location.href = "productView.html";
}

// console.log(mywe);


// let mainProductPage = () => {
//   console.log(mywe);
// };
