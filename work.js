function display(cart) {
  // localStorage.removeItem("product")
  fetch("http://localhost:1234/products")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      let cartFilter = data.filter((product) => product.category === cart);
      console.log(cartFilter)
      localStorage.setItem("product", JSON.stringify(cartFilter));
      window.location.href = "view.html"
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

