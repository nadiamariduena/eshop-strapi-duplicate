## ROUTINE

#### Every time you are going to launch the project, you have to do the following:

- mostly the servers are still running in the background, even if you turn off the computer

<br>

- Everytime you turn on the computer , **MONGO** restarts again, so do the following to kill Mongo preocess or any other that you wont be using:

```javascript
// 0 kill together
sudo killall mongod apache2 mysqld
//
// ** kill individually
//1 kill mongo
sudo killall mongod
// 2 kill apache
sudo killall apache2
// 3 kill mysqld
sudo killall mysqld
//
//
// 4 check if their server ID appears with this command, if they dont appaear its because it worked!!
sudo netstat -tlnp //✋ check all the process running, and check if apache and mysql are present
//  or
sudo netstat -tulp


// 🔴 Sometimes even when you kill the servers and you type this 4 commands it wont work to turn them on:
//
// ** once you type your sudo pass to kill or start a server, close the terminal related to that, then open another tab on the terminal and continue with the second command, remember its has to ask you the password otherwise it wont work to launch the servers.
//
// start both in one command
sudo systemctl start apache2 mysql
//
//  start them individually
sudo systemctl start apache2
sudo systemctl status apache2
//
//
// mysqld
sudo systemctl start mysql
sudo systemctl status mysql
//



```

#### 🚀 now that everything is set up, you can turn it ON in your visual studio code

- create 3 windos in your terminal in vs: one for the api, another for the client and another that will be connected to the github repo

<br>

- CD into the the client folder : **cd client**

- then type this:

```javascript
npm run develop
```

#### once its running

- cd into the api (in another window on your vs terminal)

```javascript
npm start
```

. it will ask you if you want to open another port (in yellow letters) type yes
