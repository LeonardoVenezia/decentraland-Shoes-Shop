function walling(position, scale, rotation, materialUrl, basicMaterial) {
  const wall = new Entity()
  wall.addComponent(new Transform({
    position: new Vector3(...position),
    scale: new Vector3(...scale),
    rotation: new Vector3(...rotation)
  }))
  wall.addComponent(new BoxShape())

  if (materialUrl){
    const textura = new Texture(materialUrl)
    const material = new BasicMaterial()
    material.texture = textura
    wall.addComponent(material)
  }
  if (basicMaterial){
    const material = new Material()
    material.albedoColor = Color3.Black()
    material.metallic = 0
    wall.addComponent(material)
  }
  engine.addEntity(wall)
}
// suelo interior
walling([8,-0.1,8], [14, .01, 14], [0, 0, 0], "models/parquet3.jpg", false)
// suelo exterior
// suelo exterior izquierda
// walling([.5,0,8], [1, .1, 16], [0, 0, 0])
// suelo exterior adelante
walling([8,0,.5], [16, .01, 1], [0, 0, 0], "models/pasto.jpg", false)
// suelo exterior derecha "models/pasto.jpg"
// walling([15.5,0,8], [1, .1, 16], [0, 0, 0])
// suelo exterior atras
// walling([8,0,15.5], [16, .1, 1], [0, 0, 0])

// techo
walling([8,5,8], [14, .1, 14], [0, 0, 0], false, true)

// paredes
// izquierda
walling([1,3,9.6], [10.8, 6.5, 0.05], [0, 1, 0], "models/paredPiedra1.jpg", false)
walling([3.85,3,2.6], [3.2, 6.5, 0.3], [0, 1, 0], "models/paredPiedra1_chico.jpg", false) //chica

// atras
walling([6.5,3,15], [11, 6.5, 0.08], [0, 0, 0], "models/paredPiedra1.jpg", false)
walling([13.5,3,15], [3, 6.5, 0.08], [0, 0, 0], "models/vidrio.png", false)
// derecha
walling([15,3,6.5], [11, 6.5, 0.05], [0, 1, 0], "models/paredPiedra1.jpg", false)
walling([15,3,13.5], [3, 6.5, 0.05], [0, 1, 0], "models/vidrio.png", false)

// MARCO
walling([15,2.5,15], [.1, 5, .1], [0, 1, 0], "models/madera_marco.jpg", false)
walling([12,2.5,15], [.1, 5, .1], [0, 1, 0], "models/madera_marco.jpg", false)
walling([15,2.5,12], [.1, 5, .1], [0, 1, 0], "models/madera_marco.jpg", false)

walling([13.5,5,15], [.1, .1, 3], [0, 1, 0], "models/madera_marco.jpg", false)
walling([15,0,13.5], [3, .2, .1], [0, 1, 0], "models/madera_marco.jpg", false)
walling([15,5,13.5], [3, .1, .1], [0, 1, 0], "models/madera_marco.jpg", false)
walling([13.5,0,15], [.1, .2, 3], [0, 1, 0], "models/madera_marco.jpg", false)

// adelante
walling([5,3,1], [2.5, 6.5, 0.05], [0, 0, 0], "models/paredPiedra1_chico.jpg", false) // chica adelante
walling([2.49,3,4.2], [3, 6.5, 0.2], [0, 0, 0], "models/paredPiedra1_chico.jpg", false) // chica medio

walling([12.5,3,1], [5, 6.5, 0.05], [0, 0, 0], "models/paredPiedra1.jpg", false)

// function spawnCube(x: number, y: number, z: number) {
//   // create the entity
//   const cube = new Entity()

//   // add a transform to the entity
//   cube.addComponent(new Transform({ position: new Vector3(x, y, z) }))

//   // add a shape to the entity
//   cube.addComponent(new BoxShape())

//   // add the entity to the engine
//   engine.addEntity(cube)

//   return cube
// }

// /// --- Spawn a cube ---

// const cube = spawnCube(0, 0, 20)

// cube.addComponent(
//   new OnClick(() => {
//     cube.getComponent(Transform).scale.z *= 1.1
//     cube.getComponent(Transform).scale.x *= 0.9

//     spawnCube(Math.random() * 8 + 1, Math.random() * 8, Math.random() * 8 + 1)
//   })
// )


let productos = []

