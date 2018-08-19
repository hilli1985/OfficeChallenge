//write your code here to make the tests pass
class Document {
    constructor (employeeName) {
        this.EmployeeName = employeeName;
     } 
}

class Employee {
    constructor (name) {
        this.name = name;
     }
     work(office) {
         for (let i=0; i<10; i++) {
            office.documents.push(new Document(this.name));
        }
     } 
}

class Manager {
    constructor (name) {
        this.name = name;
        this.employees = [];
     } 
     hireEmployee(name){
         this.employees.push(new Employee(name));
     }
     askEmployeesToWork(office){
        for (let i=0; i<this.employees.length; i++){
            this.employees[i].work(office);
        }
     }
}


class Cleaner {
    constructor(name){
        this.name=name;
    }
    clean() {
        console.log("Clean");
    }
}

class Office{
    constructor(){
        this.documents=[];
        this.managers=[];
        this.cleaners=[];
    }
    hireCleaner(name) {  
        this.cleaners.push(new Cleaner(name));  
    }
    
    hireManager(name) {
        this.managers.push(new Manager(name));      
    }
    startWorkDay() {
        for (let i=0; i<this.managers.length; i++){
            this.managers[i].askEmployeesToWork(this);
        }
        for (let i=0; i<this.cleaners.length; i++){
            this.cleaners[i].clean();
        }
    }
}

const office = new Office();