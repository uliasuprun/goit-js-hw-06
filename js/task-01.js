const categoriesEl = document.querySelectorAll('li.item')
console.log('Number of categories:', categoriesEl.length)

categoriesEl.forEach(function (element) {
    console.log('Category:', element.firstElementChild.textContent)
    console.log('Elements:', element.lastElementChild.children.length)
})
