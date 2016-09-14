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