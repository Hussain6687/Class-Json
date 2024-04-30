'strict mode';

// const list = document.getElementById('myList');
// const rate = document.getElementById('rate');
// const ItemList = {
//   pname: 'Celbex 250mg Caps',
//   packsize: '12tabs',
//   Tradeprize: 180,
//   RetialPrize: 240,
// };
// const ItemList2 = {
//   pname: 'Xplendid 5mg Caps',
//   packsize: '12tabs',
//   Tradeprize: 140,
//   RetialPrize: 200,
// };

// const Items = [ItemList, ItemList2];
// let qty = 2;
// Items.forEach(function (item, i) {
//   const pname = `${i + 1} ${item.pname}`;
//   const amount = `${item.Tradeprize * qty}`;
//   console.log(pname, amount);
// });
// Items.forEach(function (item) {
//   const lists = `
//   <select id="myList">

//   <option>${item.pname}</option>;
//   </select
//   >`;
//   // const rate = `${item.Tradeprize}`;
//   // console.log(rate);
//   list.insertAdjacentHTML('afterbegin', lists);
//   if (list.value === item.pname) {
//     rate.textContent = item.Tradeprize;
//   }
// });
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

// // let idname = document.getElementById('product-id');
// let img = document.getElementById('image');

// Prod_list.product.forEach(function (product) {
//   console.log(product.name);
//   // const idname = document.getElementById('product-id');
//   const ProName = document.createElement('div');
//   ProName.classList.add;
//   ('jsonf');
//   const node = document.getElementById('product-id');
//   ProName.appendChild(node);
//   // ProName.innerHTML = product.name;
//   // idname.prepend(ProName);

//   // idname.appendChild(product.name);
// });
