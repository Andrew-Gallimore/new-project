//variables for express
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const { Socket } = require('dgram');
var express = require('express');
var app = express();
var serv = require('http').Server(app);

//connecting to and signing into firebase
const admin = require('firebase-admin');
if(process.env.V1 === undefined) {
    var serviceAccount = "../Uni/senario-databases-firebase-adminsdk-kxtj0-c1dcc62790.json";
}else {
    var V1 = process.env.V1;
    var V2 = process.env.V2;
    var V3 = process.env.V3;
    var V4 = process.env.V4;
    var V5 = process.env.V5;
    var V6 = process.env.V6;
    var V7 = process.env.V7;
    var V8 = process.env.V8;
    var V9 = process.env.V9;
    var V10 = process.env.V10;
    var serviceAccount = JSON.stringify({type: V1, project_id: V2, private_key_id: V3, private_key: V4, client_email: V5, client_id: V6, auth_uri: V7, token_uri: V8, auth_provider_x509_cert_url: V9, client_x509_cert_url: V10});
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://senario-databases-default-rtdb.firebaseio.com"
});

var type = "service_account";
var projectID = "senario-databases";


//when someone requests a file (ex: index.html)
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/senar.io/join.html');
});
app.use('/senar.io', express.static(__dirname + '/senar.io'));
var port = process.env.PORT || 2000;
serv.listen(port);
console.log("Server Started.", "\x1b[1m", "\x1b[36m", "(Port: " + port + ")", "\x1b[0m");
console.log(" > Version 2.3.2, Engine 'P5.js'/'Phaser v3.50.1'")

//variables for socket.io
var socketList = {};
var playerList = [];
var count = 0;
var newPos = 0;

var createdIDs = [];
var IDinServers = [];

var manualUpdate = false;

const database = admin.database();
var serverData = database.ref('servers-private');
serverData.on('value', (snapshot) => {
    var data = snapshot.val();
    //loading all the servers in the database
    for(i in data) {
        IDinServers[data[i].serverCode] = [];
        console.log(data[i].serverCode)
    }
});

//when somone connects
var io = require('socket.io')(serv,{});
io.sockets.on('connection', function(socket){
    if(socketList[socket.id] === undefined) {
        count++;
    }
    socketList[socket.id] = socket;
    console.log("\x1b[32m", 'New socket connection.', "\x1b[1m", ' (' + count + ')', "\x1b[0m");
 
	socket.on('disconnect',function(){
        delete socketList[socket.id];
        for(var i in playerList) {
            if(playerList[i].socketNum === socket.id) {
                //console.log(playerList[i])
                //putting a person back into the list incase they reload the page
                createdIDs.push({
                    theID: playerList[i].playerID,
                    date: new Date().getTime(),
                    server: playerList[i].server,
                    remove: 60
                });

                playerList.splice(i,1);
            }
        }
        for(var i in IDinServers) {
            for(var j in IDinServers[i]) {
                if(socket.id === IDinServers[i][j].ID.id) {
                    IDinServers[i].splice(j, 1);
                }
            }
        }
        manualUpdate = true;
        count = count - 1;
        console.log("\x1b[31m", 'Client Left.', "\x1b[1m", ' (' + count + ')', "\x1b[0m");
	});
    
    //reciveing player positions
    socket.on('upos',function(data){
        //putting peoples positions into their places
        if(playerList.length > 0) {
            for(var i in playerList) {
                if(data[0].ID === playerList[i].socketNum) {
                    playerList[i].characterData = {
                        x:data[0].x,
                        y:data[0].y,
                        username:data[0].username
                    }
                    newPos++;
                }
            }
        }
    });

    //           (depericated)
    //automaticaly signing in people to their user based on their computer
    // socket.on('user',function(data){
    //     people.find({autoID: data[0].ID}, (err, docs) => {
    //         if(docs.length !== 0) {
    //             socket.emit('userData',docs);
    //         }else {
    //             socket.emit('userFail');
    //         }
    //     })
    // });

    //letting people request to join servers
    socket.on('server', function(data) {
        console.log(data)
        var code = '_' + Math.random().toString(36).substr(2, 9);
        socket.emit('serverReturn', code);
        //putting them into a list that removes them after two minutes if they don't load the next page in time
        createdIDs.push({
            theID: code,
            date: new Date().getTime(),
            server: data,
            remove: 120
        });
    });

    //putting a person into a particular server
    socket.on('SIIDs', function(data) {
        var socketFound = false;
        for(var i in createdIDs) {
            if(createdIDs[i].theID === data.code) {
                socketFound = true;
                // people.find({username: data.username}, (err, docs) => {
                //     //this is where you could find the persons character skins and what not also (once added)
                // });
                //createing an object with all their data
                playerList.push({
                    playerID: data.code,
                    name: data.name,
                    server: createdIDs[i].server,
                    socketNum: data.ID,
                    characterData: {username: data.username}
                });
                //console.log(data)
                //putting their socket ID under that particular server
                IDinServers[createdIDs[i].server].push({
                    ID: socket
                });
                delete createdIDs[i];
            }
        }
        socket.emit('SIIDr', socketFound);
    });
    
    //putting out message
    socket.emit('serverMsg',{
		msg:'You have connected',
    });
});

//every 12 FPS run whats in this function
setInterval(function(){
    //check if we shouldn't sent out anything
    if(playerList.length < 1 || newPos === 0 && manualUpdate === true) {
        manualUpdate = false;
        return
    }
    newPos = 0;
    //for each server
    for(var i in IDinServers) {
        //for each person in the server (the one we are sending things out to)
        for(var j in IDinServers[i]) {
            var pack = [];
            for(var l in IDinServers[i]) {
                //we check in the complete list of people
                for(var k in playerList) {
                    //cross checking if their socket number is equal to their player datas socket number
                    if(playerList[k].socketNum === IDinServers[i][l].ID.id && playerList[k].socketNum !== IDinServers[i][j].ID.id) {
                        //if so, putting their positions and other data into the pack to send out to everyone in the paticular server
                        pack.push({
                            ID: "" + playerList[k].socketNum,
                            x:playerList[k].characterData.x,
                            y:playerList[k].characterData.y,
                            username:playerList[k].characterData.username
                        });	
                    }
                }
            }    
            //we emit a pack (of everyone elces posionsions ecsept theirs) to each person in that server
            var socket = IDinServers[i][j].ID;
            socket.emit('newPositions', pack);
            // console.log("sending messages")
        }

    }
    
},1000/12);

//every 30 seconds
setInterval(function(){
    //removeing the created player id's of people to tryed to join a server if they don't join with-in 2 minutes.
    for(var i in createdIDs){
        if (createdIDs.length > 0 && createdIDs[i].remove !== undefined) {
            if (createdIDs[i].date < new Date().getTime() - (createdIDs[i].remove * 1000)) {
                delete createdIDs[i];
            }
        }
        // console.log(createdIDs[i].remove * 1000)
        //console.log(createdIDs[i])
    }
},30000);