# HSHacks

This is a collection of resources for HSHack-ers at my talk on using [Firebase](https://firebase.google.com) to develop web applications. Firebase makes it easy for your app to share and save data in real-time, and its generous free tier make it perfect for hackathon prototypes.

## Compliments

Let's start by sharing a single string. I'm going to set up three files - an `index.html` file, a `style.css`, and `app.js` file in the same folder. 

*index.html*:
```html
<html>
	<head>
		<link rel="stylesheet" href="style.css">
	</head>
	<body>
		<h1 id="text">Enter a compliment</h1>
		<input id="compliment">
		<button id="submit">submit</button>
		
		<script src="https://www.gstatic.com/firebasejs/3.7.3/firebase.js"></script>
		<script>
      // Copied from the Firebase console for my project
		  firebase.initializeApp({
		    apiKey: "AIzaSyCMIrxz12pg8WJz8NhM6RqMgBr1aGnDEM4",
		    authDomain: "compliments-73fb6.firebaseapp.com",
		    databaseURL: "https://compliments-73fb6.firebaseio.com",
		    storageBucket: "compliments-73fb6.appspot.com",
		    messagingSenderId: "567022977230"
		  });
		</script>
		<script src="app.js"></script>
	</body>
</html>

```

The `app.js` file is where we will program the HTML elements in the page to control and change from the Firebase data.

*app.js*:
```
// References to HTML elements in the page
var text = document.getElementById('text');
var compliment = document.getElementById('compliment');
var submit = document.getElementById('submit');

// Get a reference to the database location
var reference = firebase.database().ref();
```

First we will [set up the button](compliments/app1.js), then the [

Here are some ideas for your `style.css` file:

 - [light theme](compliments/style-light.css)
 - [dark theme](compliments/style-dark.css)

## Wish list

Now let's share a list of strings.

## Instant messenger

