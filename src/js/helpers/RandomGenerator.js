import RandomSecure from "./RandomSecure.js";

export default class RandomGenerator {
  // Generator Functions
  // All the functions that are responsible to return a random value taht we will use to create password.
  getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  };
  getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  };
  getRandomNumber = () => {
    const randomSecure = new RandomSecure();
    return String.fromCharCode(
      Math.floor(randomSecure.secureMathRandom() * 10) + 48
    );
  };
  getRandomSymbol = () => {
   const symbols = '~!@#$%^&*()_+{}":?><;.,';
    return symbols[Math.floor(Math.random() * symbols.length)];
  };
}
