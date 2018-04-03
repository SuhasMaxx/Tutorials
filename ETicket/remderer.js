eTicketModule.renderCityShows = function (cityData) {
    //---- Create HTML
    var movContent = '<div>'
    for (var i = 0; i < cityData.movies.length; i++) {
        movContent += '<h4>' + cityData.movies[i].date + '</h4>';
        movContent += '<hr></hr>';

        for (var j = 0; j < cityData.movies[i].movies.length ; j++) {
            movContent += '<div class="movie-block" data-movie-date="' + cityData.movies[i].date + '" data-movie-name="' + cityData.movies[i].movies[j] + '">' + cityData.movies[i].movies[j] + '</div>';
        }
    }
    movContent += '</div>';
    document.getElementsByClassName("movie-list-viewer")[0].innerHTML = movContent;
    document.getElementsByClassName("city-name")[0].innerHTML = cityData.name;

    //----- Show Section
    eTicketModule.showSection("city-list");

    // --- Attach event listeners
    var movieBlocks = document.getElementsByClassName("movie-block");
    for (var n = 0; n < movieBlocks.length; n++) {
        movieBlocks[n].removeEventListener("click", eTicketModule.dynamics.eventListeres.movieBlockClick);
        movieBlocks[n].addEventListener("click", eTicketModule.dynamics.eventListeres.movieBlockClick);
    }
}

eTicketModule.dynamics = {
    'eventListeres': {
        'movieBlockClick': function (e) {
            eTicketModule.loadTheatres(e.target.getAttribute('data-movie-name'), e.target.getAttribute('data-movie-date'));
        },

        'movieTimeBlockClick': function (e){
            eTicketModule.loadUserForm(e.target.getAttribute('data-theatre-name'), e.target.getAttribute('data-movie-time'));
        }
    }
};

eTicketModule.renderUserForm = function () {
    // Reset User Form
    eTicketModule.UIEements.userForm = 

    //----- Show Section
    eTicketModule.showSection('user-data');
}

eTicketModule.renderShowTimes = function (theatreData) {
    //---- Create HTML
    var movContent = '<div>'
    for (var i = 0; i < theatreData.length; i++) {
        movContent += '<h4>' + theatreData[i].name + '</h4>';
        movContent += '<hr></hr>';

        for (var j = 0; j < theatreData[i].showTimes.length ; j++) {
            movContent += '<div class="movie-time-block" data-movie-time="' + theatreData[i].showTimes[j] + '" data-theatre-name="' + theatreData[i].name + '">' + theatreData[i].showTimes[j] + '</div>';
        }
    }
    movContent += '</div>';
    document.getElementsByClassName("movie-showtime-viewer")[0].innerHTML = movContent;

    //----- Show Section
    eTicketModule.showSection('movie-time');
    // --- Attach event listeners
    var movieBlocks = document.getElementsByClassName("movie-time-block");
    for (var n = 0; n < movieBlocks.length; n++) {
        movieBlocks[n].removeEventListener("click", eTicketModule.dynamics.eventListeres.movieTimeBlockClick);
        movieBlocks[n].addEventListener("click", eTicketModule.dynamics.eventListeres.movieTimeBlockClick);
    }
}

eTicketModule.renderConfirmation = function () {
    
    eTicketModule.UIEements.sections.confirmReciept.innerHTML = "Hi " + eTicketModule.currentSelection.userName + ",<br><br> You have selected " + eTicketModule.currentSelection.noOfTickets + " tickets to the movie \"" + eTicketModule.currentSelection.movieName + "\" in theatre :" + eTicketModule.currentSelection.theatre + " on " + eTicketModule.currentSelection.movieDate + " and show timing is : " + eTicketModule.currentSelection.show;

    eTicketModule.showSection('confirm');

        //eTicketModule.currentSelection.theatre = theatreName;
    //eTicketModule.currentSelection.show = showTime;
}

