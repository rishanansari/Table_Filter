//Array of Employees
let employees=[
    {
        id:1,
        first_name:"Suresh",
        last_name:"Kumar",
        email:"suresh@gmail.com",
        gender:"male",
        ip_address:"160.192.178.29"
    },
    {
        id:2,
        first_name:"Sourav",
        last_name:"Das",
        email:"sourav@gmail.com",
        gender:"male",
        ip_address:"160.182.168.29"
    },
    {
        id:3,
        first_name:"Nancy",
        last_name:"Kumari",
        email:"nancy@gmail.com",
        gender:"female",
        ip_address:"170.182.178.29"
    },
    {
        id:4,
        first_name:"Jenny",
        last_name:"Doe",
        email:"jenny@gmail.com",
        gender:"female",
        ip_address:"160.152.168.29"
    },
    {
        id:5,
        first_name:"Abhijeet",
        last_name:"Karmkar",
        email:"abhijeet@gmail.com",
        gender:"male",
        ip_address:"160.282.168.29"
    },
    {
        id:6,
        first_name:"Shivam",
        last_name:"Sharma",
        email:"shubham@gmail.com",
        gender:"male",
        ip_address:"160.182.268.29"
    },
    {
        id:7,
        first_name:"Pardeep",
        last_name:"Chourasiya",
        email:"padeep@gmail.com",
        gender:"male",
        ip_address:"160.182.178.25"
    },
    {
        id:8,
        first_name:"Amruta",
        last_name:"Kumbhalkar",
        email:"amruta@gmail.com",
        gender:"female",
        ip_address:"150.172.158.25"
    },
    {
        id:9,
        first_name:"Jacky",
        last_name:"Doe",
        email:"jacky@gmail.com",
        gender:"male",
        ip_address:"160.142.178.25"
    },
    {
        id:10,
        first_name:"Pavan",
        last_name:"Sharma",
        email:"pavan@gmail.com",
        gender:"male",
        ip_address:"160.182.378.15"
    },
]


//All Employee Data
let allEmpButton=document.querySelector("#all-emp-btn");
allEmpButton.addEventListener("click",function(){
    //Logic to display the data
    displayEmployees(employees);
})

//Male EMployee
let maleEmpButton=document.querySelector("#male-emp-btn");
maleEmpButton.addEventListener("click",function(){
    //Logic to display the male employee 
    let maleEmployee=employees.filter(function(employee){
        return employee.gender==="male";
    })
    console.log(maleEmployee);

    displayEmployees(maleEmployee);
})

//Female Employee 
let femaleEmpButton=document.querySelector("#female-emp-btn");
femaleEmpButton.addEventListener("click",function(){
    let femaleEmployee=employees.filter(function(employee){
        return employee.gender==="female";
    })

    displayEmployees(femaleEmployee);

})

//Logic for search functionality 
let searchBox=document.querySelector("#search-box");
searchBox.addEventListener("keyup",function(){

    //Logic to search the data based on employee first name 
    let textEntered=searchBox.value;
    console.log(textEntered);

    //to check if person is there in table 
    let filterEmployees=[];
    if(textEntered!=""){
        //populate the data on search box typing
        filterEmployees=employees.filter(function(employee){
           return employee.first_name.toLowerCase().includes(textEntered.toLowerCase())||
           employee.last_name.toLowerCase().includes(textEntered.toLowerCase())||
           employee.email.toLowerCase().includes(textEntered.toLowerCase())
        })
        console.log(filterEmployees);

        displayEmployees(filterEmployees)

    }

});


//Display the data based on buttton clicked 
let displayEmployees=(employees)=>{
    //logic to display the data 
    let tablebody=document.querySelector("#table-body");
    //clear the table body 
    let tablerow="";
    for(let employee of employees){
        // console.log(employee);
        tablerow+=  
        `<tr>
           <td>${employee.id}</td>
           <td>${employee.first_name}</td>
           <td>${employee.last_name}</td>
           <td>${employee.email}</td>
           <td>${employee.gender}</td>
           <td>${employee.ip_address}</td>
        </tr>
        `
        tablebody.innerHTML=tablerow;//Merging the data from tablerow to tablebody
    }
}