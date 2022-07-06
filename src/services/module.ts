type product = {
  name: string;
  price: number;
  description: string;
};

export default function roadModule(product: product) {
  const showElement = document.getElementById('PR');

  const pName = document.createElement('h2');
  const pPrice = document.createElement('h2');
  const pDesc = document.createElement('h2');

  pName.innerText = product.name;
  pPrice.innerText = `${product.price}円`;
  pDesc.innerText = product.description;

  showElement?.appendChild(pName);
  showElement?.appendChild(pPrice);
  showElement?.appendChild(pDesc);
}
