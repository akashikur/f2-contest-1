/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

let newData = {
  id: 4,
  name: "susan",
  age: "20",
  profession: "intern",
};
let concaArr = [
  { id: 5, name: "praba", age: "20", profession: "developer" },
  { id: 6, name: "jagan", age: "21", profession: "developer" },
  { id: 7, name: "akash", age: "32", profession: "developer" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr
    .filter((employee) => employee.profession == "developer")
    .map((employee) => console.log(employee.name));
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((employee) => {
    if (employee.profession == "developer") {
      console.log(employee.name);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  arr.push(newData);
  console.log("Data pushed successfully");
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((employee) => employee.profession !== "admin");
  console.log("Data Removed Successfully");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  arr = arr.concat(concaArr);
  console.log("Array updated Successfully");
  console.log(arr);
}
