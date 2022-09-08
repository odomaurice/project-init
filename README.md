# Video Lab is a software that allow users to host and join virtual meetings from anywhere in the world


## Getting Started With **Video Lab**

### Installation 
    
 ######   Clone the git hub repository and run the following command in the root folder 
    
> npm i 

### Starting the api 
    
##### In the root directory, type the following command to start the application in developer mode 

> npm run start:dev 

### Api Documentation 

##### The api documentation link will be posted here ____________


#### Api Development Guideline 

##### Video Labs api follows a specified guideline in order to develop a reliable and production ready api. This guideline can be found in the root folder as API_DEVELOPMENT_GUIDE.md 




### Folder Structure 

* config
* src
    * test
    * bin 
    * controller 
    * model 
    * public 
    * routes 
    * schema 
    * util 
    * views 
    * app.js 
* package.json 





#### Config Folder 

###### Config folder contains a file, config.js which contains configurations for the applications like application port, database uri e.t.c 
    

#### Src Folder 
    
###### Src Folder Contains all the api code; models, controllers, views, routes...

##### The following folders are in **Src** 

* #### **test**
    ###### All test files for the api 
    
* #### **bin**  
    ###### This is where the main app code is 

* #### **controller**
    ###### controller this is where the route controllers are 

* #### **model** 
    ###### Database schema definitions e.g User Schema 

* #### **Public** 
    ###### Files Here are only HTML, CSS or JS or images 

* #### **Routes** 
    ###### Route Definitions for the api 

* #### **Schema** 
    ###### Schema definitions of expected requests used for validation 

* #### **Utils**
    ###### Utility functions like loggers, database connector, email sender

* #### **Views** 
    ###### Contains files Templating Files like .hbs .ejs .pug    e.t.c  that will render on the client side 