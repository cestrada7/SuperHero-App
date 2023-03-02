const SUPERHERO_STOKEN = 6336656536346054
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_STOKEN}`
const getHeroBtn = document.getElementById('getHero-btn')
const heroImageDiv = document.getElementById('heroImage')
const searchButton = document.getElementById('searchButton')
const searchInput = document.getElementById('searchInput')

const getSuperHero = (id) => {
  fetch(`${BASE_URL}/${id}`)
  .then(response => response.json())
  .then(json => {
    const superHero = json
    showHeroInfo(superHero)
    
  })
    
}

const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`
  const img = `<img src='${character.image.url}' height=300 width=300/>`


  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p> ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
  }).join('')
  heroImageDiv.innerHTML = `${name.toLocaleUpperCase()} ${img} ${stats}`
  return stats.join('')
}

const getSearchSuper = (name) => {
  fetch(`${BASE_URL}/search/${name}`)
  .then(response => response.json())
  .then(json => {
    const hero = json.results[0]
    showHeroInfo(hero)
  })
    
}




const randomHero = () => {
  const numberOfHeroes = 731
  return Math.floor(Math.random() * numberOfHeroes) + 1
}

getHeroBtn.onclick = () => getSuperHero(randomHero())
searchButton.onclick = () => getSearchSuper(searchInput.value)


