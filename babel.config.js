module.exports = {
  presets: [
    "@babel/preset-env", // transforma sintaxes do JS para o browser entender. Ex: arrow function, import/export
    "@babel/preset-react" // transforma sintaxes do REACT para o browser enteder. Ex: JSX
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties"
  ],
}