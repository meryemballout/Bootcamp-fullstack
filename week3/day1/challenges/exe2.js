function drawPatternSingleLoop(lines) {
  let pattern = "";
  for (let i = 1; i <= lines; i++) {
    pattern += "* ".repeat(i) + "\n";
  }
  console.log(pattern);
}

// Call the function
drawPatternSingleLoop(6);
