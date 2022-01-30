<<<<<<< HEAD
/* eslint-disable import/prefer-default-export */
export const selectSwitch = (key) => {
=======
const selectSwitch = (key) => {
>>>>>>> 7ac6e2d7df90df53ea77c53d827eb2b4e58691f0
  switch (key) {
    case "All":
      return "http://35.180.205.240:5000/api/products/";
    case "Cold Snaks":
      return "http://35.180.205.240:5000/api/products/filter?categories=cold snaks,coldSnaks";
    case "Soup":
      return "http://35.180.205.240:5000/api/products/filter?categories=soup";
    case "Salads":
      return "http://35.180.205.240:5000/api/products/filter?categories=salads";
    case "Desert":
      return "http://35.180.205.240:5000/api/products/filter?categories=desert";
    case "Hot Snaks":
      return "http://35.180.205.240:5000/api/products/filter?categories=hot snaks";
<<<<<<< HEAD
=======

>>>>>>> 7ac6e2d7df90df53ea77c53d827eb2b4e58691f0
    default:
      return "dispatch(getUrl('http://35.180.205.240:5000/api/products/";
  }
};
<<<<<<< HEAD
=======
export default selectSwitch;
>>>>>>> 7ac6e2d7df90df53ea77c53d827eb2b4e58691f0