function asseting(position, scale, rotation, url, click, datos) {
  let asset = new Entity()
  asset.addComponent(new GLTFShape(url))
  asset.addComponent(new Transform({ 
      position: new Vector3(...position), 
      scale: new Vector3(...scale),
      rotation: new Vector3(...rotation)
  }))
  // const identificador = engine.entities[entityId]
  if(click){
    asset.addComponent(new OnPointerDown(e =>{
      const pushear =  Object.assign(datos,{
        id: e.hit.entityId
      })
      productos.push(pushear)
      openModal(e.hit.entityId)
    }))

  }
    // if (materialUrl){
    //   const textura = new Texture(materialUrl)
    //   const material = new BasicMaterial()
    //   material.texture = textura
    //   asset.addComponent(material)
    // }
    // if (materialUrl){
    //   engine.addSystem(new RotatorSystem())
    // }
    
  engine.addEntity(asset)
}

// asseting([3, 1, 3],[10, 10, 10],[0,0,0],"models/avocado/avocado.gltf", false)
for(let i = 0; i < 15; i++){
  asseting([1.05,-.05,i + 0.5],[.1,.1,.1],[0,0,0],"models/grass/earth_sod.gltf", false)
}
for(let i = 0; i < 15; i++){
  asseting([16.05,-.05,i + 0.5],[.1,.1,.1],[0,0,0],"models/grass/earth_sod.gltf", false)
}
for(let i = 1; i < 15; i++){
  asseting([i + 1.05,-.05,14.5],[.1,.1,.1],[0,0,0],"models/grass/earth_sod.gltf", false)
}
asseting([2.05,-.05, 0.5],[.1,.1,.1],[0,0,0],"models/grass/earth_sod.gltf", false)
asseting([3.05,-.05, 0.5],[.1,.1,.1],[0,0,0],"models/grass/earth_sod.gltf", false)
asseting([4.05,-.05, 0.5],[.1,.1,.1],[0,0,0],"models/grass/earth_sod.gltf", false)

asseting([2.05,-.05, 1.5],[.1,.1,.1],[0,0,0],"models/grass/earth_sod.gltf", false)
asseting([3.05,-.05, 1.5],[.1,.1,.1],[0,0,0],"models/grass/earth_sod.gltf", false)
asseting([4.05,-.05, 1.5],[.1,.1,.1],[0,0,0],"models/grass/earth_sod.gltf", false)

asseting([2.05,-.05, 2.5],[.1,.1,.1],[0,0,0],"models/grass/earth_sod.gltf", false)
asseting([3.05,-.05, 2.5],[.1,.1,.1],[0,0,0],"models/grass/earth_sod.gltf", false)
asseting([4.05,-.05, 2.5],[.1,.1,.1],[0,0,0],"models/grass/earth_sod.gltf", false)
for(let i = 0; i < 16; i++){
  asseting([.5 + i,0,.5],[.4, 1, .4], [0,0,0],"models/baldoza_exterior/scene.gltf", false)
}


/////ESTANTE
asseting([14.5,-.1,6],[.05, .05, .1], [0,0,0], "models/estantes/archive/524 Shelves.gltf", false)
walling([14.5,-.1,6], [1, 8, 10], [0, 0, 0], "models/vidrio.png", false)



///// Mesa
asseting([5.5,0,13.5],[.15, .15, .15], [0,1,0], "models/decoraciones/table1/Table_Large_Rectangular_01.gltf", false)
asseting([9,0,13.5],[.15, .15, .15], [0,1,0], "models/decoraciones/table1/Table_Large_Rectangular_01.gltf", false)
walling([5.5,1,13.5], [3, 1, 2], [0, 0, 0], "models/vidrio.png", false)
walling([9,1,13.5], [3, 1, 2], [0, 0, 0], "models/vidrio.png", false)

///mesa cuelgue
asseting([5.5,0,8],[.15, .15, .15], [0,1,0], "models/decoraciones/table1/Table_Large_Rectangular_01.gltf", false)
asseting([9,0,8],[.15, .15, .15], [0,1,0], "models/decoraciones/table1/Table_Large_Rectangular_01.gltf", false)
walling([5.5,1,8], [3, 1, 2], [0, 0, 0], "models/vidrio.png", false)
walling([9,1,8], [3, 1, 2], [0, 0, 0], "models/vidrio.png", false)


////// OTRAS ZAPAS BLANCAS
const descripcionZapas1 = {
  nombre: "White Shoes",
  descripcion: `Each product will have a different description, 
where it will show its main characteristics`,
  precio: "$200",
  cantidad: 1
}
asseting([9.5,1.3,13.5],[.3, .3, .3], [1,0,0], "models/zapas/zapas2/NikeBanner_Proto42.gltf", true, descripcionZapas1)
asseting([8.5,1.3,13.5],[.3, .3, .3], [1,0,0], "models/zapas/zapas2/NikeBanner_Proto42.gltf", true, descripcionZapas1)
asseting([6,1.3,13.5],[.3, .3, .3], [1,0,0], "models/zapas/zapas2/NikeBanner_Proto42.gltf", true, descripcionZapas1)
asseting([5,1.3,13.5],[.3, .3, .3], [1,0,0], "models/zapas/zapas2/NikeBanner_Proto42.gltf", true, descripcionZapas1)


