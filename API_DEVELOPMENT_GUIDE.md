# API DEVELOPMENT GUIDE 

## The Api development guide helps to ensure the api is developed following best practices to ensure that the api is reliable and production ready



### **#1   Clean Code** 

##### Ensure to write code that is clean and easily understandable by following already established rules like proper variable naming, function 
naming, modularity e.t.c 


### **#2 Error Catching and Handling** 

##### Ensure to keep error handling in mind when performing operations. Operations do not always succeed. Error handling can easily be done using
the try catch method in javascript like the example below 
###### For example , in the code below, if any error occurs while finding student, it will be caught in the catch block


'''javascript 

try 
{
    const students = await students.findAll() 
    return students 
}
catch(err)
{
    console.log(" Error Occured while Finding Students")
}
'''




### **#3 Use Async Await** 

##### Ensure to use async await for operations that will take some time to complete; like fetching students from a database 


'''javascript 

try 
{
    const students = await students.findAll() // Waits For result Before moving to the next line 
    return students 
}
catch(err)
{
    console.log(" Error Occured while Finding Students")
}

'''



### **#3 Proper Logging ** 

##### Logging should be very clear and concise to make debugging easy
##### Logs should provide enough information to the reader about what is happening, when, why e.t.c 
##### some examples 
* Bad
    * console.log(" Error occured ") X
    * console.log(" Could'nt retrieve students list") X 

* Good 
    * console.log(" Error occured while creating new user ")
    * console.log(" Error occured while retrieving student lists: list not found ")



'''javascript 

try 
{
    const students = await students.findAll() // Waits For result Before moving to the next line 
    return students 
}
catch(err)
{
    console.log(" Error Occured while Finding Students")
}

'''



### **#4 Version Control** 

##### To ensure a smooth workflow

* Api should have a project board 
* Tasks for the project should be broken down and assigned
* Tasks should be reviewed before marking complete 
* **All Codes should be developed in branches and tested, before pushing to the main branch**




### **#5 Documentation** 

##### Endpoints should be documented on Postman and uploaded online 



### **#6 Request Validation** 

##### Any Request that involves sending a json data to the api should be validated 

'''javascript 
try
{
    const newUserDoc = req.body
    const isValidUser = validate( newUserDoc ) 
}
catch(err)
{
    console.log(" Error Occured")
}

'''


### **#7 Proper Response Codes ** 

##### Response sent from the api to the client should have proper response codes to reflect the result of the request. Examples - 

* 201 - New Resource created e.g New User created 
* 200 - Request received and understood { res.status(500)}
* 404 - Resource not found, meaning no route like that in the api { res.status(404)}
* 400 - Bad request e.g No password passed to the api during login { res.status(400)}
* 403 - Unauthorized Access e.g User wants to access a protected route without beign logged in { res.status(403)}
* 500 - Server error e.g Server encountered and error while creating new user { res.status(500)}
* e.t.c 


### **#8 Correct HTTP Methods  ** 

##### Ensure to use appropriate http methods