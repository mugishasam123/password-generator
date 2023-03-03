import "../css/index.css";
import SliderFill from "./helpers/SliderFill.js";
import DisableCheckBox from "./helpers/DisableCheckBox.js";
import EventListeners from "./listeners/EventListeners.js";

const sliderFill = new SliderFill();
const disableCheckBox = new DisableCheckBox();
const eventListeners = new EventListeners();

// Checkboxes representing the options that is responsible to create differnt type of password based on user
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");

// Selecting the Range Slider container which will effect the LENGTH property of the password.
const slider = document.querySelector(".range-slider");

// Selecting the range input and passing it in the applyFill func.
sliderFill.applyFill(slider.querySelector("input"));
eventListeners.addEventListener();

[uppercaseEl, lowercaseEl, numberEl, symbolEl].forEach((el) => {
  el.addEventListener("click", () => {
    disableCheckBox.disableOnlyCheckbox();
  });
});
