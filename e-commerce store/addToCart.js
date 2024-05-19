import { getCartProductFromLS } from "./getCardProduct";
import { updateCartValue } from "./updateCartValue";
import { showToast } from "./showToast";

let cartProducts = getCartProductFromLS();

export const addToCart = (event, id, stock, name) => {
  let arrLocalStorageProduct = getCartProductFromLS();

  const currentProdElement = document.querySelector(`#card${id}`);
  let quantity = currentProdElement.querySelector(".productQuantity").innerText;
  let price = currentProdElement.querySelector(".productActualPrice").innerText;

  price = price.replace("₹", "");
  price = price * quantity;

  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  updateCartValue(arrLocalStorageProduct);

  let existingProduct = arrLocalStorageProduct.find((currentPrd) => {
    currentPrd.id === id;
  });

  if (existingProduct && quantity > 1) {
    quantity = Number(existingProduct.quantity) + Number(quantity);
    price = Number(existingProduct.price) * quantity;
    let updatedCart = { id, price, quantity };

    updatedCart = arrLocalStorageProduct.map((currentProd) => {
      return currentProd.id === id ? updatedCart : currentProd;
    });

    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
  }

  showToast("add", id, name);
};
