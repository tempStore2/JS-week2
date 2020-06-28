"use strict";

(function () {
  var obj = {
    data: {
      products: []
    },
    getData: function getData() {
      var vm = this;
      var uuid = "20f81077-1b58-4538-baa0-999ec629e11b";
      var url = "https://course-ec-api.hexschool.io/api/".concat(uuid, "/ec/products");
      axios.get(url).then(function (res) {
        vm.data.products = res.data.data;
        vm.render();
      })["catch"](function (err) {
        console.log("錯誤", err);
      });
    },
    render: function render() {
      var vm = this;
      var app = document.querySelector("#app");
      var products = vm.data.products;
      var str = "";
      products.forEach(function (product) {
        str += "\n      <li class=\"card border-0 mb-4 mb-lg-7\">\n      <a\n        href=\"#\"\n        class=\"text-decoration-none\"\n      >\n        <img\n          src=\"".concat(product.imageUrl, "\"\n          class=\"card-img-top\"\n          alt=\"product\"\n        />\n        <h5 class=\"mb-1 font-weight-bold text-dark\">").concat(product.title, "</h5>\n        <p class=\"font-weight-600 text-dark\">\n           NT$").concat(product.price, "<span class=\"ml-2 text-decoration-through text-info\">NT$1,200</span>\n        </p>\n      </a>\n    </li>\n\t\t\t");
      });
      app.innerHTML = str;
    }
  };
  obj.getData();
})();
//# sourceMappingURL=all.js.map
