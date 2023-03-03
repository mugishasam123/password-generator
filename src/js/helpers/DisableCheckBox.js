export default class DisableCheckBox {
    // function that handles the checkboxes state, so at least one needs to be selected. The last checkbox will be disabled.
    disableOnlyCheckbox = () => {
      // Checkboxes representing the options that is responsible to create differnt type of password based on user
      const uppercaseEl = document.getElementById("uppercase");
      const lowercaseEl = document.getElementById("lowercase");
      const numberEl = document.getElementById("number");
      const symbolEl = document.getElementById("symbol");
  
      let totalChecked = [uppercaseEl, lowercaseEl, numberEl, symbolEl].filter(
        (el) => el.checked
      );
      totalChecked.forEach((el) => {
        if (totalChecked.length == 1) {
          el.disabled = true;
        } else {
          el.disabled = false;
        }
      });
    };
  }
  