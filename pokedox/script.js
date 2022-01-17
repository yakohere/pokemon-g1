const pokemons = [
    {
        id: 1,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        name: "bulbasaur",
        ability: ["grass", "poision"],
        stats: {
            hp: 39,
            attack: 52,
            defense: 43,
            special_attack: 60,
            special_defense: 50,
            speed: 65
        }
    },
    {
        id: 2,
        img: "	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
        name: "ivysaur",
        ability: ["grass", "poision"],
        stats: {
            hp: 39,
            attack: 52,
            defense: 43,
            special_attack: 60,
            special_defense: 50,
            speed: 65
        }
    },
    {
        id: 3,
        img: "	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
        name: "charmander",
        ability: ["fire"],
        stats: {
            hp: 39,
            attack: 52,
            defense: 43,
            special_attack: 60,
            special_defense: 50,
            speed: 65
        }
    },
    {
        id: 4,
        img: "	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/5.png",
        name: "charmeleon",
        ability: ["fire"],
        stats: {
            hp: 39,
            attack: 52,
            defense: 43,
            special_attack: 60,
            special_defense: 50,
            speed: 65
        }
    },
    {
        id: 5,
        img: "	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png",
        name: "charizard",
        ability: ["fire", "flying"],
        stats: {
            hp: 39,
            attack: 52,
            defense: 43,
            special_attack: 60,
            special_defense: 50,
            speed: 65
        }
    },
    {
        id: 6,
        img: "	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/8.png",
        name: "wartortle",
        ability: ["water"],
        stats: {
            hp: 39,
            attack: 52,
            defense: 43,
            special_attack: 60,
            special_defense: 50,
            speed: 65
        }
    }
]

const container = document.querySelector(".grid-container")
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")

for (let pokemon of pokemons) {
    const div = document.createElement("div");
    div.classList.add("pokemon")
    div.id = pokemon.id

    const img = document.createElement("img")
    img.src = pokemon.img

    const p = document.createElement("p")
    p.classList.add("name")
    p.innerText = pokemon.name

    div.append(img, p)

    div.addEventListener("click", () => {
        const img = document.createElement("img")
        const h2 = document.createElement("h2")

        img.src = pokemon.img
        h2.innerText = pokemon.name

        modal.append(img, h2)
        closeModal()
    })

    container.appendChild(div)
}

overlay.addEventListener("click", () => closeModal())


document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal()
    }
})

const closeModal  = () => {
    modal.classList.toggle("modal-open")
    overlay.classList.toggle("overlay-open")
}