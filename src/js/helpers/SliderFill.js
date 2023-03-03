export default class SliderFill {
    // This function is responsible to create the trailing color and setting the fill.
    applyFill = (slider) => {
      // Range Slider Properties.
      // Fill : The trailing color that you see when you drag the slider.
      // background : Default Range Slider Background
      const sliderProps = {
        fill: "#0B1EDF",
        background: "rgba(255, 255, 255, 0.214)",
      };
  
      // Text which will show the value of the range slider.
      const sliderValue = document.querySelector(".length-title");
  
      const percentage =
        (100 * (slider.value - slider.min)) / (slider.max - slider.min);
      const bg = `linear-gradient(90deg, ${sliderProps.fill} ${percentage}%, ${
        sliderProps.background
      } ${percentage + 0.1}%)`;
      slider.style.background = bg;
      sliderValue.setAttribute("data-length", slider.value);
    };
  }
  