eTicketModule.initiateUIElements = function () {
    eTicketModule.UIEements = {
        'sections': {
            cityNameLine: document.getElementById('city-details-line'),
            movieListViewer: document.getElementsByClassName("movie-list-viewer")[0],
            movieShowtimeViewer: document.getElementsByClassName("movie-showtime-viewer")[0],
            userDataForm: document.getElementsByClassName("user-data-form")[0],
            confirmReciept: document.getElementsByClassName("confirmation-reciept")[0],
            errorSection: document.getElementsByClassName("error-div")[0]
        },
        'userFormElements': {
            fName: document.getElementsByClassName('first-name')[0],
            lName: document.getElementsByClassName('last-name')[0],
            email: document.getElementsByClassName('user-email')[0],
            mobile: document.getElementsByClassName('user-mobile')[0],
            ntickets: document.getElementsByClassName('user-tickets')[0]
        }
    };

    document.getElementById('user-data-button').onclick = function () {
        //debugger;
        if (eTicketModule.validateUserForm()) {
            eTicketModule.renderConfirmation();
        }
    };
}

eTicketModule.validateUserForm = function () {
    eTicketModule.UIEements.sections.errorSection.style.display = "none";
    //debugger;
    var errors = [];
    if (!(eTicketModule.UIEements.userFormElements.fName.value && eTicketModule.UIEements.userFormElements.fName.value.trim() !== "")) {
        errors.push('Invalid first name');
    }
    if (!(eTicketModule.UIEements.userFormElements.lName.value && eTicketModule.UIEements.userFormElements.lName.value.trim() !== "")) {
        errors.push('Invalid last name');
    }
    if (!(eTicketModule.UIEements.userFormElements.email.value && eTicketModule.utilities.validateEmail(eTicketModule.UIEements.userFormElements.email.value))) {
        errors.push('Invalid email');
    }
    if (!(eTicketModule.UIEements.userFormElements.mobile.value && eTicketModule.utilities.validatePhoneNumber(eTicketModule.UIEements.userFormElements.mobile.value))) {
        errors.push('Invalid phone');
    }
    if (!(eTicketModule.UIEements.userFormElements.ntickets.value && (Number(eTicketModule.UIEements.userFormElements.ntickets.value) > 0 && Number(eTicketModule.UIEements.userFormElements.ntickets.value) < 10))) {
        errors.push('Invalid ticket number');
    }
    //debugger;
    if (errors.length) {
        eTicketModule.UIEements.sections.errorSection.innerHTML = errors;
        eTicketModule.UIEements.sections.errorSection.style.display = "block";
        return false;
    }
    eTicketModule.currentSelection.userName = eTicketModule.UIEements.userFormElements.fName.value + " " + eTicketModule.UIEements.userFormElements.lName.value;
    eTicketModule.currentSelection.noOfTickets = eTicketModule.UIEements.userFormElements.ntickets.value;
    return true;
}

eTicketModule.initUtilities = function () {
    eTicketModule.utilities = {};
    eTicketModule.utilities.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    eTicketModule.utilities.validatePhoneNumber = function (number) {
        var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        return re.test(String(number));
    }
}

eTicketModule.showSection = function (sectionName) {
    var sections = eTicketModule.UIEements.sections;
    switch (sectionName) {
        case "city-list":
            sections.cityNameLine.style.display = "block";
            sections.movieListViewer.style.display = "block";
            sections.movieShowtimeViewer.style.display = "none";
            sections.userDataForm.style.display = "none";
            sections.confirmReciept.style.display = "none";
            sections.errorSection.style.display = "none";
            break;
        case "movie-time":
            sections.cityNameLine.style.display = "block";
            sections.movieListViewer.style.display = "none";
            sections.movieShowtimeViewer.style.display = "block";
            sections.userDataForm.style.display = "none";
            sections.confirmReciept.style.display = "none";
            sections.errorSection.style.display = "none";
            break;
        case "user-data":
            sections.cityNameLine.style.display = "block";
            sections.movieListViewer.style.display = "none";
            sections.movieShowtimeViewer.style.display = "none";
            sections.userDataForm.style.display = "block";
            sections.confirmReciept.style.display = "none";
            sections.errorSection.style.display = "none";
            break;
        case "confirm":
            sections.cityNameLine.style.display = "none";
            sections.movieListViewer.style.display = "none";
            sections.movieShowtimeViewer.style.display = "none";
            sections.userDataForm.style.display = "none";
            sections.confirmReciept.style.display = "block";
            sections.errorSection.style.display = "none";
            break;
        default:
            sections.cityNameLine.style.display = "block";
            sections.movieListViewer.style.display = "none";
            sections.movieShowtimeViewer.style.display = "none";
            sections.userDataForm.style.display = "none";
            sections.confirmReciept.style.display = "none";
            sections.errorSection.style.display = "none";
            break;

    }
}
