var itemArray = ["apple", "banana", "orange"];
updateDisplay(); //TESTING: Remove this later.

function addItems() {
  let response = prompt("Enter items separated by space.");
  concatPromptToArray(response);
  formatArray();
}

function removeItems() {
  let response = prompt("Enter items separated by space.");
  var arrayFromString = response.split(" ");

  arrayFromString.map(item => {
    itemIndex = itemArray.indexOf(item);
    itemArray.splice(itemIndex, 1);
  });

  updateDisplay();
}

function concatPromptToArray(string) {
  var arrayFromString = string.split(" ");
  itemArray.push(...arrayFromString)
}

function formatArray() {
  removeNonAlpha();
  removeDuplicates();
  itemArray.sort();
  updateDisplay(itemArray);
}

function removeNonAlpha() {
  itemArray = itemArray.map(x=>x.replace(/[^a-zA-Z]/g,""));     
  itemArray = itemArray.filter(n => n);
}

function removeDuplicates() {
  itemArray = [...new Set(itemArray)];
}

function updateDisplay() {
  clearTable();

  // Find a <table> element with id="itemsTable":
    var table = document.getElementById("itemsTable");

  for (let index = 0; index < itemArray.length; index++) {
    const item = itemArray[index];

  // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow();

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell = row.insertCell();

    // Add some text to the new cells:
    cell.innerHTML = item;
  }
}

function clearTable() {
  const list = document.getElementById("itemsTable");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}

