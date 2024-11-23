const selectProduct = document.querySelector("#selectProduct");
const categoryDropdown = document.querySelector("#categoryDropdown");
const selectCategory = document.querySelector("#selectCategory");
const viewProducts = document.querySelector("#viewProducts");
const card = document.querySelector("#card");

async function loadCategoryDropdown() {
  const categories = await getData("categories");
  for (category of categories) {
    const option = new Option(category.name, category.categoryId);
    selectCategory.appendChild(option);
  }
}

loadCategoryDropdown();

async function showProducts(categoryId) {
  viewProducts.parentElement.style.display = "block";
  viewProducts.textContent = "";

  const products = await getData("products");
  const productCards = products
    .filter((product) => {
      return categoryId != "all" ? product.categoryId == categoryId : product;
    })
    .map((product) => {
      const newCard = card.cloneNode(true);
      newCard.querySelectorAll("h5 , p").forEach((elem) => {
        elem.textContent += product[elem.id];
      });
      newCard.querySelector("a").href += `?category=${product.categoryId}&product=${product.productId}`;

      return newCard;
    });
  viewProducts.append(...productCards);
}

selectProduct.addEventListener("change", (e) => {
  selectCategory.value = "";
  categoryDropdown.style.display = "none";

  if (e.target.value) {
    e.target.value == "category" ? (categoryDropdown.style.display = "block") : showProducts("all");
  } else {
    viewProducts.parentElement.style.display = "none";
  }

  // if (e.target.value) {
  //   e.target.value == "category" ? (categoryDropdown.style.display = "block") : showProducts("all");
  // } else {
  //   categoryDropdown.style.display = "none";
  //   viewProducts.parentElement.style.display = "none";
  // }
});

selectCategory.addEventListener("change", (e) => {
  showProducts(e.target.value);
});
