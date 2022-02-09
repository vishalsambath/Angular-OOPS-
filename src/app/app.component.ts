import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  returnVal = '231';

  ngOnInit() {}
  // method1(any) {
  //   return 1;
  // }
}
abstract class abstractionTest {
  abstract method1(any): any;
}
/*********  class in angular 6 *********/
class myclass {
  empName = '';
  empId = '';
  /*********  constructor in angular 6 *********/
  constructor(employeeId, employeeName) {
    this.empId = employeeId;
    this.empName = employeeName;
  }
  public Displayfun() {
    return (
      'Employee Name is : ' + this.empName + ' Employee  Id : ' + this.empId
    );
  }
}
/********* inhertance in angular 6 *********/

class childclass extends myclass {}
/********* object creation *********/
let obj = new childclass('44688', 'Manojkumar');
obj.Displayfun();
// see ouput in console.
console.log(obj.Displayfun());

/********* interface creation *********/

class myinterface implements myinterface {
  constructor(firstname, lastname) {
    console.log(firstname, lastname);
  }
}

interface myinterface {
  firstname: string;
  lastname: string;
}

var newobj = new myinterface('vishal', 'sambath');

/********* acces modifiers creation *********/
class accessmodifiers {
  constructor(protected ftname, public ltname) {}
}
class accessNew extends accessmodifiers {
  constructor(ftname, ltname) {
    super(ftname, ltname);
    console.log(ftname, ltname);
  }
}

var acobj = new accessNew('sdfdsf', 'manoj');
