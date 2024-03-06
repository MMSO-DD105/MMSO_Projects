const userName = "MMSO-DD105";
const reposName = "MMSO_Projects";
const listOwners = ["KHALID", "ANAS", "ZAKARIA", "MOHAMED"];
const apiUrl = `https://api.github.com/repos/${userName}/${reposName}/contents/${listOwners[0]}/projects`;

let promise = fetch(apiUrl); // fetch function return a promise

promise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((element) => {
      let urlForlders = apiUrl + "/" + element.name;
      fetch(urlForlders)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(
            "There was a problem with your fetch operation ---> ",
            error
          );
        });
    });
  })
  .catch((error) => {
    console.log("There was a problem with your fetch operation ---> ", error);
  });
