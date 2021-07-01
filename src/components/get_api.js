import { insertCarToDOM } from './insert_car_to_the_dom';

// to read all the cars
const getAPI = () => {
  const url = `https://wagon-garage-api.herokuapp.com/garage-603/cars`;

  fetch(url)
    .then(res => res.json())
    .then((cars) => {
      cars.forEach(insertCarToDOM);
    });
};

export { getAPI };
