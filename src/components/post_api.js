import { insertCarToDOM } from './insert_car_to_the_dom';

const extractFromIds = (ids) => {
  const result = {};
  ids.forEach((id) => {
    const value = document.getElementById(id).value;
    result[id] = value;
  });
  return result;
};

const postAPI = (event) => {
  const url = `https://wagon-garage-api.herokuapp.com/garage-603/cars`;

  event.preventDefault();
  console.log(event);
  // take all the information that the user has inputted
  const body = extractFromIds(['brand', 'model', 'plate', 'owner']);

  // fetch the api to create a car with that information
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }

  fetch(url, options)
    .then(res => res.json())
    .then(insertCarToDOM);
}

export { postAPI };