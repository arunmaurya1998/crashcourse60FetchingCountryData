let root = document.querySelector("#root");
let Fetch_CountryButton = document.querySelector("#fetchButton");
let asceButton = document.querySelector("#asceButton");
let dsceButton = document.querySelector("#dsceButton");

let countery_url =
  "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries";
let asce_url =
  "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=asc";
let dsce_url =
  "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=desc";

Fetch_CountryButton.addEventListener("click", function () {
  getData(countery_url);
});

asceButton.addEventListener("click", function () {
  getData(asce_url);
});

dsceButton.addEventListener("click", function () {
  getData(dsce_url);
});

async function getData(url) {
  let res = await fetch(url);
  let data = await res.json();
  let finalData = data.data;

  showData(finalData);
}

function showData(finalData) {
  finalData.map((ele, i) => {
    let container = document.createElement("div");
    container.id = "container";

    let countery = document.createElement("h2");
    countery.innerText = `COUNTERY : ${ele.country}`;

    let Id = document.createElement("number");
    Id.innerText = `ID : ${ele.id}`;
    Id.id = "id";

    let Rank = document.createElement("number");
    Rank.innerText = `RANK : ${ele.Rank}`;
    Rank.id = "rank";

    let population = document.createElement("number");
    population.innerText = `POPULATION : ${ele.population}`;

    population.id = { population };

    container.append(countery, Id, Rank, population);
    root.append(container);
  });
}
