localStorage.clear();

const categorySelect = document.getElementById('category');
const sakeInput = document.getElementById('sake_name');
const submitBtn = document.getElementById('submit_btn');
let stockCount = document.getElementById('stock_count');
let tableList = document.getElementById('table_list');

let count = 0;

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  let deleteIcon = 'delete-' + count;
  let item = 'item-' + count;


  let html = `<tr id="${item}">
                <td>${categorySelect.value}</td>
                <td>${sakeInput.value}</td>
                <td>${stockCount.value}</td>
                <td><input id="check" type="number"><input type="submit" id="submit" value="Update" onclick="updateTheCount(event)"></td>
                <td>
                  <button id="${deleteIcon}" onclick="deleteTableRow(event)">Delete</button>
                </td>
              </tr>`;
  
  tableList.innerHTML += html;

  // let check = document.getElementById('check');
  // let submit = document.getElementById('submit');
  // let deleteBtn = document.getElementById(`${deleteIcon}`);
  // let itemList = document.getElementById(`${item}`);

  localStorage.setItem('htmlElement', JSON.stringify(html));

  categorySelect.value = '';
  sakeInput.value = '';
  stockCount.value = '';
  count++;

  
});

function deleteTableRow(event) {
  let tableRow = event.target.parentNode.parentNode; // First parentNode gets <td>, Second parentNode gets <tr>
  console.log(tableRow);
  tableRow.remove();
}

function updateTheCount(event) {
  let updateValue = event.target.previousElementSibling.value; // Submit input の一個上のElement
  let currentStockElement = event.target.parentNode.previousElementSibling;

  // Approach 1 (Correct): Changing the object attribute using object.attribute = newValue
  currentStockElement.innerText = parseInt(currentStockElement.innerText) + parseInt(updateValue);

  // Approach 2 (Wrong): Changing the object attribute using let variable = object.attribute; variable = newValue
  // let currentStockElementText = currentStockElement.innerText; // Changing currentStockElementText will not change currentStockElement.innerText
  // currentStockElementText = parseInt(currentStockElementText) + parseInt(updateValue);
  
  console.log(currentStockElement.innerText);
}









