const userName = "MMSO-DD105";
const reposName = "MMSO_Projects";
const listOwners = ["KHALID", "ANAS", "ZAKARIA", "MOHAMED"];
const apiUrl = `https://api.github.com/repos/${userName}/${reposName}/contents/${listOwners[0]}/projects`;

let promise = fetch(apiUrl); // fetch function return a promise
let Projects = []
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
        .then((datas) => {
          console.log(datas)
          let obj = datas.reduce((newobj,itemValue)=>{
            if (itemValue.name.slice(itemValue.name.indexOf(".")+1) == "txt" ){
              let htmlContent = '';
              fetch(itemValue.download_url)
              .then(response => {
                if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
              })
              .then(htmlContent => {
                newobj["description"] = htmlContent.type();
              })
              .catch(error => console.error('Error fetching content:', error));;
            }
            if (itemValue.name.slice(itemValue.name.indexOf(".")+1) == "jpg" ){
              newobj["img"] = itemValue.path.slice(itemValue.path.indexOf("/")+1);
            }
            return newobj
          },{})
          obj["Pname"]=element.name

          let main = document.querySelector("main.row")
          main.innerHTML += `<div class="card python text-center col-3"> <img src='${obj.img}' class='card-img-top' /><div class='card-body'> <h6 class='card-title'>Card ${obj.Pname}</h6><p class='card-text'>${obj.description} </p> <a href='projects/${obj.Pname}' class='btn btn-primary w-75 h-25 fs-6'>Lanche</a></div></div>`
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


