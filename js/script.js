//ingredient array
var ingredientArray = ["<img src='imgs/blue puff.png'></img>", "<img src='imgs/dark green leaves.png'></img>", "<img src='imgs/green leaves.png'></img>", "<img src='imgs/pink puff.png'></img>", "<img src='imgs/red blossom.png'></img>", "<img src='imgs/white blossom.png'></img>", "<img src='imgs/white puff.png'></img>", "<img src='imgs/yellow puff.png'></img>"];

//potion array    
var potionArray = ["<img src='imgs/deadly poison.png'></img>", "<img src='imgs/greater healing potion.png'></img>", "<img src='imgs/greater magic potion.png'></img>", "<img src='imgs/greater wish potion.png'></img>", "<img src='imgs/lesser healing potion.png'></img>", "<img src='imgs/lesser magic potion.png'></img>", "<img src='imgs/lesser wish potion.png'></img>", "<img src='imgs/mild poison.png'></img>", "<img src='imgs/nothing.png'>", "<img src='imgs/regular healing potion.png'></img>", "<img src='imgs/regular magic potion.png'></img>", "<img src='imgs/regular poison.png'></img>", "<img src='imgs/regular wish potion.png'></img>"];

var ingredient1 = 0;
var ingredient2 = 0;

//Update ing1 by clicking
$("#ing1").on("click", updateIng1);

function updateIng1() {
  var randomIng1 = Math.floor((Math.random() * ingredientArray.length));

  $("#ing1").html(ingredientArray[randomIng1]);

  ingredient1 = randomIng1;

  console.log(ingredient1);
}

//Update ing2 by clicking
$("#ing2").on("click", updateIng2);

function updateIng2() {
  var randomIng2 = Math.floor((Math.random() * ingredientArray.length));

  $("#ing2").html(ingredientArray[randomIng2]);

  ingredient2 = randomIng2;

  console.log(ingredient2);
}

//Update potion based on ing1 and ing2
$("#potion").on("click", createPotion);

