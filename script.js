class Student{
	
	constructor(name, age){
		this.name = name;
		this.age = age;
		this.marks = [];
	}

	setMark(lessonId, mark){
		this.marks[lessonId] = mark;
	}

	getAverageMark(){

		var sum = 0;
		var count = 0;

		this.marks.forEach(function(mark){
			sum += mark;
			count++;
		});

		if(sum && count){
			return Math.round(sum / count);
		}

		return null;
	}

}

//GROUP
class Group extends Array{

	constructor(){
		super();
		this.push.apply(this, arguments);
	}

	setStudent(student){
		this.push(student);
	}

	deleteStudentByName(name){

		var index = this.findIndex(function(element, index){
			return element.name === name;
		});


		if(index != -1){
			this.splice(index, 1);
		} 
	}

	getStudentByName(name){

		var student = this.find(function(element){
			return element.name === name;
		});

		return student ? student : null;
	}

	getAverageStudentsMarkByLesson(lessonId){

		var sum = 0;
		var count = 0;

		this.forEach(function(student){
			if(student.marks[lessonId]){
				sum += student.marks[lessonId];
				count++;
			}
		});

		if(sum && count){
			return Math.round(sum / count);
		}

		return null;
	}

	getStudentsListSortedByName(){

		return this.sort(function(firstStudent, secondStudent){

			if(firstStudent.name < secondStudent.name){
				return 1;
			}else if(firstStudent.name > secondStudent.name){
				return -1;
			}

			return 0;
		});
	}

	getStudentsListSortedByAverageMark(){

		return this.sort(function(firstStudent, secondStudent){

			var firstStudentAverageMark = firstStudent.getAverageMark();
			var secondStudentAverageMark = secondStudent.getAverageMark();

			if(firstStudentAverageMark < secondStudentAverageMark){
				return 1;
			}else if(firstStudentAverageMark > secondStudentAverageMark){
				return -1;
			}

			return 0;
		});
	}
}

var nana = new Student('Nana', 19);
var alex = new Student('Alex', 22);
var lola = new Student('Lola', 21);

var group = new Group(nana, alex, lola);

// добавляем студентов
group.setStudent(new Student('Ulya', 20));
group.setStudent(new Student('Irina', 25));
group.setStudent(new Student('Vlad', 24));

// ставим оценки

group[0].setMark(1, 3);
group[0].setMark(2, 10);

group[1].setMark(1, 10);
group[1].setMark(2, 8);

group[2].setMark(1, 9);
group[2].setMark(2, 4);

group[3].setMark(1, 9);
group[3].setMark(2, 10);

// // получаем студента
console.log(group.getStudentByName('Irina'));

// // средний бал студента
console.log(group[0].getAverageMark())

// // средняя оценка группы за занятие номер 1
console.log(group.getAverageStudentsMarkByLesson(1));

// // удаляем студента
group.deleteStudentByName('Irina');

// // список после удаления
console.log(group);

// // средняя оценка группы за занятие номер 1 после удаления студента
console.log(group.getAverageStudentsMarkByLesson(1));

// // список студентов отсортированный по имени
console.log(group.getStudentsListSortedByName());

// // список студентов отсортированный по среднему баллу
console.log(group.getStudentsListSortedByAverageMark());

