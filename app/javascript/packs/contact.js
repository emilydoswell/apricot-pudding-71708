// PH copied from Joshua Studly's fantastic article, going to understand it and then change it for my purposes.
const FloatLabel = (() => {

  // add active class
  const handleFocus = (e) => {
      const target = e.target;
      target.parentNode.classList.add('active');
      target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
  };

  // remove active class
  const handleBlur = (e) => {
      const target = e.target;
      if (!target.value) {
          target.parentNode.classList.remove('active');
      }
      target.removeAttribute('placeholder');
  };

  // register events
  // PH had to add in the if statements so I could use the effect for both standard inputs and the textarea.
  const bindEvents = (element) => {
      if (element.querySelector('input') !== null) {
          const floatField = element.querySelector('input');
          floatField.addEventListener('focus', handleFocus);
          floatField.addEventListener('blur', handleBlur);

      } else if (element.querySelector('textarea') !== null) {
          const floatText = element.querySelector('textarea');
          floatText.addEventListener('focus', handleFocus);
          floatText.addEventListener('blur', handleBlur);
      }
  };

  // get DOM elements
  const init = () => {
      // PH changed it to look for the form-float class
      const floatContainers = document.querySelectorAll('.form-float');

      floatContainers.forEach((element) => {
          if (element.querySelector('input') !== null) {
              if (element.querySelector('input').value) {
                  element.classList.add('active');
              }
          } else if (element.querySelector('textarea') !== null) {

              if (element.querySelector('textarea').value) {
                  element.classList.add('active');
              }
          }

          bindEvents(element);
      });
  };

  return {
      init: init
  };
})();

FloatLabel.init();