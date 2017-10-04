const app = "I don't do much."

function reset() {
  var kittens = ["Milo", "Otis", "Garfield"];
}

reset();

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

reset();

function destructivelyPrependKitten(name) {
  kittens.pop(name);
  return kittens;
}
