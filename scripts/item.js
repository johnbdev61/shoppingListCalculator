/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable semi */
const validateName = (name) => {
  if(name === "") {
    throw new TypeError('Name must not be blank');
  }
}

function create(name) {
  let person = {
    id: cuid(),
    name: name,
    checked: false
  }
  return person
}


export default {validateName, create};