var allDevices = [];
var sum1=[];

function Device(item, category, quantity) {
    this.item = item;
    this.category = category;
    this.random_price = 0;
    this.total_price = 0;
    this.quantity = quantity;

    allDevices.push(this);

}

Device.prototype.getRandomPrice = function (min,max) {
    for (var i = 0; i < allDevices.length; i++) {
        this.random_price[i] = randomNum(min, max);
    }
};
Device.prototype.getTotalPrice = function () {
    var iteration;
    var sum = 0;
    for (var i = 0; i < allDevices.length; i++) {
        iteration = Math.floor(this.random_price[i] * this.quantity);
        this.total_price[i] = iteration;
        sum += iteration;
        sum1[i] +=iteration;
        


    }
    this.total_price.push(sum);
    sum1[sum1.length-1] += sum;


};
function renderTable() {
    var section1 = document.getElementById('section');
    var table = document.createElement('table');
    section1.appendChild(table);
    var header = document.createElement('tr');
    table.appendChild(header);
    var headName1 = document.createElement('th');
    headName1.textContent = 'Device Name';
    header.appendChild(headName1);
    var headName2 = document.createElement('th');
    headName2.textContent = 'Quantity';
    header.appendChild(headName2);
    var headName3 = document.createElement('th');
    headName3.textContent = 'Unit Price';
    header.appendChild(headName3);

    var DataRow = document.createElement('tr');
    table.appendChild(DataRow);
    for (var k = 0; k < allDevices.length; k++) {
        var DataInfo1 = document.createElement('td');
        DataInfo1.textContent = this.quantity[k];
        DataRow.appendChild(DataInfo1);
        var DataInfo2 = document.createElement('td');
        DataInfo2.textContent = this.random_price;
        DataRow.appendChild(DataInfo2);
        var DataInfo3= document.createElement('td');
        DataInfo3.textContent = this.category;
        DataRow.appendChild(DataInfo3);



    }
    var TotalRow =document.createElement('tr');
    for (var t =0;t<sum1.length;t++)
    TotalRow.textContent =this.total_price[t] ;
    table.appendChild(TotalRow);




}

var form = document.getElementById('form');
form.addEventListener("submit", function (event) {

    event.preventDefault();

    var item1 = event.target.item.value;
    var category1 = event.target.category.value;
    var quantity1 = event.target.quantity.value;
    quantity1 = Number(quantity1);

    new Device(item1, category1 , quantity1);
    for (var i = 0;i<allDevices.length;i++){

    
    allDevices[i].getRandomPrice(350, 750);
    allDevices[i].getTotalPrice();
    saveToLS();
    renderTable();

    }

})

function saveToLS() {
    var sendDevice = JSON.stringify(allDevices);
    localStorage.setItem('devices', sendDevice);

}

function getDevice() {
    var getBack = localStorage.getItem('devices');

    if (getBack) {
        getBack = JSON.parse(getBack);
    }



}

getDevice();















function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}