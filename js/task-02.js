const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const selectedListParentElementRef = document.querySelector('#ingredients');
console.log(
  '1. Find reference to parent element',
  selectedListParentElementRef
);

const createNewItemOftheList = ingridient => {
  const newElementOfList = document.createElement('li');
  newElementOfList.textContent = ingridient;
  newElementOfList.classList.add('item');
  return newElementOfList;
};
console.log('2. Make callback function', createNewItemOftheList);

const makeNewArrayOfIngridients = ingredients.map(createNewItemOftheList);

console.log(
  '3. Create new array with "map" and callback',
  makeNewArrayOfIngridients
);
selectedListParentElementRef.append(...makeNewArrayOfIngridients);

console.log(
  '4. Spread new array and append it to HTML',
  ...makeNewArrayOfIngridients
);
