var list = document.querySelector('ol');
var newItem = document.querySelector('input');
var submit = document.getElementById('add');
var clear = document.getElementById('clear');

var reference = firebase.database().ref();

submit.onclick = function() {
	reference.push(newItem.value);
	newItem.value = '';
};

newItem.addEventListener('keyup', function(e) {
	if (e.which == 13) {
		submit.onclick();
	}
});

clear.onclick = function() {
	reference.remove();
};

function remove(id) {
	reference.child(id).remove();
};

reference.on('value', function(snapshot) {
	var todo = snapshot.val(),
		items = '';

	for (var key in todo) {
		items += '<li>' + todo[key] + ' <button onclick="remove(\'' + key + '\')">remove</button></li>';
	}

	list.innerHTML = items;
});
