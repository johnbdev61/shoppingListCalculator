/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import item from './item.js';

const store = {
  items: [],
  hideCheckedItems: false
};

const items = store.items
const hideCheckedItems = store.hideCheckedItems

const findById = (id) => {
  return store.items.find((item) => item.id === id);
}

function addItem(name) {
  try {
    item.validateName(name)
    let newItem = item.create(name)
    this.items.push(newItem)
  } catch (error) {
    console.log(`Could not add Item: ${error.message}`);
  }
}

const findAndToggleChecked = (id) => {
  let foundItem = this.findById(id);
  foundItem.checked = !foundItem.checked;
}

const findAndUpdateName = (id, newName) => {
  try{
    let foundItem = this.findById(id);
    foundItem.name= newName;
    findById(id)
  } catch (error) {
    console.log(`Cannot update name: ${error.message}`)
  }
}

function findAndDelete(id) {
  let index = this.items.findIndex((item) => item.id === id);
  items.splice(index, 1)
}

function toggleCheckedFilter() {
  this.hideCheckedItems = !this.hideCheckedItems
}

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};
