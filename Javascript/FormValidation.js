window.addEventListener('DOMContentLoaded', () => {
    //validName();
    salaryRange();
});

// UC2
/**Here validating name */
function validName() {
    const name = document.querySelector("#name");
    const textError = document.querySelector(".text-error");
    name.addEventListener('input', function() {
        try {
            let empData = new EmployeePayrollData();
            empData.name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });
}

/** set event listener on salary range*/
function salaryRange() {
    const salary = document.querySelector("#salary");
    const output = document.querySelector('.salary-output');
    salary.addEventListener('input', function() {
        output.textContent = salary.value;
    });
}

//UC3 => Ability to create Employee Payroll Object On Save.
const save = () => {
    let employeePayrollData = new EmployeePayrollData();

    alert(JSON.stringify(employeePayrollData));
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');
        setTextValue('.text-error', "");
    } catch (e) {
        setTextValue('.text-error', e);
    }
    try {
        let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " + getInputValueById('#year');
        employeePayrollData.startDate = new Date(Date.parse(date));
        setTextValue('.date-error', "");
    } catch (e) {
        setTextValue('.date-error', e);
    }

    //alert(JSON.stringify(employeePayrollData));
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    employeePayrollData.id = new Date().getTime() + 1;
    return employeePayrollData;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;;
}

const setTextValue = (id, message) => {
    const textError = document.querySelector(id);
    textError.textContent = message;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let setItem = [];
    allItems.forEach(item => {
        if (item.checked == true) {
            setItem.push(item.value);
        }
    })
    return setItem;
}