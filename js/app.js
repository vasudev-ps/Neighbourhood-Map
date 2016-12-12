    function toggleNav() {
        document.getElementById("Nav").classList.toggle("open");
    }
    //change map center according user input in searchbox
    document.getElementById('zoom-to-area').addEventListener('click', function() {
        userArea();
    });
    //Toggle the nav when clicked on map
    document.getElementById('map').addEventListener('click', function() {
        if ($("#Nav").hasClass("open")) {
            document.getElementById("Nav").classList.toggle("open");
        }
    });

    var find = function(value) {
        console.log(value);
        findPlaces(value);
    }
    //Knockout viewmodel used to update wikipedia links automaticaly
    var viewModel = function() {
        var self = this;
        self.name = ko.observable("vasudev");
        self.link = ko.observableArray();
        self.src = ko.observableArray();
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
    };
    ko.applyBindings(new viewModel());