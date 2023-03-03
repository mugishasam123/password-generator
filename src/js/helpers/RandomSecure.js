export default class RandomSecure {
    // Random more secure value
    secureMathRandom = () => {
      return (
        window.crypto.getRandomValues(new Uint32Array(1))[0] /
        (Math.pow(2, 32) - 1)
      );
    };
  }
  