/**
 * Closures are lexical scope.
 * Scopes limit access to variables based on position in the source code.
 */

var question = "What is the answer to the Ultimate Question?";

// Functions define new scopes in JavaScript.
function deepThought() {
  // Inner scopes can access outer scopes.
  if (question) {
    var hasTheAnswer = true;
    return 42;
  }
}

deepThought();

// => 42

function earth() {
  // Outer scopes cannot access inner scopes.
  return hasTheAnswer ? "cup of tea." : "panic!";
}

earth();

// => ReferenceError: hasTheAnswer is not defined
