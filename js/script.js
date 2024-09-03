"use strict";
// 1
class Book {
	constructor(title, author, pages) {
		this.title = title;
		this.author = author;
		this.pages = pages;
	}

	displayInfo() {
		console.log(`Title: ${this.title}`);
		console.log(`Author: ${this.author}`);
		console.log(`Pages: ${this.pages}`);
	}
}

const book1 = new Book('Транссерфинг реальности', 'Вадим Зеланд', 736);
book1.displayInfo();
console.log('/* --------------- */');
const book2 = new Book('1984', 'Джордж Оруэлл', 328);
book2.displayInfo();



console.log('//========================================================================================================================================================');
// 2

class Student {
	constructor(name, age, grade) {
		this.name = name;
		this.age = age;
		this.grade = grade;
	}

	displayInfo() {
		console.log(`Name: ${this.name}`);
		console.log(`Age: ${this.age}`);
		console.log(`Grade: ${this.grade}`);
	}
}

const student1 = new Student('John Smith', 16, '10th grade');
student1.displayInfo();
console.log('/* --------------- */');
const student2 = new Student('Jane Doe', 17, '11th grade');
student2.displayInfo();
