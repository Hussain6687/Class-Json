'strict mode';

const Prod_list = {
  product: [
    {
      id: 1,
      name: 'Celbex',
      price: 20,
      Image: 'related-3.jpg',
    },
    { id: 2, name: 'Xplendid', price: 15, Image: 'related-2.jpg' },
  ],
};
const productListContainer = document.getElementById('product-list');

// // Iterate over each product in the list
// Prod_list.product.forEach((product, i = 1) => {
//   // Create a div element for each product
//   i++;
//   const productDiv = document.createElement('div');
//   // productDiv.classList.add('product');

//   // Create paragraph elements for name and price
//   const nameParagraph = document.createElement('p');
//   const priceParagraph = document.createElement('p');

//   // Set the text content of the paragraphs to the product's name and price
//   nameParagraph.textContent = `${i}: Name: ${product.name}`;
//   priceParagraph.textContent = `Price: $${product.price}`;

//   // Append the paragraphs to the product div
//   productDiv.appendChild(nameParagraph);
//   productDiv.appendChild(priceParagraph);

//   // Append the product div to the container
//   productListContainer.appendChild(productDiv);
// });
Prod_list.product.forEach((pro, i) => {
  const heading = document.createElement('h3');
  const prodiv = document.createElement('div');
  const product = document.createElement('p');
  const image = document.createElement('p');
  heading.textContent = `----ID ${pro.id}-----`;
  product.textContent = `Name: ${pro.name}`;
  image.textContent = `Price: ${pro.price}`;
  prodiv.classList.add('product');
  prodiv.appendChild(heading);
  prodiv.appendChild(product);
  prodiv.appendChild(image);

  productListContainer.appendChild(prodiv);
});
