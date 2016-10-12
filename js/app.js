function Shirt(name, size, color, stock, image){
  this.name  = name
  this.size  = size
  this.color = color
  this.stock = stock
  this.image = image
}

var tshirtOne   = new Shirt('Nike Sphere Element', 'XXL', 'Blue', 14, 'images/1.png')
var tshirtTwo   = new Shirt('Nike Pro HyperWarm', 'M', 'Dark Blue', 23, 'images/2.png')
var tshirtThree = new Shirt('Nike Therma Sphere Element', 'S', 'Blue', 14, 'images/3.png')
var tshirtFour  = new Shirt('Nike Dry', 'XL', 'Blue', 14, 'images/4.png')
var tshirtFive  = new Shirt('Nike Air', 'XL', 'Blue', 14, 'images/5.png')
var tshirtSex  = new Shirt('Jordan AJ Long-Sleeve', 'XL', 'Blue', 14, 'images/6.png')

var tshirtArray = new Array

tshirtArray.push(tshirtOne, tshirtTwo, tshirtThree, tshirtFour, tshirtFive, tshirtSex)

for(var i = 0; i < tshirtArray.length; i++){
  var tName = document.createTextNode(tshirtArray[i].name)
  var tSizeStock = document.createTextNode("Size: " + tshirtArray[i].size + " " + " Stock: " + tshirtArray[i].stock)
  var tColor = document.createTextNode(tshirtArray[i].color)
  var tButton = document.createTextNode("Buy Now!")
  var tImage = tshirtArray[i].image


  var item   = document.createElement('div')
  if(i % 2 === 0){
    item.className = "item blue"
  }else{
    item.className = "item pink"
  }

  var title  = document.createElement('div')
  title.className = "title"

  var desc   = document.createElement('div')
  desc.className = "desc"

  var image  = document.createElement('img')

  var cta    = document.createElement('div')
  cta.className = "cta"

  var price  = document.createElement('div')
  price.className = "price"

  var buyButton = document.createElement('button')
  buyButton.className = "btn"

  title.appendChild(tName)
  desc.appendChild(tSizeStock)
  image.src = tImage
  price.appendChild(tColor)

  buyButton.appendChild(tButton)
  cta.appendChild(price)
  cta.appendChild(buyButton)

  item.appendChild(title)
  item.appendChild(desc)
  item.appendChild(image)
  item.appendChild(cta)

  document.getElementsByClassName("items")[0].appendChild(item)

}
