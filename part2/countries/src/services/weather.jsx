import axios from "axios";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = import.meta.env.VITE_SECRET_KEY;

const getData = (lat, lon) => {
  const request = axios.get(
    `${baseUrl}lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  );
  return request.then((response) => {
    return response.data;
  });
};

export default { getData };
