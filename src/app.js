// TODO: Build an awesome garage!

// to create a new car in the garage
// the user will add the input and will submit
const form = document.getElementById('new-car');
console.log(form);

const url = `https://wagon-garage-api.herokuapp.com/garage-603/cars`;

// when the user submits
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event);
  // take all the information that the user has inputted
  const brand = document.getElementById('brand').value;
  const model = document.getElementById('model').value;
  const plate = document.getElementById('plate').value;
  const owner = document.getElementById('owner').value;

  // fetch the api to create a car with that information
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        "brand": brand,
        "model": model,
        "owner": owner,
        "plate": plate
      }
    )
  }

  fetch(url, options)
    .then(res => res.json())
    .then(insertCarToDOM)
  // add the car to the screen
});

const buildHTML = (car) => {
  return `
    <div class="car">
      <div class="car-image">
        <img src="http://loremflickr.com/280/280/${car.brand} ${car.model}" />
      </div>
      <div class="car-info">
        <h4>${car.brand} ${car.model}</h4>
        <p><strong>Owner:</strong>${car.owner}</p>
        <p><strong>Plate:</strong> ${car.plate}</p>
      </div>
    </div>  
  `;
};

const insertCarToDOM = (car) => {
  // insert the car to the DOM
  const list = document.querySelector('.cars-list');
  // create the html for the car
  const carHTML = buildHTML(car);
  list.insertAdjacentHTML('beforeend', carHTML);
};

// to read all the cars
const getAPI = () => {
  fetch(url)
    .then(res => res.json())
    .then((cars) => {
      cars.forEach(insertCarToDOM);
    })
}

getAPI();