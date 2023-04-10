var btn1 = document.getElementById('btn1');
var cats = document.getElementById('cats');

btn1.addEventListener('click', Cat);

function Cat() {
  fetch('https://cataas.com/c')
    .then(response => {
      if (response.ok) {
        return response.blob();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then(blob => {
      const objectURL = URL.createObjectURL(blob);
      cats.innerHTML = `<img src=${objectURL} alt="cats" />`
    })
    .catch(error => {
      console.error(error);
    });
}