/// zapas cuelgue
asseting([9.5,1.3,8],[.3, .3, .3], [1,0,0], "models/zapas/zapas2/NikeBanner_Proto42.gltf", true, descripcionZapas1)
asseting([8.5,1.3,8],[.3, .3, .3], [1,0,0], "models/zapas/zapas2/NikeBanner_Proto42.gltf", true, descripcionZapas1)
asseting([6,1.3,8],[.3, .3, .3], [1,0,0], "models/zapas/zapas2/NikeBanner_Proto42.gltf", true, descripcionZapas1)
asseting([5,1.3,8],[.3, .3, .3], [1,0,0], "models/zapas/zapas2/NikeBanner_Proto42.gltf", true, descripcionZapas1)


/////ZAPATILLAS
const descripcionZapas2 = {
  nombre: "Blue Shoes",
  descripcion: `This is the description of the blue shoes
Here you can find details such as: sizes, colors available, manufacturer, etc ...`,
  precio: "$100",
  cantidad: 1
}
asseting([14.5,3.1,9.7],[.5, .5, .5], [0,0,0], "models/zapas/zapas/zapatillas.gltf", true, descripcionZapas2)
asseting([14.5,3.1,7.9],[.5, .5, .5], [0,0,0], "models/zapas/zapas/zapatillas.gltf", true, descripcionZapas2)
asseting([14.5,3.1,6],[.5, .5, .5], [0,0,0], "models/zapas/zapas/zapatillas.gltf", true, descripcionZapas2)
asseting([14.5,3.1,4.25],[.5, .5, .5], [0,0,0], "models/zapas/zapas/zapatillas.gltf", true, descripcionZapas2)
asseting([14.5,3.1,2.2],[.5, .5, .5], [0,0,0], "models/zapas/zapas/zapatillas.gltf", true, descripcionZapas2)



asseting([14.5,2.1,9.7],[.5, .5, .5], [0,0,0], "models/zapas/zapas/zapatillas.gltf", true, descripcionZapas2)
asseting([14.5,2.1,7.9],[.5, .5, .5], [0,0,0], "models/zapas/zapas/zapatillas.gltf", true, descripcionZapas2)
asseting([14.5,2.1,6],[.5, .5, .5], [0,0,0], "models/zapas/zapas/zapatillas.gltf", true, descripcionZapas2)
asseting([14.5,2.1,4.25],[.5, .5, .5], [0,0,0], "models/zapas/zapas/zapatillas.gltf", true, descripcionZapas2)
asseting([14.5,2.1,2.2],[.5, .5, .5], [0,0,0], "models/zapas/zapas/zapatillas.gltf", true, descripcionZapas2)



asseting([14.5,1.25,9.7],[.5, .5, .5], [0,0,0], "models/zapas/zapas/zapatillas.gltf", true, descripcionZapas2)
asseting([14.5,1.25,7.9],[.5, .5, .5], [0,0,0], "models/zapas/zapas/zapatillas.gltf", true, descripcionZapas2)
asseting([14.5,1.25,6],[.5, .5, .5], [0,0,0], "models/zapas/zapas/zapatillas.gltf", true, descripcionZapas2)
asseting([14.5,1.25,4.25],[.5, .5, .5], [0,0,0], "models/zapas/zapas/zapatillas.gltf", true, descripcionZapas2)
asseting([14.5,1.25,2.2],[.5, .5, .5], [0,0,0], "models/zapas/zapas/zapatillas.gltf", true, descripcionZapas2)



asseting([14.5,.3,9.7],[.5, .5, .5], [0,0,0], "models/zapas/zapas/zapatillas.gltf", true, descripcionZapas2)
asseting([14.5,.3,7.9],[.5, .5, .5], [0,0,0], "models/zapas/zapas/zapatillas.gltf", true, descripcionZapas2)
asseting([14.5,.3,6],[.5, .5, .5], [0,0,0], "models/zapas/zapas/zapatillas.gltf", true, descripcionZapas2)
asseting([14.5,.3,4.25],[.5, .5, .5], [0,0,0], "models/zapas/zapas/zapatillas.gltf", true, descripcionZapas2)
asseting([14.5,.3,2.2],[.5, .5, .5], [0,0,0], "models/zapas/zapas/zapatillas.gltf", true, descripcionZapas2)



