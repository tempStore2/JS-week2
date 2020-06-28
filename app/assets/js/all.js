(function () {
  const obj = {
    data: {
      products: []
    },
    getData() {
      const vm = this;
      const uuid = "20f81077-1b58-4538-baa0-999ec629e11b";
      const url = `https://course-ec-api.hexschool.io/api/${uuid}/ec/products`;
      axios
        .get(url)
        .then((res) => {
          vm.data.products = res.data.data;
          vm.render();
        })
        .catch((err) => {
          console.log("錯誤", err);
        })
    },
    render() {
      const vm = this;
      const app = document.querySelector("#app");
      const products = vm.data.products;
      let str = "";
      products.forEach((product) => {
        str += `
      <li class="card border-0 mb-4 mb-lg-7">
      <a
        href="#"
        class="text-decoration-none"
      >
        <img
          src="${product.imageUrl}"
          class="card-img-top"
          alt="product"
        />
        <h5 class="mb-1 font-weight-bold text-dark">${product.title}</h5>
        <p class="font-weight-600 text-dark">
           NT$${product.price}<span class="ml-2 text-decoration-through text-info">NT$1,200</span>
        </p>
      </a>
    </li>
			`;
      });
      app.innerHTML = str;
    }
  };

  obj.getData();
})();