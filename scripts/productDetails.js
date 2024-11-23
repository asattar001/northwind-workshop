window.onload = () => {
  const urlParams = new URLSearchParams(location.search);
  showDetails(urlParams.get("category"), urlParams.get("product"));
};
const card = document.querySelector(".card");

async function showDetails(categoryId, productId) {
  const category = await getData("categories", categoryId);
  const productDetails = await getData("products", productId);

  card.querySelectorAll("h5 , p").forEach((elem) => {
    elem.id == "categoryId" 
    ? (elem.textContent += category.name) 
    : (elem.textContent += productDetails[elem.id]);
  });
}
