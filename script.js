const grande = document.querySelector('.grande')
const punto = document.querySelector('.punto')

// cuando hago click en cada punto
    //saber la posiciond e se punto
    //aplicar un transform stranslateX al grande
    //quitar la clase activo de todos puntos
    //anaduir la clase actuvi al punto q hemos hecho click



punto.forEach( (cadaPunto , i)=> {
    punto[i].addEventlistener('click',()=>{

        let posicion = i
        let mover = posicion * -50

        grande.style.transform = `translateX(${mover}%)`

        punto.forEach((cadaPunto ,  i)=> {
            punto[i].classList.remove('apretar')
        })
        punto[i].classList.add("apretar")
    })
})