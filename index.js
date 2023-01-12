// OOP PRESENTATION: 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// OOP or Object Oriented Programming is a programming paradigm that uses objects and 
//      all the actions (or methods) and properties that act on said objects to build applications. 
//      The paradigm builds on the idea of having a collection of interacting objects to build apps. 
// The four main pilLars of OOP are as follows: 
//      1) ENCAPSULATION
//      2) ABSTRACTION
//      3) INHERITANCE
//      4) POLYMORPHISM
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ENCAPSULATION: 
//      In OOP, we group related properties and methods that operate on the same same set of variables in a group called "objects" later we can define who has access to these properties
//          or methods using modifiers (protected, public, private). 
//      Private modifiers - can ONLY be accessed by methods or properties of the same class. 
//      Protected modifies - can be accessed by methods or properties of the same class AND its subclasses. 
//      Public modifiers - can be accessed by any code. 
//      This practice helps reduce complexity and increase re-usability across the entire application. 
//      This pillar allows us to create both private and public properties or methods. 
// In the Employee Class below, we see an example of ENCAPSULATION as we can observe how the class holds a set of both private and public properties
//      as well as a set of Methods or functions that all make reference to things that are directly liked to the Employee Class.
// class Employee {
//     private _wage: number;
//     private _clearance: number;
//     public _employeeRole: string;
//     constructor(wage: number, employeeRole: string, clearance: number) {
//         this._wage = wage;
//         this._employeeRole = employeeRole;
//         this._clearance = clearance;
//     }
//     public setClearance(level: number) {
//         this._clearance = level;
//     }
//     public getRole(): string {
//         return this._employeeRole;
//     }
//     public setWage(wage: number): void {
//         this._wage = wage;
//     }
// }
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ABSTRACTION & INHERITANCE
// ABSTRACTION: 
//      Abstraction is a programming method that shows only the essential attributes or properties and hides any unnecessary information
//      with the purpose of exposing only on the most important aspects of a program to a user. 
//      Abstract classes are meant to be subclassed. 
//      This practice helps reduce complexity and isolate impact of changes on the Class as well as creating a more modular and maintainable
//      code. 
// In the example below we expand on the Employee Class example I showed before. This time around, we add an abstract method called EmployeeRole
//      that can be implemented to any subclass after its declaration. This way, "EmployeeRole" can be applied to a wide range of classes, in our example,
//      this can be applied to any employee in this company, while the Employee Class perse, can implement said abstract class to specific employees. 
// INHERITANCE: 
//      In OOP, INHERITANCE is a concept that allows classes to "inherit" or extend properties and methods from another class. When a class inherits from another
//      it is referred to as a "derived class" and the class that is inherited from is known as the "super class". 
// In the example below we see an instance of INHERITANCE on line 112 and line 119 where the Employee Class is inheriting the method "getRole()" from the abstract class "EmployeeRole" 
//      through the "extends" keyword and the super() call. 
// abstract class EmployeeRole {
//     constructor(protected role: string) { }
//     abstract getRole(): string;
// }
// class Employee extends EmployeeRole {
//     private _wage: number;
//     private _clearance: number;
//     constructor(wage: number, employeeRole: string, clearance: number) {
//         super(employeeRole)
//         this._wage = wage;
//         this._clearance = clearance;
//     }
//     public getRole(): string {
//         return this.role;
//     }
//     public setClearance(level: number) {
//         this._clearance = level;
//     }
//     public setWage(wage: number): void {
//         this._wage = wage;
//     }
// }
// ------------------------------------------------------------------------------------------------------------------------------------------------
// POLYMORPHISM: 
//      In OOP, POLYMORPHISM refers to the ability to use functions or methods to operate on various types of classes / objects interchangeably. 
// There are two main types of polymorphism: 
//      1) Compile-time or static polymorphism
//      2) Runtime or dynamic polymorphism
// COMPILE-TIME POLYMORPHISM: 
//      Also known as "overloading", this concept is apparent when multiple functions or methods have the same name but different types or parameters. 
//      The correct method to use is determined by the program at compile-time (thus the name) depending on the type of argument passed into the function. 
// RUNTIME POLYMORPHISM: 
//      Also known as "overriding", this concept is apparent when a derived class changes the implementation of a function or method that was passed in from 
//      the parent or super class. 
//      The correct method to use is determined at runtime based on the type of the object. 
// Here we set an example of Compile-Time Polymorphism: 
// As you can observe, the "setClearance()" method declared on line 174 and is then overloaded twice in lines 169 and 170. The first overload accepts type number
//      and the second accepts type string. Depending on the arguments passed to the method later on, the program will know which of the methods declared to execute. 
var EmployeeRole = /** @class */ (function () {
    function EmployeeRole(role) {
        this.role = role;
    }
    return EmployeeRole;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(wage, employeeRole, clearance) {
        var _this = _super.call(this, employeeRole) || this;
        _this._wage = wage;
        _this._clearance = clearance;
        return _this;
    }
    Employee.prototype.getRole = function () {
        return this.role;
    };
    Employee.prototype.setClearance = function (level) {
        if (typeof level === "number") {
            this._clearance = level;
        }
        else {
            this._clearance = Number(level);
        }
    };
    Employee.prototype.getClearance = function () {
        return this._clearance;
    };
    Employee.prototype.setWage = function (wage) {
        this._wage = wage;
    };
    return Employee;
}(EmployeeRole));
// Here we can observe how this overloading is happening in real time:
var example = new Employee(1000, "Janitor", 3);
console.log("Original clearance level:", example.getClearance());
example.setClearance(5);
console.log("Clearance after setClearance(5): ", example.getClearance());
example.setClearance("10");
console.log("Clearance after setClearance(\"10\"):", example.getClearance());
// Here is an example of Runtime Polymorphism: 
// As you can observe, we have created a new class called "Manager" that extends the "Employee" Class and overrides the "getRole()" method from the parent or super class. 
//      By doing this, we can now create instances of both classes and store them together and the user can now call the "getRole()" method on each element without having
//      to worry about the types of said elements. 
// abstract class EmployeeRole {
//     constructor(protected role: string) { }
//     abstract getRole(): string;
// }
// class Employee extends EmployeeRole {
//     private _wage: number;
//     private _clearance: number;
//     constructor(wage: number, employeeRole: string, clearance: number) {
//         super(employeeRole);
//         this._wage = wage;
//         this._clearance = clearance;
//     }
//     public getRole(): string {
//         return this.role;
//     }
//     public setClearance(level: number): void;
//     public setClearance(level: string): void;
//     public setClearance(level: number | string): void {
//         if (typeof level === "number") {
//             this._clearance = level;
//         } else {
//             this._clearance = Number(level);
//         }
//     }
//     public getClearance(): number {
//         return this._clearance
//     }
//     public setWage(wage: number): void {
//         this._wage = wage;
//     }
// }
// class Manager extends Employee {
//     public getRole(): string {
//         return `Manager - ${this.role}`;
//     }
// }
// const employees: EmployeeRole[] = [
//     new Employee(1500, "Developer", 2),
//     new Manager(2000, "QA", 1)
// ];
// for (const employee of employees) {
//     console.log(employee.getRole());
// }
