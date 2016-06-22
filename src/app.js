export class Welcome {
	//heading = 'Hello World';
	firstName = 'Theo';
	lastName = 'Adorno';

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	submit() {
		alert(`Welcome, ${this.fullName}!`);
	}
}
