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
serv.listen(2000);
console.log("Server Started.");

//variables for socket.io
var socketList = {};
var playerList = [];

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
    console.log('New socket connection.');
    socketList[socket.id] = socket;
 
	socket.on('disconnect',function(){
        delete socketList[socket.id];
        delete playerList[socket.id];
        for(var i in IDinServers) {
            for(var j in IDinServers[i]) {
                if(socket.id === IDinServers[i][j].ID.id) {
                    IDinServers[i].splice(j, 1);
                }
            }
        }
        console.log('Client Left.');
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

    socket.on('SIIDs', function(data) {
        var socketFound = false;
        for(var i in createdIDs) {
            if(createdIDs[i].theID === data.code) {
                socketFound = true;
                people.find({username: data.username}, (err, docs) => {
                    //this is where you could find the persons character skins and what not also (once added)
                });
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
    //removeing the created player id's of people to tryed to join a server if they don't join with-in 2 minutes.
    for(var i in createdIDs){
        if (createdIDs.length > 0) {
            if (createdIDs[i].date < new Date().getTime() - 120000) {
                delete createdIDs[i];
            }
        }
    }

    //for each server
    for(var i in IDinServers) {
        var pack = [];
        //for each person in the server
        for(var j in IDinServers[i]) {
            for(var k in playerList) {
                //cross checking if their socket number is equal to their player datas socket number
                if(playerList[k].socketNum === IDinServers[i][j].ID.id) {
                    //if so, putting their positions and other data into the pack to send out to everyone in the paticular server
                    pack.push({
                        ID: "" + playerList[k].socketNum,
                        x:playerList[k].characterData.x,
                        y:playerList[k].characterData.y
                    });	
                    //console.log(pack)
                    //console.log(IDinServers[i][j].ID.id)
                }
            }	
        }
        
        //for each person in the server (after setting up the pack)
        for(var j in IDinServers[i]) {
            //we emit the pack to everyone in that server
            var socket = IDinServers[i][j].ID;
            socket.emit('newPositions',pack);
        }
        //console.log(pack)
    }
    
},1000/25);

var playerMove = [];
var playerWarn = [];
//every 2 minutes, if the person is in the same spot they will get a warning about soon going to get kicked off
setInterval(function(){
    // for(var i in playerList){
    //     playerMove[i] = playerList[i];
    //     if(playerList[i].x === playerMove[i].x && playerList[i].y === playerMove[i].y){

    //     }
    // }
    //console.log(playerList)
},1000);

//if after 5 minutes and they didn't move again, they will be kicked off
setInterval(function(){

},300000);