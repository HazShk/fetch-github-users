var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
/*
use dir to see the value property
console.dir(nameInputEl);
*/
var formSubmitHandler = function (event) {
  event.preventDefault();
  //get value from input element(username)
  var username = nameInputEl.value.trim();
  if (username) {
    getUserRepos(username);
    nameInputEl.value = "";
  } else {
    alert("Please enter a GitHub username");
  }
};

var getUserRepos = function (user) {
  //format the github api url
  var apiUrl = "https://api.github.com/users/" + user + "/repos";

  //make a request to the url
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
};
userFormEl.addEventListener("submit", formSubmitHandler);