asseting([14.5,4.1,9.7],[.5, .5, .5], [0,0,0], "models/zapas/zapas/zapatillas.gltf", true, 1)
asseting([14.5,4.1,7.9],[.5, .5, .5], [0,0,0], "models/zapas/zapas/zapatillas.gltf", true, 1)
asseting([14.5,4.1,6],[.5, .5, .5], [0,0,0], "models/zapas/zapas/zapatillas.gltf", true, 1)
asseting([14.5,4.1,4.25],[.5, .5, .5], [0,0,0], "models/zapas/zapas/zapatillas.gltf", true, 1)
asseting([14.5,4.1,2.2],[.5, .5, .5], [0,0,0], "models/zapas/zapas/zapatillas.gltf", true, 1)





// asseting([14.5,3.1,9.7],[100,100,100], [0,0,0], "https://poly.google.com/view/eTKIK731_BP")
// asseting([14.5,2.1,7.9],[100,100,100], [0,0,0], "https://poly.google.com/view/eTKIK731_BP")
// asseting([14.5,1.25,6.],[100,100,100], [0,0,0], "https://poly.google.com/view/eTKIK731_BP")
// asseting([14.5,.3,4.25],[100,100,100], [0,0,0], "https://poly.google.com/view/eTKIK731_BP")






///////// UI

const canvas = new UICanvas()



//// CONTENEDOR    PRODUCTO
const contenedorCompra = new UIContainerRect(canvas)
// contenedorCompra.adaptWidth = true
contenedorCompra.positionY = 50
contenedorCompra.positionX = 0
contenedorCompra.color = Color4.White()
contenedorCompra.width = '0%'
contenedorCompra.height = '0%'
contenedorCompra.width = '65%'
contenedorCompra.height = '65%'
contenedorCompra.visible = false

const cerrar = new UIImage(contenedorCompra, new Texture('models/X.png'))
cerrar.width = '50px'
cerrar.height = '50px'
cerrar.positionX = "-10px"
cerrar.positionY = "-10px"
cerrar.sourceWidth = 128
cerrar.sourceHeight = 128
cerrar.vAlign = 'top'
cerrar.hAlign = 'right'
cerrar.color = Color3.Black()
cerrar.onClick = new OnClick(()=>{
  closeModal()
})


const nombreProducto = new UIText(contenedorCompra)
nombreProducto.color = Color3.Black()
nombreProducto.vAlign = 'top'
nombreProducto.hAlign = 'center'
nombreProducto.positionX = "-20px"
nombreProducto.positionY = "-30px"
nombreProducto.fontSize = 32

const descripcionProducto = new UIText(contenedorCompra)
descripcionProducto.color = Color3.Black()
descripcionProducto.vAlign = 'top'
descripcionProducto.hAlign = 'left'
descripcionProducto.positionY = "-160px"
descripcionProducto.positionX = "20px"
descripcionProducto.fontSize = 28


const precioProducto = new UIText(contenedorCompra)
precioProducto.color = Color3.Blue()
precioProducto.vAlign = 'top'
precioProducto.hAlign = 'left'
precioProducto.positionY = "-220px"
precioProducto.positionX = "20px"
precioProducto.fontSize = 32


/// boton de añadir al carrito
const contenedorAdd = new UIImage(contenedorCompra, new Texture('models/addTo.png'))
contenedorAdd.width = '300px'
contenedorAdd.height = '80px'
// contenedorAdd.positionX = "-10px"
contenedorAdd.positionY = "10px"
contenedorAdd.sourceWidth = 960
contenedorAdd.sourceHeight = 257
contenedorAdd.vAlign = 'bottom'
contenedorAdd.hAlign = 'center'
// contenedorAdd.color = Color3.Black()
contenedorAdd.onClick = new OnClick(()=>{
  closeModal()
  agregar()
  cantProd.value++
})




let productosCarrito = []
let productoActual
const objProductosCarrito= []
function openModal(id){
  contenedorCompra.visible = true
  contenedorCompra.isPointerBlocker = true
  if(id){
    const filtrado = productos.filter((item)=> item.id == id)
    nombreProducto.value = filtrado[0].nombre
    descripcionProducto.value = filtrado[0].descripcion
    precioProducto.value = filtrado[0].precio
    productoActual = filtrado[0]
  }
}
function agregar(){
  let cambio = false
  productosCarrito.forEach((item)=>{
    if(item.nombre == productoActual.nombre){
      cambio = true
      item.cantidad = item.cantidad + 1
    }
  })
  if(!cambio){
    productosCarrito.push(productoActual)
  }
}
function closeModal(){
  contenedorCompra.visible = false
  contenedorCompra.isPointerBlocker = false
}

