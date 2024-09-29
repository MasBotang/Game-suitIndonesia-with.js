function getComputerChoice() {
  const computer = Math.random();

  if (computer < 0.34) return "telunjuk";
  if (computer >= 0.34 && computer < 0.67) return "kelingking";
  return "jempol";
}

function getHasil(person, computer) {
  if (person === computer) return "Seri";
  if (person === "jempol") return computer === "telunjuk" ? "Menang!" : "Kalah";
  if (person === "telunjuk")
    return computer === "kelingking" ? "Menang!" : "Kalah";
  if (person === "kelingking")
    return computer === "jempol" ? "Menang!" : "Kalah";
}

const jempol = document.getElementById("jempol");
jempol.addEventListener("click", function () {
  const computerChoice = getComputerChoice();
  const personChoice = this.id;
  const hasil = getHasil(personChoice, computerChoice);

  const imgComputer = document.querySelector(".computerChoice");
  imgComputer.setAttribute(
    "src",
    "../Game Suten/assets/" + computerChoice + ".png"
  );

  const imgPerson = document.querySelector(".personChoice");
  imgPerson.setAttribute("src", "../Game Suten/assets/jempol.png");

  const info = document.querySelector(".result");
  info.innerHTML = getHasil(personChoice, computerChoice);
});

const kelingking = document.getElementById("kelingking");
kelingking.addEventListener("click", function () {
  const computerChoice = getComputerChoice();
  const personChoice = this.id;
  const hasil = getHasil(personChoice, computerChoice);

  const imgComputer = document.querySelector(".computerChoice");
  imgComputer.setAttribute(
    "src",
    "../Game Suten/assets/" + computerChoice + ".png"
  );

  const imgPerson = document.querySelector(".personChoice");
  imgPerson.setAttribute("src", "../Game Suten/assets/kelingking.png");

  const info = document.querySelector(".result");
  info.innerHTML = getHasil(personChoice, computerChoice);
});

const telunjuk = document.getElementById("telunjuk");
telunjuk.addEventListener("click", function () {
  const computerChoice = getComputerChoice();
  const personChoice = this.id;
  const hasil = getHasil(personChoice, computerChoice);

  const imgComputer = document.querySelector(".computerChoice");
  imgComputer.setAttribute(
    "src",
    "../Game Suten/assets/" + computerChoice + ".png"
  );

  const imgPerson = document.querySelector(".personChoice");
  imgPerson.setAttribute("src", "../Game Suten/assets/telunjuk.png");

  const info = document.querySelector(".result");
  info.innerHTML = getHasil(personChoice, computerChoice);
});
