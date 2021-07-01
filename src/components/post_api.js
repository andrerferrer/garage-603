import { insertCarToDOM } from './insert_car_to_the_dom';

const postAPI = (event) => {
  const url = `https://wagon-garage-api.herokuapp.com/garage-603/cars`;

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
        brand: brand,
        model: model,
        owner: owner,
        plate: plate
      }
    )
  }

  fetch(url, options)
    .then(res => res.json())
    .then(insertCarToDOM);
}

export { postAPI };