const carrito = new UIImage(canvas, new Texture('models/carrito.png'))
carrito.name = 'clickable-image'
carrito.width = '100px'
carrito.height = '100px'
carrito.sourceWidth = 512
carrito.sourceHeight = 512
carrito.isPointerBlocker = true
carrito.vAlign = 'bottom'
carrito.hAlign = 'right'
carrito.positionX = "-30px"
carrito.positionY = "30px"
carrito.onClick = new OnClick(() => {
  openCarrito()
  carrito.isPointerBlocker = false
})

const cantProd = new UIText(canvas)
cantProd.value = 0
cantProd.vAlign = 'bottom'
cantProd.hAlign = 'right'
cantProd.positionX = "-30px"
cantProd.positionY = "30px"
cantProd.fontSize = 36
cantProd.color = Color3.Blue()



const contenedorCarrito = new UIContainerRect(canvas)
// contenedorCarrito.adaptWidth = true
contenedorCarrito.positionY = 50
contenedorCarrito.positionX = 0
contenedorCarrito.color = Color4.White()
contenedorCarrito.width = '0%'
contenedorCarrito.height = '0%'
contenedorCarrito.width = '65%'
contenedorCarrito.height = '65%'
contenedorCarrito.visible = false

const cerrarCarrito = new UIImage(contenedorCarrito, new Texture('models/X.png'))
cerrarCarrito.width = '50px'
cerrarCarrito.height = '50px'
cerrarCarrito.positionX = "-10px"
cerrarCarrito.positionY = "-10px"
cerrarCarrito.sourceWidth = 128
cerrarCarrito.sourceHeight = 128
cerrarCarrito.vAlign = 'top'
cerrarCarrito.hAlign = 'right'
cerrarCarrito.color = Color3.Black()
cerrarCarrito.onClick = new OnClick(()=>{
  closeCarrito()
  carrito.isPointerBlocker = true
})

const mensajeProductoCarrito = new UIText(contenedorCarrito)
      mensajeProductoCarrito.color = Color3.Blue()
      mensajeProductoCarrito.vAlign = 'bottom'
      mensajeProductoCarrito.hAlign = 'left'
      mensajeProductoCarrito.positionX = "30px"
      mensajeProductoCarrito.positionY = "50px"
      mensajeProductoCarrito.fontSize = 32
      mensajeProductoCarrito.value = `The purchase is disabled. 
Soon you can buy your products with home delivery included.`

const productosDentroCarrito = []
let contadorAltura = 50
function openCarrito(){
  contenedorCarrito.visible = true
  contenedorCarrito.isPointerBlocker = true
  productosCarrito.forEach((item)=>{
    let lugar = productosDentroCarrito.indexOf(item.nombre)
    if(lugar >= 0){
      productosDentroCarrito[lugar+1].value = productosDentroCarrito[lugar+1].value +1
    }else{
      const nombreProductoCarrito = new UIText(contenedorCarrito)
      nombreProductoCarrito.color = Color3.Black()
      nombreProductoCarrito.vAlign = 'top'
      nombreProductoCarrito.hAlign = 'left'
      nombreProductoCarrito.positionX = "30px"
      nombreProductoCarrito.positionY = "-"+contadorAltura+"px"
      nombreProductoCarrito.fontSize = 28
      nombreProductoCarrito.value = item.nombre
      productosDentroCarrito.push(item.nombre)
      
      
      
      const cantidadProductoCarrito = new UIText(contenedorCarrito)
      cantidadProductoCarrito.color = Color3.Black()
      cantidadProductoCarrito.vAlign = 'top'
      cantidadProductoCarrito.hAlign = 'left'
      cantidadProductoCarrito.positionX = "350px"
      cantidadProductoCarrito.positionY = "-"+contadorAltura+"px"
      cantidadProductoCarrito.fontSize = 28
      cantidadProductoCarrito.value = item.cantidad

      const precioProductoCarrito = new UIText(contenedorCarrito)
      precioProductoCarrito.color = Color3.Black()
      precioProductoCarrito.vAlign = 'top'
      precioProductoCarrito.hAlign = 'left'
      precioProductoCarrito.positionX = "550px"
      precioProductoCarrito.positionY = "-"+contadorAltura+"px"
      precioProductoCarrito.fontSize = 28
      precioProductoCarrito.value = item.precio



      contadorAltura += 40
      productosDentroCarrito.push(cantidadProductoCarrito)
    }
  })
  
}

function closeCarrito(){
  contenedorCarrito.visible = false
}