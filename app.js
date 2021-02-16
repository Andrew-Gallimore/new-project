//variables for express
const { Socket } = require('dgram');
var express = require('express');
var Datastore = require('nedb');
var app = express();
var serv = require('http').Server(app);


//when someone requests a file (ex: index.html)
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/senar.io/join.html');
});
app.use('/senar.io', express.static(__dirname + '/senar.io'));
var port = process.env.PORT || 2000;
serv.listen(port);
console.log("Server Started.", "\x1b[1m", "\x1b[36m", "(Port: " + port + ")", "\x1b[0m");
console.log(" > Version 2.1.0 Beta, Engine 'P5.js'/'Phaser v3.50.1'")

//variables for socket.io
var socketList = {};
var playerList = [];
var count = 0;

var createdIDs = [];
var IDinServers = [];

//working with users on a database
var people = new Datastore('server/people.db');
people.loadDatabase();
//working with servers on a database 
var servers = new Datastore('server/servers.db');
servers.loadDatabase();
//servers.insert({fname: 'Andrew', lname: 'Gallimore', username: 'ThatGuy', serverCode: 'UNI12', date: 'Thu Dec 17 2020 12:00:00', expires: 'never', public: 'true'});
servers.find({public: "true"}, (err, docs) => {
    //loading all the servers in the database
    for(var i in docs) {
        IDinServers[docs[i].serverCode] = [];
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
                        y:data[0].y
                    }
                }
            }
        }
    });

    //automaticaly signing in people to their user based on their computer
    socket.on('user',function(data){
        people.find({autoID: data[0].ID}, (err, docs) => {
            if(docs.length !== 0) {
                socket.emit('userData',docs);
            }else {
                socket.emit('userFail');
            }
        })
    });

    //letting people request to join servers
    socket.on('server', function(data) {
        servers.find({serverCode: data.toUpperCase()}, (err, docs) => {
            if(docs.length !== 0) {
                var code = '_' + Math.random().toString(36).substr(2, 9);
                socket.emit('serverTrue', code);
                //putting them into a list that removes them after two minutes if they don't load the next page in time
                createdIDs.push({
                    theID: code,
                    date: new Date().getTime(),
                    server: docs[0].serverCode
                });
            }else {
                socket.emit('serverFail');
            }
        })
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
                    username: data.username,
                    server: createdIDs[i].server,
                    socketNum: data.ID,
                    characterData: {}
                });
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

//every 25 FPS run whats in this function
setInterval(function(){
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
                            y:playerList[k].characterData.y
                        });	
                    }
                }
            }
            //console.log(IDinServers[i][j].ID.id, pack)
            
            //we emit a pack (of everyone elces posionsions ecsept theirs) to each person in that server
            var socket = IDinServers[i][j].ID;
            socket.emit('newPositions', pack);
        }
        
        //for each person in the server (after setting up the pack)
        // for(var j in IDinServers[i]) {
        //     //we emit the pack to everyone in that server
        //     var socket = IDinServers[i][j].ID;
        //     socket.emit('newPositions', pack);
        // }
        //console.log(pack)
    }
    //console.log(IDinServers)
    
},1000/25);

//every 10 seconds
setInterval(function(){
    //removeing the created player id's of people to tryed to join a server if they don't join with-in 2 minutes.
    for(var i in createdIDs){
        if (createdIDs.length > 0) {
            if (createdIDs[i].date < new Date().getTime() - 120000) {
                delete createdIDs[i];
            }
        }
    }
},10000);

// //if after 3 minutes no one is there, kick them off
// setInterval(function(){
//     console.log(count)
//     if(count < 1) {
//         console.log("Closeing Server")
//         process.exit()
//     }
// },180000);