import GeneratePassword from "../helpers/GeneratePassword";
import SliderFill from "../helpers/SliderFill.js";

export default class EventListeners {
  addEventListener = () => {
    const sliderFill = new SliderFill();

    // Result viewbox container
    const resultContainer = document.querySelector(".result");
    // Update Css Props of the COPY button
    // Getting the bounds of the result viewbox container
    let resultContainerBound = {
      left: resultContainer.getBoundingClientRect().left,
      top: resultContainer.getBoundingClientRect().top,
    };

    // Selecting the Range Slider container which will effect the LENGTH property of the password.
    const slider = document.querySelector(".range-slider");
    // Text which will show the value of the range slider.
    const sliderValue = document.querySelector(".length-title");
    // Text appear after copy button is clicked
    const copiedInfo = document.querySelector(".result-info.left");
    // Text info showed after generate button is clicked
    const copyInfo = document.querySelector(".result-info.right");
    // The Viewbox where the result will be shown
    const resultEl = document.getElementById("result");
    const lengthEl = document.getElementById("slider");
    // Checkboxes representing the options that is responsible to create differnt type of password based on user
    const uppercaseEl = document.getElementById("uppercase");
    const lowercaseEl = document.getElementById("lowercase");
    const numberEl = document.getElementById("number");
    const symbolEl = document.getElementById("symbol");
    // Button to copy the text
    const copyBtn = document.getElementById("btn-copy");

    // if this variable is trye only then the copyBtn will appear, i.e. when the user first click generate the copyBth will interact.
    let generatedPassword = false;
    // Button to generate the password
    const generateBtn = document.getElementById("generate");

    const passwordGenerator = new GeneratePassword();

    // Copy Password in clipboard
    copyBtn.addEventListener("click", () => {
      const textarea = document.createElement("textarea");
      const password = resultEl.innerText;
      if (!password || password == "CLICK GENERATE") {
        return;
      }
      textarea.value = password;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();

      copyInfo.style.transform = "translateY(200%)";
      copyInfo.style.opacity = "0";
      copiedInfo.style.transform = "translateY(0%)";
      copiedInfo.style.opacity = "0.75";
    });

    // When Generate is clicked Password id generated.
    generateBtn.addEventListener("click", () => {
      const length = +lengthEl.value;
      const hasLower = lowercaseEl.checked;
      const hasUpper = uppercaseEl.checked;
      const hasNumber = numberEl.checked;
      const hasSymbol = symbolEl.checked;
      generatedPassword = true;
      resultEl.innerText = passwordGenerator.generatePassword(
        length,
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol
      );
      copyInfo.style.transform = "translateY(0%)";
      copyInfo.style.opacity = "0.75";
      copiedInfo.style.transform = "translateY(200%)";
      copiedInfo.style.opacity = "0";
    });

    // Using Event Listener to apply the fill and also change the value of the text.
    slider.querySelector("input").addEventListener("input", (event) => {
      sliderValue.setAttribute("data-length", event.target.value);
      sliderFill.applyFill(event.target);
    });

    // This will update the position of the copy button based on mouse Position
    resultContainer.addEventListener("mousemove", (e) => {
      resultContainerBound = {
        left: resultContainer.getBoundingClientRect().left,
        top: resultContainer.getBoundingClientRect().top,
      };
      if (generatedPassword) {
        copyBtn.style.opacity = "1";
        copyBtn.style.pointerEvents = "all";
        copyBtn.style.setProperty(
          "--x",
          `${e.x - resultContainerBound.left}px`
        );
        copyBtn.style.setProperty("--y", `${e.y - resultContainerBound.top}px`);
      } else {
        copyBtn.style.opacity = "0";
        copyBtn.style.pointerEvents = "none";
      }
    });
    window.addEventListener("resize", (e) => {
      resultContainerBound = {
        left: resultContainer.getBoundingClientRect().left,
        top: resultContainer.getBoundingClientRect().top,
      };
    });
  };
}
