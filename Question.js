class Question {

    constructor() {
      //this.input = createInput("Name");
     //this.button = createButton('Play');
      //this.greeting = createElement('h2');
      this.title = createElement('h2');
    
    }
    hide(){
     // this.greeting.hide();
     // this.button.hide();
      //this.input.hide();
      this.title.hide();
    }
  
    display(){
   
      this.title.html("MyQuiz Game");
      this.title.position(350, 0);
      
      this.question.html("Question- Which is the largest country in the world?");
      this.question.position(350, 0);

      this.option1.html("A: Egypt");
      this.option1.position(150, 80);

      this.option2.html("B: United States");
      this.option2.position(150, 100);

      this.option3.html("C: Russia");
      this.option3.position(150, 120);
      
      this.option4.html("D: Canada");
      this.option4.position(150, 140);

      this.input1.position(150,200);

 }
  
}