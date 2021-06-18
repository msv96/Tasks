var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.eu/rest/v2/all");
let i;
xhr.onload = function () {
var data = JSON.parse(this.response);
for(i in data) {
    console.log("Name:",data[i].name);
    console.log("Population:",data[i].population);
    console.log("Region:",data[i].region);
    console.log("Subregion:",data[i].subregion);
}
};

xhr.send();

