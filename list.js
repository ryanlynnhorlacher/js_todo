class List {
	constructor(name) {
		this.name = name
		itemArray = ['Nothing to display']
	}

	addItem(item) {
		if(this.itemArray[0] === 'Nothing to Display') {
			this.itemArray[0] = item
		} else {
			this.itemArray.push(item)
		}
		return {item}
	}

	totalItems() {
		return { itemArray.length }
	}
}