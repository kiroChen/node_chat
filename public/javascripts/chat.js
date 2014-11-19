//connection to host and port
var socket = io();

//when user login or logout,system notice
socket.on('loginInfo',function(msg){
	addMsgFromSys(msg);
  Messenger().post({
    message: msg,
    showCloseButton: true
  });
});

//add user in ui
socket.on('userList',function(userList){
	//modify user count
	//modifyUserCount(userList.length);
  addUser(userList);
});

//client review user information after login
socket.on('userInfo',function(userObj){
  //should be use cookie or session
	userSelf = userObj;
  $('#spanuser').text('欢迎你！'+userObj.name);
});

//review message from toAll
socket.on('toAll',function(msgObj){
  addMsgFromUser(msgObj,false);
});

//review message from toOne
socket.on('toOne',function(msgObj){
  Messenger().post({
    message: "<a href=\"javascript:showSetMsgToOne(\'"+msgObj.from.name+"\',\'"+msgObj.from.id+"\');\">"+msgObj.from.name + " send to you a message:"+ msgObj.msg+"</a>",
    showCloseButton: true
  });
});

socket.on('sendImageToALL',function(msgObj){
  addImgFromUser(msgObj,false);
});