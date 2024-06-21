const employee = {
    name: "Jane",
    streetAdress: "12 Broadway"
}

function updateEmployeeWithKeyAndValue(obj, key,value){
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}

let newEmployee = updateEmployeeWithKeyAndValue(employee, 'Sam', '11 Broadway');

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}

 newEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'Sam', '12 Broadway');

function deleteFromEmployeeByKey(obj, key){
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}

 newEmployee = deleteFromEmployeeByKey(employee, 'Sam');

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}
    
newEmployee = destructivelyDeleteFromEmployeeByKey(employee, newEmployee);
    