function createPotion() {
  if (ingredient1 == 0) {
    if (ingredient2 == 0) {
      console.log(ingredient1);
      $("#potion").html(potionArray[8]);

    } else if (ingredient2 == 1) {
      $("#potion").html(potionArray[4]);

    } else if (ingredient2 == 2) {
      $("#potion").html(potionArray[4]);

    } else if (ingredient2 == 3) {
      $("#potion").html(potionArray[9]);

    } else if (ingredient2 == 4) {
      $("#potion").html(potionArray[1]);

    } else if (ingredient2 == 5) {
      $("#potion").html(potionArray[1]);

    } else if (ingredient2 == 6) {
      $("#potion").html(potionArray[9]);

    } else if (ingredient2 == 7) {
      $("#potion").html(potionArray[9]);

    }
  } else if (ingredient1 == 1) {
    if (ingredient2 == 0) {
      $("#potion").html(potionArray[11]);
    } else if (ingredient2 == 1) {
      $("#potion").html(potionArray[8]);
    } else if (ingredient2 == 2) {
      $("#potion").html(potionArray[7]);
    } else if (ingredient2 == 3) {
      $("#potion").html(potionArray[11]);
    } else if (ingredient2 == 4) {
      $("#potion").html(potionArray[0]);
    } else if (ingredient2 == 5) {
      $("#potion").html(potionArray[0]);
    } else if (ingredient2 == 6) {
      $("#potion").html(potionArray[11]);
    } else if (ingredient2 == 7) {
      $("#potion").html(potionArray[11]);
    }
  } else if (ingredient1 == 2) {
    if (ingredient2 == 0) {
      $("#potion").html(potionArray[12]);
    } else if (ingredient2 == 1) {
      $("#potion").html(potionArray[6]);
    } else if (ingredient2 == 2) {
      $("#potion").html(potionArray[8]);
    } else if (ingredient2 == 3) {
      $("#potion").html(potionArray[12]);
    } else if (ingredient2 == 4) {
      $("#potion").html(potionArray[3]);
    } else if (ingredient2 == 5) {
      $("#potion").html(potionArray[3]);
    } else if (ingredient2 == 6) {
      $("#potion").html(potionArray[12]);
    } else if (ingredient2 == 7) {
      $("#potion").html(potionArray[12]);
    }
  } else if (ingredient1 == 3) {
    if (ingredient2 == 0) {
      $("#potion").html(potionArray[10]);
    } else if (ingredient2 == 1) {
      $("#potion").html(potionArray[5]);
    } else if (ingredient2 == 2) {
      $("#potion").html(potionArray[5]);
    } else if (ingredient2 == 3) {
      $("#potion").html(potionArray[8]);
    } else if (ingredient2 == 4) {
      $("#potion").html(potionArray[2]);
    } else if (ingredient2 == 5) {
      $("#potion").html(potionArray[2]);
    } else if (ingredient2 == 6) {
      $("#potion").html(potionArray[10]);
    } else if (ingredient2 == 7) {
      $("#potion").html(potionArray[10]);
    }
  } else if (ingredient1 == 4) {
    if (ingredient2 == 0) {
      $("#potion").html(potionArray[11]);
    } else if (ingredient2 == 1) {
      $("#potion").html(potionArray[7]);
    } else if (ingredient2 == 2) {
      $("#potion").html(potionArray[7]);
    } else if (ingredient2 == 3) {
      $("#potion").html(potionArray[11]);
    } else if (ingredient2 == 4) {
      $("#potion").html(potionArray[8]);
    } else if (ingredient2 == 5) {
      $("#potion").html(potionArray[0]);
    } else if (ingredient2 == 6) {
      $("#potion").html(potionArray[11]);
    } else if (ingredient2 == 7) {
      $("#potion").html(potionArray[11]);
    }
  } else if (ingredient1 == 5) {
    if (ingredient2 == 0) {
      $("#potion").html(potionArray[10]);
    } else if (ingredient2 == 1) {
      $("#potion").html(potionArray[5]);
    } else if (ingredient2 == 2) {
      $("#potion").html(potionArray[5]);
    } else if (ingredient2 == 3) {
      $("#potion").html(potionArray[10]);
    } else if (ingredient2 == 4) {
      $("#potion").html(potionArray[2]);
    } else if (ingredient2 == 5) {
      $("#potion").html(potionArray[8]);
    } else if (ingredient2 == 6) {
      $("#potion").html(potionArray[10]);
    } else if (ingredient2 == 7) {
      $("#potion").html(potionArray[10]);
    }
  } else if (ingredient1 == 6) {
    if (ingredient2 == 0) {
      $("#potion").html(potionArray[12]);
    } else if (ingredient2 == 1) {
      $("#potion").html(potionArray[6]);
    } else if (ingredient2 == 2) {
      $("#potion").html(potionArray[6]);
    } else if (ingredient2 == 3) {
      $("#potion").html(potionArray[12]);
    } else if (ingredient2 == 4) {
      $("#potion").html(potionArray[3]);
    } else if (ingredient2 == 5) {
      $("#potion").html(potionArray[3]);
    } else if (ingredient2 == 6) {
      $("#potion").html(potionArray[8]);
    } else if (ingredient2 == 7) {
      $("#potion").html(potionArray[12]);
    }
  } else if (ingredient1 == 7) {
    if (ingredient2 == 0) {
      $("#potion").html(potionArray[9]);
    } else if (ingredient2 == 1) {
      $("#potion").html(potionArray[4]);
    } else if (ingredient2 == 2) {
      $("#potion").html(potionArray[4]);
    } else if (ingredient2 == 3) {
      $("#potion").html(potionArray[9]);
    } else if (ingredient2 == 4) {
      $("#potion").html(potionArray[1]);
    } else if (ingredient2 == 5) {
      $("#potion").html(potionArray[1]);
    } else if (ingredient2 == 6) {
      $("#potion").html(potionArray[9]);
    } else if (ingredient2 == 7) {
      $("#potion").html(potionArray[8]);
    }
  }
};


