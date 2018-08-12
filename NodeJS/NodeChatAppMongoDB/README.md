#Chat app using Node JS and Mongo DB
- Mongo DB environment is used from free account on https://mlab.com/ [ You can create your own ]
  Once you have your account on Mlab, create a database (Preferebly amazon web services ), that will give you connection URL for that DB
  then add new user for that DB and use that user credentials in the dbUrl (server.js line no 12) for me it was (username : user, password :user) 

##To run the code you need following things installed :
- Node js ( Latest version preferred - Download LTS version from https://nodejs.org/en/ )
- nodemon ( run "npm install -g nodemon" command to install it once you have node )

##How to run :
1. Open command prompt and navigate to the folder in which these files are
2. run following command > nodemon server.js

##Result : 
server.js will be run and chat server will start on localhost:3000. 
You can type name and message in the input and send it... It will appear in the bottom chat history
You can open multiple instances of localhost in different tabs and act like diferent users, they all will sync with each other.
