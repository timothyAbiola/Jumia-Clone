(function display() {
  let views = document.getElementById("view");
  let productView = document.getElementById("productView");
  let mainInfo = document.getElementById("main-info");
  //   const stock = document.getElementById("stock");
  const clickedItem = JSON.parse(localStorage.getItem("clickedItem"));
  console.log("new product", clickedItem);
  title.textContent += `${clickedItem.description}`
  views.innerHTML = `<div class="nav-list">
  <span > ${clickedItem.category} </span>
  <i class="fa-solid fa-greater-than gt"></i>
  </div> `;
  productView.innerHTML = `<div class="nav-list">
  <span> ${clickedItem.brand} </span>
  </div> `;
  mainInfo.innerHTML += `<div class="item-display container d-flex" >
                <div class='row'>
                  <img src="${clickedItem.image}" alt="${clickedItem.brand}" class='clickedItemImage'>
                  <h6>SHARE THIS PRODUCT</h6>
                  <div class='d-flex align-items-center gap-2 clickedIcon''>
                    <i class="fa-brands fa-facebook-f c-icon"></i>
                    <i class="fa-brands fa-twitter c-icon"></i>
                  </div>
                </div>
                <div>
                  <div>
                  <span>Official Store</span>
                    <!-- icon -->
                  </div>
                  <p>${clickedItem.title}</p>
                  <div>
                    Brand: ${clickedItem.brand} | Similar product from <a href="#">${clickedItem.brand}</a>
                  </div>
                  <div>
                    <div>
                    <h2> ${clickedItem.price}</h2>
                    <span> ${clickedItem.ip}</span> 
                    </div>
                  <span>${clickedItem.stock} items left </span>
                  </div>
                  <hr>
                  <span>+ shipping from ₦ 250 to LEKKI-AJAH (SANGOTEDO)</span>
                  <div>
                    <button></button>
                  </div>
                </div>
              </div>`;
})();

// mainDiv.innerHTML = product[0].category;
// clickedItem.forEach((item) => {
//   let desc = item.description;
//   if (desc.length >= 25) {
//     desc = item.description.slice(0, 21);
//   }
// });
//  stock.innerHTML += `<div class="perStock">
//     <img src="${item.image}" class="stockImg">
//     <p class="desc">${desc}...</p>
//     <p class="s-price">₦${item.price}</p>
//     <p class="s-through">₦${item.ip}</p>
//   </div>`;
