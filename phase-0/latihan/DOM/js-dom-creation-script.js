var body = document.body
var createDiv = document.createElement('div')
var createId = document.createAttribute('id')

createDiv.value = 'main'
createId.setAttributeNode(mainDivAttrId)
body.appendChild(createDiv)

var insideMainDiv = document.createElement('div')
insideMainDiv.setAttribute('id', 'inside-main')
createDiv.appendChild(insideMainDiv)
