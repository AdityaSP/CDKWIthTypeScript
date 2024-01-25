
// compose related data items together
const aditya = {
    "fn" : "Aditya",
    "ln" : "SP",
    "age" : 30,
    
}


console.log(aditya);
console.log(aditya.fn + " is of the age " + aditya.age);

function empFullName(emp: { fn: string; ln: string; age :number}){
    return emp.fn + " " + emp.ln;
}

let result = empFullName(aditya); 
console.log(result);

// create our own types age = '2 yrs'
type Employee = { fn: string; mn ?: string; ln: string; age ?: number | string, dob : string };

const johnwick :Employee = {
    fn : "John",
    ln : "Wick",
    dob: '23-01-1981'
}

function empFN(emp :Employee){
    return emp.fn + " " + emp.ln
}

let result2 = empFN(johnwick);
console.log(result2);


// typeof operator helps to check the presence or datatype of a parameter
function withTitle(emp: Employee, title: string = 'Mr. ') {

    if (typeof emp.mn !== 'undefined') {
        return title + emp.fn + emp.mn, +emp.ln;
    }
    else 
        return title + emp.fn +emp.ln;
  
}

console.log(withTitle(johnwick, 'Dr. '));

//accId is readonly 


type AccountNumber = { readonly accId : number | string, readonly holderName: string, country?: string, balance: number }

const mySavingsAccount :AccountNumber ={
    accId : "ABC123",
    holderName: "Aditya",
    balance: 1203810823
}

const companyAccount: AccountNumber = {
  accId: 123,
  holderName: "something pvt llc",
  balance: 80823,
};

// errors because accId is readonly
// mySavingsAccount.accId ='alsdjflw';

// mySavingsAccount.holderName ="Hello"


type EmployeeWithAccount = {
  fn: string;
  mn?: string;
  ln: string;
  age?: number | string;
  dob: string;
  acc: AccountNumber
};

const rick :EmployeeWithAccount = {
    fn : "Rick",
    ln : "Smith",
    age: "10 yrs",
    dob: "23-01-2014",
    acc: {
        accId : "asdlfj123",
        holderName: "Ricks company",
        balance : 89123
    }
}


// array
let phonenumber1 = '23048908234'
let phonenumber2 = '23048098231'

let todo = ['Get Milk', 'Post a letter', 'Return CD']

let todo2 :string[] = ['Get eggs', 'Return CD']

let todo3 :Array<string> = []

let employeeList :Employee[] = [johnwick, johnwick, johnwick]


// Javascript objects
// Javascript Object Notation - json



// {
//             "commands" : {
//               "01_set_mysql_root_password" : {
//                 "command" : { "Fn::Join" : ["", ["mysqladmin -u root password '", { "Ref" : "DBRootPassword" }, "'"]]},
//                 "test" : { "Fn::Join" : ["", ["$(mysql ", { "Ref" : "DBName" }, " -u root --password='", { "Ref" : "DBRootPassword" }, "' >/dev/null 2>&1 </dev/null); (( $? != 0 ))"]]}
//               },
//               "02_create_database" : {
//                 "command" : { "Fn::Join" : ["", ["mysql -u root --password='", { "Ref" : "DBRootPassword" }, "' < /tmp/setup.mysql"]]},
//                 "test" : { "Fn::Join" : ["", ["$(mysql ", { "Ref" : "DBName" }, " -u root --password='", { "Ref" : "DBRootPassword" }, "' >/dev/null 2>&1 </dev/null); (( $? != 0 ))"]]}
//               }
//     }
// }



