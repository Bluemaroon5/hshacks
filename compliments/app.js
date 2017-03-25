var text = document.querySelector('h1');
var compliment = document.querySelector('input');
var submit = document.querySelector('button');

var reference = firebase.database().ref();

submit.onclick = function() {
	reference.set(compliment.value);
	compliment.value = '';
};

reference.on('value', function(snapshot) {
	text.innerText = snapshot.val();
});
