(function display() {
  let views = document.getElementById("view");
  let productView = document.getElementById("productView");
  let mainInfo = document.getElementById("main-info");
  //   const stock = document.getElementById("stock");
  const clickedItem = JSON.parse(localStorage.getItem("clickedItem"));
  console.log("new product", clickedItem);
  title.textContent += `${clickedItem.description}`;
  views.innerHTML = `<div class="nav-list">
  <span > ${clickedItem.category} </span>
  <i class="fa-solid fa-greater-than gt"></i>
  </div> `;
  productView.innerHTML = `<div class="nav-list">
  <span> ${clickedItem.brand || clickedItem.title} </span>
  </div> `;
  mainInfo.innerHTML += `<div class="item-display container d-flex " >
                            <div class='col-3 bg-white pt-2'>
                              <img src="${clickedItem.image}" alt="${clickedItem.brand}" class='clickedItemImage'>
                              <h6 class='share'>SHARE THIS PRODUCT</h6>
                              <div class='d-flex align-items-center gap-2 clickedIcon''>
                                <i class="fa-brands fa-facebook-f c-icon"></i>
                                <i class="fa-brands fa-twitter c-icon"></i>
                              </div>
                            </div>
                            <div class='col-6 bg-white pt-2 ps-2'>
                              <div class=' store-tag'>
                                <span class='official'>Official Store</span>
                                <i class="fa-regular fa-heart heart"></i>
                              </div>
                              <p class='clickedTitle'>${clickedItem.title}</p>
                              <div class='brand'>
                                Brand: ${clickedItem.brand} | Similar product from <a href="#">${clickedItem.brand}</a>
                              </div>
                              <div>
                                <div class='pricing d-flex gap-1 align-items-center'>
                                <h2 class='clickedPrice'># ${clickedItem.price}</h2>
                                <span class='initialPrice'> # ${clickedItem.ip}</span> 
                                </div>
                              <span class='itemLeft'>${clickedItem.stock} items left </span>
                              </div>
                              <hr>
                              <span class='shipping'>+ shipping from ₦ 250 to LEKKI-AJAH (SANGOTEDO)</span>
                              <div>
                                <button class='d-flex justify-content-evenly align-items-center p-2 cartBtn'>
                                  <i class="fa-solid fa-cart-plus cart"></i>
                                  <span class='cart added'>ADD TO CART</span>
                                </button>
                              </div>
                            </div>
                            <div class='col-3 bg-white pt-2 ms-2'>
                              <h5>DELIVERY & RETURNS</h5>
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
