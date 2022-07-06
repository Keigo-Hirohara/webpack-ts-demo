export default function roadModule(product) {
    const showElement = document.getElementById('PR');
    const pName = document.createElement('productName');
    pName.innerText = product.name;
    const pPrice = document.createElement('productPrice');
    pPrice.innerText = `${product.price}円`;
    const pDesc = document.createElement('productDesc');
    pDesc.innerText = product.description;
    showElement === null || showElement === void 0 ? void 0 : showElement.appendChild(pName);
    showElement === null || showElement === void 0 ? void 0 : showElement.appendChild(pPrice);
    showElement === null || showElement === void 0 ? void 0 : showElement.appendChild(pDesc);
}
