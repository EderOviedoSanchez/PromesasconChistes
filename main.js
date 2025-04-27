let btnjoke = document.getElementById("btnjoke")
let joke = document.getElementById("joke")
let salida = document.getElementById("salida")

btnjoke.addEventListener("click", getjoke)

async function getjoke(){
    try {
        const res = await fetch("https://icanhazdadjoke.com/", {
            headers:{
                "Accept": "application/json"
            }
        })
        const data = await res.json()
        console.log(data)
        console.log(data.joke)
        return data.joke
    } catch (error) {
        console.error("Error in call")
    } 
}
btnjoke.addEventListener("click", async () => {
    let resultado = await getjoke()
    let hijo = document.createElement("ul")
    hijo.innerHTML = resultado

    salida.innerHTML = ""
    salida.appendChild(hijo)
})  