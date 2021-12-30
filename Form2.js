class Form2 {

    constructor() {
        this.input = createInput("").attribute("placeholder", "Enter Your Name");
        this.button = createButton('Play');
        
        this.title = createElement('h2');
        this.title1 = createElement('h2');
        this.title2 = createElement('h2');
        this.title3 = createElement('h2');
      }
      hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
      }i
    
      display(){
        background(introBGImage);
       
        this.title.html("Welcome To My Game !");
        this.title.style('font-size', '35px');
        this.title.style('font-family', 'Comic Sans MS');
  
  
        this.title1.html("Collect as many toffees as you can!.");
        this.title1.style('font-size', '20px');
        this.title1.style('font-family', 'Comic Sans MS');
  
        this.title2.html("Try not to touch the obstacles.");
        this.title2.style('font-size', '20px');
        this.title2.style('font-family', 'Comic Sans MS');
  
        this.title3.html("Press P to jump!");
        this.title3.style('font-size', '20px');
        this.title3.style('font-family', 'Comic Sans MS');
        
        this.title.position(width/2-170, 30);
        this.title1.position(width/2-160, 100);
        this.title2.position(width/2-150, 150);
        this.title3.position(width/2-100, 200);
        this.input.position(width/2-150,300);
        this.input.style('width', '300px');
        this.input.style('height', '30px');
        this.input.style('font-family', 'Comic Sans MS');
        this.input.style('font-size', '20px');
        this.button.position(width/2-50,350);
     
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.title1.hide();
        this.title2.hide();
        this.title3.hide();
        player2name = this.input.value();
        console.log(player2name);
        gameState=2;
       
      });
  
    
    }
  }
  