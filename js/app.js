    var markerValue = 'hospital';
    var defaultAddress = 'Bangalore';
    function toggleNav() {
        document.getElementById("Nav").classList.toggle("open");
    }
    //change map center according user input in searchbox
    document.getElementById('zoom-to-area').addEventListener('click', function() {
        userArea();
        $("#service :selected").removeAttr("selected");
        $("#filter :selected").removeAttr("selected");
    });
    //Toggle the nav when clicked on map
    document.getElementById('map').addEventListener('click', function() {
        if ($("#Nav").hasClass("open")) {
            document.getElementById("Nav").classList.toggle("open");
        }
    });
    //find the markers within default 5km radius
    var find = function(value) {
         markerValue = value;
         var pos = getplace();
    }
    //function to filter markers
    var filter = function(dist){
        if(markerValue == ' '){
            alert("please select the establishment")
        }
        else{
            var pos = getplace();
            findPlaces(markerValue,pos,dist);
        }
    }
    // function to place info window requested
    // from list in navigation
    var infoDisplay = function(value){
        callFromList(value);
        if ($("#Nav").hasClass("open")) {
            document.getElementById("Nav").classList.toggle("open");
        }
    }
    //Knockout viewmodel used to update wikipedia links and marker list automaticaly
    var viewModel = function() {
        var self = this;
        self.name = ko.observable("vasudev");
        self.link = ko.observableArray();
        self.src = ko.observableArray();
        self.marker = ko.observableArray();
        self.onWikiclick = function(){
            self.marker.removeAll();
            self.addItem();
        }
        self.addItem = function() {
            var address = document.getElementById('area-text').value;
            var wikiInput = address.split(", ");
            var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + wikiInput[0] + "&format=json&callback=wikiCallback";
            console.log(wikiUrl);
            var wikiTimeout = setTimeout(function() {
                $('#wikipedia').text('Failed to get Wiki Resources');
            }, 8000);
            $.ajax(wikiUrl, {
                dataType: 'jsonp',
                success: function(data) {
                    self.link(data[1]);
                    self.src(data[3]);
                    clearTimeout(wikiTimeout);
                }
            })
        }
        self.wikiFirst = function(){
            if(userLocalAddr == ''){
                var address = 'Bangalore';
            }
            else{
                var address = userLocalAddr;
            }
            var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
                           address + "&format=json&callback=wikiCallback";
            $.ajax(wikiUrl, {
                dataType: 'jsonp',
                success: function(data) {
                    self.link(data[1]);
                    self.src(data[3]);
                }
            })
        }

        //remove all item from marker list
        self.removeList = function(){
            self.marker.removeAll();
        }
        //add all marker name to marker array
        self.addMarkerName = function(){
            self.marker(markerName);
        }
        setTimeout(function() {
        self.wikiFirst();
            }, 5000);

    };
    ko.applyBindings(new viewModel());