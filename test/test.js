// Variables
const nameInput = document.getElementById("name-input");
const priceInput = document.getElementById("price-input");
const quantityInput = document.getElementById("quantity-input");
const discountInput = document.getElementById("discount-input");
const locationInput = document.getElementById("location-input");

const addBtn = document.getElementById("add-btn");
const tableBody = document.getElementById("table-body");

const updateNameInput = document.getElementById("update-name-input");
const updatePriceInput = document.getElementById("update-price-input");
const updateQuantityInput = document.getElementById("update-quantity-input");
const updateCountInput = document.getElementById("update-discount-input");
const updateLocationInput = document.getElementById("update-location-input");


const updateBtn = document.getElementById("update-btn");
const cancelBtn = document.getElementById("cancel-btn");
let products = JSON.parse(localStorage.getItem("products")) || [];  
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Functions
function renderTable() {
  tableBody.innerHTML = "";
  for (let i = 0; i < products.length; i++) {   
    const product = products[i];                   
    const tr = document.createElement("tr");
    const idTd = document.createElement("td");
    const nameTd = document.createElement("td");
    const priceTd = document.createElement("td"); 
    const actionsTd = document.createElement("td");
    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    idTd.innerText = product.id;
    nameTd.innerText = product.name;    
    priceTd.innerText = product.price;   
    quantityTd.innerText = product.quantity;   // here
    discountTd.innerText = product.discount;   // here
    locationTd.innerText = product.location;    // here
    editBtn.innerText = "Edit";
    deleteBtn.innerText = "Delete";
    editBtn.addEventListener("click", () => {
      showUpdateForm(product.id);
    });
    deleteBtn.addEventListener("click", () => {
      deleteProduct(product.id);
    });
    actionsTd.appendChild(editBtn);
    actionsTd.appendChild(deleteBtn);
    tr.appendChild(idTd);
    tr.appendChild(nameTd);
    tr.appendChild(priceTd);  
    tr.appendChild(quantityTd); // here
    tr.appendChild(discountTd); // here
    tr.appendChild(locationTd); // here
    tr.appendChild(actionsTd);
    tableBody.appendChild(tr);
  }
}

function addProduct() {
  const name = nameInput.value.trim();
  const price = priceInput.value.trim();
  const quantity = quantityInput.value.trim();
  const discount = discountInput.value.trim();
  const location= locationInput.value.trim();
  
  if(email.match(validRegex)){
  if(email.match(validRegex)){
  if(email.match(validRegex)){
    if(name && email != null){
      var id = 1;
      var val = products.map(function(x){return x.id; }).indexOf(id);
      while(val != -1){
	    id++;
	    val = products.map(function(x){return x.id; }).indexOf(id);
  }
      const user = {
        id: id,
        name: name,
        price: price,
        quantity: quantity,
        discount: discount,
        location: location
      };
      products.push(user);
      localStorage.setItem("products", JSON.stringify(products));
      nameInput.value = "";
      priceInput.value = "";
      quantityInput.value = "";
      discountInput.value = "";
      locationInput.value = "";
      renderTable();
    }else{
      alert("Name is Required");
    }
  }else{
    alert("Invalid email address!");
  }
}

function updateProduct() {
  const name = updateNameInput.value;
  const price = updatePriceInput.value;
  const quantity = updateQuantityInput.value;
  const discount = updateDiscountInput.value;
  const location = updateLocationInput.value;
  if(email.match(validRegex)){
    const index = products.findIndex((user) => user.id === currentUserId);
    if (index !== -1) {
      products[index].name = name;
      products[index].price = price;
      products[index].quantity =  quantity;
      products[index].discount = discount;
      products[index].location= location;
      localStorage.setItem("products", JSON.stringify(products));
      hideUpdateForm();
      renderTable();
    }
  }else{
    alert("Invalid infomation!");
  }
}

function showUpdateForm(userId) {const user = products.find((user) => user.id === userId);
    if (user) {
      updateNameInput.value = user.name;
      updatePriceInput.value = user.price;
      updateQuatityInput.value = user.quantity;
      updateDiscountInput.value = user.discount;
      updateLocationInput.value = user.location;
      currentUserId = user.id;
      updateBtn.addEventListener("click", updateUser);
      cancelBtn.addEventListener("click", hideUpdateForm);
      updateBtn.style.display = "inline-block";
      cancelBtn.style.display = "inline-block";
      updateNameInput.style.display = "inline-block";
      updateEmailInput.style.display = "inline-block";
      document.getElementById("update-container").style.display = "block";
    }
  }
  
  function hideUpdateForm() {
    updateNameInput.value = "";
    updatePriceInput.value = "";
    updateQuanttyInput.value = "";
    updateDiscountInput.value = "";
    updatePLocationInput.value = "";
    currentUserId = null;
    updateBtn.removeEventListener("click", updateUser);
    cancelBtn.removeEventListener("click", hideUpdateForm);
    updateBtn.style.display = "none";
    cancelBtn.style.display = "none";
    updateNameInput.style.display = "none";
    updatePriceInput.style.display = "none";
    updateQuantityInput.style.display = "none";
    updateDiscountInput.style.display = "none";
    updateLocationInput.style.display = "none";
    document.getElementById("update-container").style.display = "none";
  }
  
  function deleteProduct(userId) {
    products = products.filter((user) => user.id !== userId);
    localStorage.setItem("products", JSON.stringify(products));
    if (products.length == 0){
      hideUpdateForm();
    };
    renderTable();
  }
  
  // Event Listeners
  addBtn.addEventListener("click", addUser);
  
  // Initialize table
  renderTable();