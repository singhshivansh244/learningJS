const input = document.getElementById('item');
const submitBtn = document.getElementById('btn');
const listOfItems = document.getElementById('items');
const filter = document.getElementById('filter');

// clearing input field
input.value = '';
filter.value = '';

// delete logic
listOfItems.addEventListener('click', deleteItem);

//filter event
filter.addEventListener('keyup', filterItems);

// adding items in items list
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    li.className = 'list-group-item';
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(deleteBtn);
    listOfItems.appendChild(li);
});

// function to delete Items from list
function deleteItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            let li = e.target.parentElement;
            listOfItems.removeChild(li);
        }
    }
}

//filter items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    const items = document.getElementsByTagName('li');
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';    
        }
    })
}