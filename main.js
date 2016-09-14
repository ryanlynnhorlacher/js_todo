	let allLists = []

	function showLists() {
		let $lists = $('#list');
		$lists.empty();
		let x = 1;
		allLists.forEach(function(list) {
			$lists.append(`<li id="${x}">${list.name}
				           <button class="new_item">Add Item</button>
				           <button class="view_items">View Items</button></li>`)
			x += 1
		})
	}

	$('#new_list').on('click', function() {
		$('#item_form_div').slideUp();
		$('#items').empty();
		$('#list_form_div').slideToggle();
	})

	$('#list_form').submit(function(e) {
		e.preventDefault();
		let list = new List($('#list_name').val());
		allLists.push(list);
		$(e.target.parentElement).slideToggle();
		showLists();
	})

	$(document).on('click', '.view_items', function() {
		$('#list_form_div').slideUp();
		showListItems(parseInt(this.parentElement.id) - 1);
	})

	function showListItems(listNumber) { 
		$('#items').empty();
		let list = allLists[listNumber]
			list.itemArray.forEach(function(item) {
				$('#items').append(`<li id="${item.name}">${item.name}</li>`)
		})
	}

	$(document).on('click','.new_item', function(e) {
		e.preventDefault();
		$('#item_form_div').slideToggle();
		$('#list_identifier').val(parseInt(this.parentElement.id - 1))
	})

	$('#form_submit').on('click', function(e) {
		e.preventDefault();
		let name = $('#item_name').val();
		let dueDate = $('#item_due_date').val();
		let completed = $('#checkbox').val();
		let list = $('#list_identifier').val();
		if(name === '') {
			alert('You must enter a name before submitting!')
			} else {
				let item = new Item(name, dueDate, completed)
				allLists[list].addItem(item);
			}
		showListItems(list)

	})
//ALL DONE IN es6
//have for for user to add todo item
//todo item shows up in list
//if user clicks item it gets marked complete or not complete
//have a visual indicator of complete

//BONUS
//ability to delete todos
//filter todos by complete / imcomplete / all
//edit todo name



class List {
	constructor(name) {
		this.name = name
		this.itemArray = []
	}

	addItem(item) {
			this.itemArray.push(item)
		return {item}
	}

	totalItems() {
		return this.itemArray.length 
	}
}

class Item {
	constructor(name, dueDate, completed = false) {
		this.name = name;
		this.dueDate = dueDate;
		this.completed = completed;
	}

	complete() {
		this.completed = true
	}

	update(name, dueDate, completed) {
		this.name = name;
		this.dueDate = dueDate;
		this.completed = completed;
	}
}