var url = window.location.pathname.split("/");
var dogId = url[2];

fetch(`/api/dogs/${dogId}`)
  .then(response => response.json())
  .then(response => postDog(response.dog))
  .catch(err => console.log(err));

function postDog(dog){
  var div = document.querySelector(".dog");
  var h3 = document.createElement("h3");
  var tag = document.createElement("a");
  h3.classList.add("name");
  h3.textContent = dog.name;
  tag.href = `/dogs/${dogId}`;
  h3.appendChild(tag);
  var img = document.createElement("img");
  img.classList.add("profile-picture");
  img.src = "/" + dog.profilePicture;
  img.alt = dog.name;
  var bio = document.createElement("p");
  bio.classList.add("bio");
  bio.textContent = dog.bio;
  div.appendChild(h3);
  div.appendChild(img);
  div.appendChild(bio);
}
