(function (children, partner, location, job) {
  const message = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
  document.getElementById("fortune").textContent = message;
})(3, "Alex", "Paris", "Software Engineer");
