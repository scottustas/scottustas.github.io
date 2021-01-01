document.querySelector('button').addEventListener('click', function () {
  document.querySelector('main')
          .appendChild(document.querySelector('.card').cloneNode(true));
}, false);

document.querySelectorAll('button')[1].addEventListener('click', function () {
  if (document.querySelectorAll('.card')[1]) {
    document.querySelector('.card').remove();
  }
          
}, false);