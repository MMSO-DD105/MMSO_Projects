const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")



let keysPressed = {};




class Player{
  constructor(){
    this.x=150;
    this.y=140;
    this.vxl =0;
    this.vxr=0;
    this.vyt=0;
    this.vyb=0;
  }
  draw(){
    ctx.fillStyle = "red"
    ctx.fillRect(this.x,this.y,10,10)
  }
  update(){
      this.x += this.vxr;
      this.x += this.vxl;
      this.y += this.vyt;
      this.y += this.vyb;
     
      if (this.x >= canvas.width-8){
        this.x-=3;
        
      }
      if (this.x <= -3){
        this.x+=3;
        
      }
    
      if (this.y > canvas.height-9){
        this.y-=3;
        
      }
      if (this.y <= -3){
        this.y+=3;
        
      }
      this.draw()
    }
    
  }


  class Projectiles{
    constructor(x, y, velocity){
      this.x = x;
      this.y = y;
      this.velocity = velocity
    }
    draw(){
      ctx.fillStyle = "green"
      ctx.fillRect(this.x,this.y,3,3)
  
    }
    update(){
     
      this.y -= this.velocity
      this.draw()
    }
  }



const p1 = new Player()

const projectiles = []
animate()
console.log(p1)

let solde = 40;

document.addEventListener("keydown", (event) =>{
    
    keysPressed[event.keyCode] = true;
    

  if (event.keyCode == 32){
    
      if (solde != 0){ 
        projectiles.push(new Projectiles(p1.x+2.9,p1.y,5) )
        solde -= 1;
      } 
  }

  
 
})

document.addEventListener("keyup", (event) =>{
    
  
  

if (event.keyCode == 32){
  delete keysPressed[event.keyCode]
    
}



})




document.addEventListener("keydown", (event) =>{
  
  if (event.keyCode == 82){
        solde += 40;
  }
 
})



document.addEventListener("keydown", (event) =>{
  if (event.keyCode == 39){
    
    
    p1.vxl = 3;
  }

  if (event.keyCode == 39 && keysPressed['32']){
    if (solde != 0){ 
      projectiles.push(new Projectiles(p1.x+2.9,p1.y,5) )
      solde -= 1;
    } 
    
    
  }

  
})

document.addEventListener("keyup", (event) =>{
  if (event.keyCode == 39){
   
    p1.vxl = 0;
  }
})


document.addEventListener("keydown", (event) =>{
  if (event.keyCode == 37){
    
    p1.vxr = -3;
  }
  if (event.keyCode == 37 && keysPressed['32']){
  if (solde != 0){ 
    projectiles.push(new Projectiles(p1.x+2.9,p1.y,5) )
    solde -= 1;
  } 
  
  
}
})



document.addEventListener("keyup", (event) =>{
  if (event.keyCode == 37){
    
    p1.vxr = 0;
  }
})



document.addEventListener("keydown", (event) =>{
  if (event.keyCode == 40){
    
    p1.vyb = 3;
  }
  if (event.keyCode == 40 && keysPressed['32']){
    if (solde != 0){ 
      projectiles.push(new Projectiles(p1.x+2.9,p1.y,5) )
      solde -= 1;
    } }
})

document.addEventListener("keyup", (event) =>{
  if (event.keyCode == 40){
    
    p1.vyb = 0;
  }
})

document.addEventListener("keydown", (event) =>{
  if (event.keyCode == 38){
    
    p1.vyt = -3;
  }

  if (event.keyCode == 38 && keysPressed['32']){
    if (solde != 0){ 
      projectiles.push(new Projectiles(p1.x+2.9,p1.y,5) )
      solde -= 1;
    } }
})

document.addEventListener("keyup", (event) =>{
  if (event.keyCode == 38){
    
    p1.vyt = 0;
  }
})








 

    


function animate(){
  requestAnimationFrame(animate)
  ctx.clearRect(0,0,canvas.width,canvas.height)
  p1.update()
  for (proj of projectiles){
    proj.update()
      setTimeout(()=>{if (proj.y <0 ){projectiles.splice(proj);}}, 0);
    }
  }
  
  
