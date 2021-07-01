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

export { insertCarToDOM };
