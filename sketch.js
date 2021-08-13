

var a = prompt('Enter the first variable: ');
var b = prompt('Enter the second variable:')

function setup(){
  var b2 = createButton("click here to Swap the numbers");
  b2.mousePressed(swap);

  }


function draw()
{
}

function swap(){
  [a,b] = [b,a];

  console.log("The value of the after swapping:",+a);
  console.log("The value of the b after swapping:",+b);
}




