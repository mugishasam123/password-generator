import RandomGenerator from "../helpers/RandomGenerator.js";

export default class GeneratePassword {
  // Function responsible to generate password and then returning it.
  generatePassword = (length, lower, upper, number, symbol) => {
    const randomGenerator = new RandomGenerator();
    // Object of all the function names that we will use to create random letters of password
    const randomFunc = {
      lower: randomGenerator.getRandomLower,
      upper: randomGenerator.getRandomUpper,
      number: randomGenerator.getRandomNumber,
      symbol: randomGenerator.getRandomSymbol,
    };
    let generatedPassword = "";
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
      (item) => Object.values(item)[0]
    );
    if (typesCount === 0) {
      return "";
    }
    for (let i = 0; i < length; i++) {
      typesArr.forEach((type) => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
      });
    }
    return generatedPassword.slice(0, length);
  };
}
