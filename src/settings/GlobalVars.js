const isProduction = true

const apiUrlDev = 'http://localhost:3000'
const apiUrlProd = 'https://blooming-coast-39874.herokuapp.com'

const apiUrl = isProduction
  ? apiUrlProd
  : apiUrlDev

const GlobalVars = {
  isProduction: isProduction,
  apiUrl: apiUrl
}

export default GlobalVars;