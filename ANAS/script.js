const apiUrl = `https://api.github.com/repos/MMSO-DD105/MMSO_Projects/contents/ANAS/projects`;
const accessToken = "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";

let main = document.querySelector("main")
async function Getdata(){
  try{
  const data = await fetch(apiUrl)
  const dataJSON = await data.json()
  dataJSON.forEach((itemValue,index)=>{
    if (itemValue.type == "dir"){
    main.innerHTML += "<div class='card python text-center col-lg-custom col-12  col-md-6'style='height:70%; '><img src=' "+ "ProjectImages/" + itemValue.name+ ".jpg" +"'  class='card-img-top h-50 "+ "idimg" + index +"'  /><div class='card-body'><h6 class='card-title'>"+ itemValue.name +"</h6><p class='card-text " + `iddes${index}`+ "'>Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href='projects/" + itemValue.name +  "' class='btn btn-primary w-75 h-25 fs-6'>Lanche</a></div></div>"
    }
    })




}catch(err){
    console.log(err)

}}


function getDescription(){
    const xhr =  new XMLHttpRequest() // no parenthesis
  xhr.open("GET","projects/Description.txt",true)

  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        let des = xhr.responseText
        let desArray = des.split("\n")
        console.log(main.children)
        let children =main.children;
        for(let i=0;i<=children.length;i++ ){
            document.querySelector(`.iddes${i}`).textContent = desArray[i]
        }
        

    }  
}
  xhr.send()
}

async function go(){
    let b = await Getdata()
    getDescription()
}
 go()
