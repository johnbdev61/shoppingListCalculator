/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable semi */
import shoppingList from './shopping-list.js';
import store from './store.js'
import item from './item.js';

const main = function () {
  const itemNames = ["", "apples", "pears"];
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);

store.addItem('bananas');
store.addItem('apples');
store.addItem('rice');
// grab the id of the first store item (bananas)
let id = store.items[0].id;
// delete this item from the store
store.findAndDelete(id);
shoppingList.render();