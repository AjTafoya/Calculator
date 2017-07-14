$(document).ready(function(){
  //variable that stores user input for later calculation
  var inputs = [""];
  //variable to store user inputs
  var totalString = [""];
  //variable for opertators to compare to user input for logic
  var operators1 = ["/","*","-","+"];
  //variable for . validation
  var dot = ["."];
  //variable for number validation
  var num = [0,1,2,3,4,5,6,7,8,9];
  //function that gets users inputs and displays
  function getValue(input){
    //if last user input was a dot console logs duplicate .
    if(dot.includes(inputs[inputs.length-1])=== true && input==="."){
      console.log("duplicate '.'");
    }
    //validation so it doesnt start with a operator besides the . if not push input
    else if(inputs.length===1 && operators1.includes(input)===false){
      inputs.push(input);
    }
    //validation to determine wether or not last user input was an operator if not push input
    else if(operators1.includes(inputs[inputs.length-1])===false){
      inputs.push(input);
    }
    //else if num is a number push input
    else if(num.includes(Number(input))){
      inputs.push(input);
    }
    //call update function
    update();

  }
  //update function sets total string = user inputs joined into one array and pushes to the screen
  function update(){
    totalString = inputs.join("");
    //updates html
    $("#calculation").html(totalString);
  }
  //function that sets total string equal to the evalutaion of total string
  function getTotal(){
    totalString = inputs.join("");
    $("#calculation").html(eval(totalString));
  }
  // click function that mostly gets the id of the user input
  $("button").on("click", function(){
    //if user input = erase clears all user inputs
    if(this.id==="erase"){
      inputs = ["0"];
      update();
    }
    //if user input = back pops the last user input out of inputs array
    else if(this.id==="back"){
      inputs.pop();
      update();
    }
    //if user inputs is the = run the function getTotal
    else if(this.id==="total"){
      getTotal();

    }
    else{
      if(inputs[inputs.length-1].indexOf("/","*","-","+","-1")===-1){
         getValue(this.id);
         }
         else{
         getValue(this.id);
         }
    }

  });


});
