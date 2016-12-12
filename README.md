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

Project uses google places library to search the place of user input. 
Depending upon the input Wikipedia API returns the result of related wiki links, which will be automatically binded to DOM using knockout JS.
