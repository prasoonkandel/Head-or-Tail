document.getElementById("game_div").style.display = "none";
document.getElementById("results").style.display = "none";

const username_summit = (event) => {
  event.preventDefault();
  console.log("summited");

  const username = document.getElementById("username").value;
  if (username.length >= 5) {
    // Valid username
  } else {
    alert("Username must be at least 5 characters long");
    return;
  }

  document.getElementById("user").innerHTML = username;
  document.getElementById("username_div").style.display = "none";
  document.getElementById("game_div").style.display = "block";
};

const start_game = (side) => {
  document.getElementById("flip").style.display = "block";
  document.getElementById("results").style.display = "none";

  setTimeout(() => {
    get_results(side);
    document.getElementById("flip").style.display = "none";
    document.getElementById("results").style.display = "block";
  }, 2000);
};

const get_results = (side) => {
  const coin_side = Math.floor(Math.random() * 2) + 1; // 1 or 2
  let flip_side = coin_side === 1 ? "Head" : "Tail";

  document.getElementById("results").innerHTML =
    "Coin was flipped and result was: <h1>" + flip_side + "</h1>";

  if (
    (coin_side === 1 && side === "head") ||
    (coin_side === 2 && side === "tail")
  ) {
    won();
  } else {
    lost();
  }
};

const won = () => {
  setTimeout(() => {
    alert("YOU WON");
  }, 2000);
};

const lost = () => {
  setTimeout(() => {
    alert("YOU LOST");
  }, 2000);
};
