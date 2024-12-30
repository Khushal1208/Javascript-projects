const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click', function(event){
    console.log(event)
    console.log(event.target)
    const id = event.target.id
    switch(id){
      case "green":
        console.log("green")
        body.style.backgroundColor = id
        break

      case "red":
        console.log("red")
        body.style.backgroundColor = id
        break

      case "blue":
        console.log("blue")
        body.style.backgroundColor = id
        break

      case "yellow":
        console.log("yellow")
        body.style.backgroundColor = id
        break
      
      case "purple":
        console.log("purple")
        body.style.backgroundColor = id
        break

      default:
        console.log("wrong click")
        break
    }
  })
})