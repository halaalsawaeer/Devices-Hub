var allDevices = [];


var section1 = document.getElementById("section");
var table = document.createElement("table");
section1.appendChild(table);
var header = document.createElement("tr");
table.appendChild(header);



function Device(item, category, quantity) {
  this.item = item;
  this.category = category;
  this.quantity = quantity;
  this.random_price = [];
  this.total_price = [];


  allDevices.push(this);
}

Device.prototype.getRandomPrice = function (min, max) {

  this.random_price = randomNum(min, max);
  console.log(this.random_price);

};
var sum = [];
var total=[];
Device.prototype.getTotalPrice = function () {

  var iteration;


  iteration = Math.floor(this.random_price * this.quantity);

  sum.push(iteration);
  console.log(sum);

  var sum2 = sum.reduce(function (acc, value) {
    return acc + value;
  }, 0);
  console.log(sum2);
  this.total_price.push(sum2);
  console.log(this.total_price);
this.total_price.push(sum2);
total.push(sum2);

console.log(sum);

};
console.log(total);




function addheader() {
  var header = document.createElement('tr');
  table.appendChild(header);
  var headName1 = document.createElement("th");
  headName1.textContent = "Device Name";
  header.appendChild(headName1);
  var headName2 = document.createElement("th");
  headName2.textContent = "Quantity";
  header.appendChild(headName2);
  var headName3 = document.createElement("th");
  headName3.textContent = "Unit Price";
  header.appendChild(headName3);
  var headName4 = document.createElement("th");
  headName4.textContent = "Category";
  header.appendChild(headName4);
}

Device.prototype.renderTable = function () {

  var DataRow = document.createElement("tr");
  table.appendChild(DataRow);

  var DataInfo1 = document.createElement("td");
  DataInfo1.textContent = this.item;
  DataRow.appendChild(DataInfo1);
  var DataInfo2 = document.createElement("td");
  DataInfo2.textContent = this.quantity;
  DataRow.appendChild(DataInfo2);
  var DataInfo3 = document.createElement("td");
  DataInfo3.textContent = this.random_price;
  DataRow.appendChild(DataInfo3);
  var DataInfo4 = document.createElement("td");
  DataInfo4.textContent = this.category;
  DataRow.appendChild(DataInfo4);

  
  

  

};

function addfooter (){
  var footer = document.createElement('tr');
  
table.appendChild(footer);
var TotalRow = document.createElement('td');
footer.appendChild(TotalRow);
  for (var tot = 0; tot < total.length; tot++) {
    
    
    TotalRow.textContent =`Total : ${total[tot]} ` ;
   
}
}


var form = document.getElementById("form");
form.addEventListener('submit', function (event) {
  event.preventDefault();
  sum = [];

  var item1 = event.target.item.value;
  var category1 = event.target.category.value;
  var quantity1 = event.target.quantity.value;
  quantity1 = Number(quantity1);

  new Device(item1, category1, quantity1);
  for (var i = 0; i < allDevices.length; i++) {
    allDevices[i].getRandomPrice(350, 750);
    allDevices[i].getTotalPrice();
  }
  table.textContent = '';
  var DataRow = document.createElement("tr");
  table.appendChild(DataRow);

  addheader();
  for (var i = 0; i < allDevices.length; i++) {
    allDevices[i].renderTable();

  }
addfooter();
  saveToLS();
});

function saveToLS() {
  var sendDevice = JSON.stringify(allDevices);
  localStorage.setItem("devices", sendDevice);
}

function getDevice() {
  var getBack = localStorage.getItem("devices");

  if (getBack) {
    getBack = JSON.parse(getBack);
  }
}

getDevice();

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
