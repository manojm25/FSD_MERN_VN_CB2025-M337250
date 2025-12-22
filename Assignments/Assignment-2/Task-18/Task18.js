function startExam(callback) {
    console.log("Exam started");
  setTimeout(() => {
    callback();
  }, 1000);
}

function evaluateExam(callback) {
  setTimeout(() => {
    console.log("Evaluating answers");
    callback();
  }, 2000);
}

function declareResult() {
  setTimeout(() => {
    console.log("Result declared");
  }, 2000);
}

// Execute in sequence
startExam(() => {
  evaluateExam(() => {
    declareResult();
  });
});
