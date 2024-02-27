var detailsForm = document.querySelector("#destination_form_details");
detailsForm.addEventListener("submit", handleFormSubmit); // Corrected addEventListener syntax

function handleFormSubmit(event) {
    event.preventDefault();
    var destName = event.target.elements["name"].value;
    var destLocation = event.target.elements["location"].value; // Corrected from "name" to "location"
    var destPhoto = event.target.elements["photo"].value;
    var destDescription = event.target.elements["description"].value;

    for (var i = 0; i < detailsForm.elements.length; i++) { // Corrected form elements access
        detailsForm.elements[i].value = "";
    }

    var wishListContainer = document.getElementById("title");
    if (wishListContainer.children.length === 0) {
        wishListContainer.innerHTML = "My Wish List"; // Modified to use the wishListContainer variable
    }

    var card = createDestinationCard(destName, destLocation, destPhoto, destDescription); // Call createDestinationCard function
    var wishList = document.getElementById("wish_list");
    wishList.appendChild(card); // Append the created card to the wish list
}

function createDestinationCard(name, location, photoURL, description) { // Corrected function name and parameter names
    var card = document.createElement("div");
    card.className = "card";

    var img = document.createElement("img");
    img.setAttribute("alt", name);

    var constantPhotoUrl = "images/signpost.jpg";
    img.setAttribute("src", photoURL.length === 0 ? constantPhotoUrl : photoURL);

    card.appendChild(img);

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var cardTitle = document.createElement("h3");
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    var cardSubTitle = document.createElement("h3");
    cardSubTitle.innerText = location;
    cardBody.appendChild(cardSubTitle);

    if (description.length !== 0) {
        var cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerText = description;
        cardBody.appendChild(cardText);
    }

    var cardDeleteBtn = document.createElement("button");
    cardDeleteBtn.innerText = "Remove";
    cardDeleteBtn.addEventListener("click", removeDestination);
    cardBody.appendChild(cardDeleteBtn);

    card.appendChild(cardBody);
    return card;
}

function removeDestination(event) {
    var card = event.target.parentElement.parentElement;
    card.remove();
}
