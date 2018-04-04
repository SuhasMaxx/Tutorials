window.onload = function () {
    eTicketModule.initPageData();
};

var eTicketModule = {};

eTicketModule.initPageData = function () {
    eTicketModule.initiateUIElements();
    eTicketModule.initData();
    eTicketModule.initUtilities();
    eTicketModule.loadCity();
}

eTicketModule.loadCity = function () {
    // For now we have data for mumbai city
    eTicketModule.getCityData('mumbai');
    
    if (eTicketModule.data.cities.length) {
        var currentCity = eTicketModule.data.cities[0];
        eTicketModule.renderCityShows(currentCity);
    }
}

eTicketModule.loadTheatres = function (movieName, movieDate) {
    eTicketModule.currentSelection.movieName = movieName;
    eTicketModule.currentSelection.movieDate = movieDate;
    eTicketModule.getTheatreData(movieName, movieDate);
    if (eTicketModule.data.theatres.length) {
        eTicketModule.renderShowTimes(eTicketModule.data.theatres);
    }
}


eTicketModule.loadUserForm = function (theatreName, showTime) {
    eTicketModule.currentSelection.theatre = theatreName;
    eTicketModule.currentSelection.show = showTime;
    eTicketModule.checkUserData();
    eTicketModule.renderUserForm();
}


