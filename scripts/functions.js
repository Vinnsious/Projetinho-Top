<<<<<<< HEAD
const app = document.getElementById("app");

function createBox(nameBox, arrayElements) {
  let boxWrap = document.getElementsByClassName('box-wrap')[0]

  if (!boxWrap) {
    const box = document.createElement('div')
    box.classList.add('box-wrap')
    app.appendChild(box)

    box.addEventListener('DOMNodeInserted', function () {
      const boxes = Array.from(app.getElementsByClassName('box'));
      const box = boxes[boxes.length - 1]
      const h3 = box.getElementsByTagName('h3')[0]
      const name = h3.textContent
      const path = box
      const element = {
        name,
        path
      }

      createOptionToSelect(element)
    })

    boxWrap = box
  }

  const divElement = document.createElement('div')
  divElement.classList.add('box')
  divElement.id = createName(nameBox)

  const titleElement = document.createElement('h3')
  titleElement.textContent = `Box de ${nameBox}`

  const ulElement = document.createElement('ul')

  arrayElements.forEach(function (element) {
    let liElement = document.createElement('li')
    liElement.textContent = element
    ulElement.appendChild(liElement)
  })

  divElement.appendChild(titleElement)
  divElement.appendChild(ulElement)

  boxWrap.appendChild(divElement)
  app.appendChild(boxWrap)
}

function createSelectToAdd() {
  const selectElement = document.createElement('select')
  selectElement.classList.add('select-to-add')
  
  app.appendChild(selectElement)
}

function createOptionToSelect(element) {
  const selectElement = getSelect()
  if (!selectElement) return
  
  const name = createName(element.name.split('Box de ')[1])
  const option = document.querySelectorAll(`option[value=${name}]`).length > 0;
  if (option) return
  
  
  const optionElement = document.createElement('option')
  optionElement.value = name
  optionElement.classList.add(name)
  optionElement.textContent = element.name
  selectElement.appendChild(optionElement)

}

function createAddElement() {
  const divElement = document.createElement('div')
  divElement.classList.add('add-element')
  const inputElement = document.createElement('input')
  inputElement.type = 'text'
  inputElement.placeholder = 'Adicione aqui...'
  const buttonElement = document.createElement('button')
  buttonElement.id = 'add-btn'
  buttonElement.textContent = 'Adicionar'

  divElement.appendChild(inputElement)
  divElement.appendChild(buttonElement)
  app.appendChild(divElement)

  return {
    inputAddElement: inputElement,
    buttonAddElement: buttonElement
  }
}

function createName(name) {
  return name.toLowerCase().replace(/ /g,'')
}

function getSelect() {
  return document.getElementsByClassName('select-to-add')[0]
}

createSelectToAdd()
const { inputAddElement, buttonAddElement } = createAddElement()

buttonAddElement.addEventListener('click', function () {
  const value = inputAddElement.value
  const select = getSelect()

  if(!select) return
  if (!value) return
  
  const boxes = document.getElementsByClassName('box-wrap')[0]
  if (!boxes) return

  const box = document.getElementById(select.value)
  const ulBox = box.getElementsByTagName('ul')[0]

  const liElement = document.createElement('li')
  liElement.textContent = value
  ulBox.appendChild(liElement)

  inputAddElement.value = ''
=======
const app = document.getElementById("app");

function createBox(nameBox, arrayElements) {
  let boxWrap = document.getElementsByClassName('box-wrap')[0]

  if (!boxWrap) {
    const box = document.createElement('div')
    box.classList.add('box-wrap')
    app.appendChild(box)

    box.addEventListener('DOMNodeInserted', function () {
      const boxes = Array.from(app.getElementsByClassName('box'));
      const box = boxes[boxes.length - 1]
      const h3 = box.getElementsByTagName('h3')[0]
      const name = h3.textContent
      const path = box
      const element = {
        name,
        path
      }

      createOptionToSelect(element)
    })

    boxWrap = box
  }

  const divElement = document.createElement('div')
  divElement.classList.add('box')
  divElement.id = createName(nameBox)

  const titleElement = document.createElement('h3')
  titleElement.textContent = `Box de ${nameBox}`

  const ulElement = document.createElement('ul')

  arrayElements.forEach(function (element) {
    let liElement = document.createElement('li')
    liElement.textContent = element
    ulElement.appendChild(liElement)
  })

  divElement.appendChild(titleElement)
  divElement.appendChild(ulElement)

  boxWrap.appendChild(divElement)
  app.appendChild(boxWrap)
}

function createSelectToAdd() {
  const selectElement = document.createElement('select')
  selectElement.classList.add('select-to-add')
  
  app.appendChild(selectElement)
}

function createOptionToSelect(element) {
  const selectElement = getSelect()
  if (!selectElement) return
  
  const name = createName(element.name.split('Box de ')[1])
  const option = document.querySelectorAll(`option[value=${name}]`).length > 0;
  if (option) return
  
  
  const optionElement = document.createElement('option')
  optionElement.value = name
  optionElement.classList.add(name)
  optionElement.textContent = element.name
  selectElement.appendChild(optionElement)

}

function createAddElement() {
  const divElement = document.createElement('div')
  divElement.classList.add('add-element')
  const inputElement = document.createElement('input')
  inputElement.type = 'text'
  inputElement.placeholder = 'Adicione aqui...'
  const buttonElement = document.createElement('button')
  buttonElement.id = 'add-btn'
  buttonElement.textContent = 'Adicionar'

  divElement.appendChild(inputElement)
  divElement.appendChild(buttonElement)
  app.appendChild(divElement)

  return {
    inputAddElement: inputElement,
    buttonAddElement: buttonElement
  }
}

function createName(name) {
  return name.toLowerCase().replace(/ /g,'')
}

function getSelect() {
  return document.getElementsByClassName('select-to-add')[0]
}

createSelectToAdd()
const { inputAddElement, buttonAddElement } = createAddElement()

buttonAddElement.addEventListener('click', function () {
  const value = inputAddElement.value
  const select = getSelect()

  if(!select) return
  if (!value) return
  
  const boxes = document.getElementsByClassName('box-wrap')[0]
  if (!boxes) return

  const box = document.getElementById(select.value)
  const ulBox = box.getElementsByTagName('ul')[0]

  const liElement = document.createElement('li')
  liElement.textContent = value
  ulBox.appendChild(liElement)

  inputAddElement.value = ''
>>>>>>> 152e4a37f090050291a7ecd995435dd1edd04677
})