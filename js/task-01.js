const numberOfCategories = () =>
  console.log('Number of categories:', document.querySelectorAll('.item').length);

const makeTitleAndQuantityOfElements = item => {
  const titleOfCategory = item.firstElementChild;
  const elementsAmountOfCategory = titleOfCategory.nextElementSibling.children.length;
  console.log('Category:', titleOfCategory.textContent);
  console.log('Elements:', elementsAmountOfCategory);
};

const titleOfCategoryAndQuantityOfElements = () => {
  const listOfCategoriesRef = [...document.querySelectorAll('.item')];
  const titleAndElementsOfCategory = listOfCategoriesRef.map(makeTitleAndQuantityOfElements);
};

numberOfCategories();
titleOfCategoryAndQuantityOfElements();
