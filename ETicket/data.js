eTicketModule.initData = function () {
    eTicketModule.data = {
        cities: [],
        userData: null,
        
    }

    eTicketModule.currentSelection =  {
            cityname: ''
    }
}

eTicketModule.checkUserData = function () {
    if (eTicketModule.data.userData) {
        eTicketModule.data.userData = null;
    }
}


eTicketModule.getCityData = function (cityname) {
    // Make an ajax call here and get data fdrom server // For now we are using dummy data

    eTicketModule.data.cities.push(
    {
        name: cityname,
        movies: [{
            date: "4/2/2018",
            movies: ["Jack", "Blaclk", "Sancient", "Casper"]
        }, {
            date: "5/2/2018",
            movies: ["Jack", "Blaclk", "Sancient", "Casper"]
        }, {
            date: "6/2/2018",
            movies: ["Jack", "Blaclk"]
        }]
    });
    eTicketModule.currentSelection.cityname = cityname;
}

eTicketModule.getTheatreData = function (cityname) {
    // Make an ajax call here and get data fdrom server // For now we are using dummy data
    if (eTicketModule.data.theatres) {
        eTicketModule.data.theatres.length = 0;
    } else {
        eTicketModule.data.theatres = [];
    }
    eTicketModule.data.theatres.push(
    {
        name: "Fame",
        showTimes: ["9:30", "10:30", "11:30", "18:00"]  
    }, {
        name: "INOX",
        showTimes: ["9:30", "10:30", "11:30"]
    }, {
        name: "CINEMAX",
        showTimes: ["9:30", "10:30", "11:30", "18:00"]
    }, {
        name: "PVR",
        showTimes: ["9:30", "10:30"]
    });
    eTicketModule.currentSelection.cityname = cityname;
}

