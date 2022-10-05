getCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      displayCountries(data);
    })
    .catch((err) => console.log(err));
};

getCountries();

const displayCountries = (data) => {
  console.log(data);
  const parentDiv = document.getElementById("demo");

  data.map((e) => {
    const h3 = document.createElement("ul");
    h3.innerHTML = `<li>${e.name.common} <img src=${e.flags.png} /> </li>`;
    parentDiv.appendChild(h3);
  });
};
