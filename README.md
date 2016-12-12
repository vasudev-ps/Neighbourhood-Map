# Neighbourhood-Map
Neighbourhood-Map is a project where users can fetch details of their near-by establishments like school, hospitals etc.

###File Structure
* css
  * `style.css` - Takes care of the web-page style.
* js
  * `app.js` - Works with `knockout.js` for wikipedia lists.
  * `map.js` - Works with Google Maps API for map related things.
* `index.html` - Main page

###Manual
User will first see their location on the map.(location service of browser should be on if not app will prompt the user).

For more options user should click on the hamberger menu on the top left side of application and enter the options.

User can select the required establishments to be searched on the map.  

###How does it work?
Project Uses 
* API: Google maps and Wikipedia.
* javascript libraries: jQuery and Knockout

* Googles geolocations Service is used to set the map to user area.

* Project uses google places library to search the place of user input.Autocomlete service is used.
  Depending upon the input Wikipedia API returns the result of related wiki links, which will be automatically binded to DOM using  knockout JS.
* The Map will be focused upon the user input city and a marker will be placed.
* If user selects any type of establishments. Markers will be placed based on the results of google places library.
* On clicked on the marker the details of the places will be displayed in infowindow.

To Experience the Site [Click Here](https://vasudev-ps.github.io/Neighbourhood-Map/).

Feel free to exchange thaughts.