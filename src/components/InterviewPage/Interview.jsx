import { useDispatch } from 'react-redux';
import { InterviewState } from '../../modules/actions/userAction';
import * as S from './styles'
import io from "socket.io-client"
import { useRef } from 'react';
function Interview(){
    const dispatch=useDispatch();
    const test=useRef(null);
    var localStream;
var pc;
var pc2;
var remoteStream;
var turnReady;

var pcConfig = {
  'iceServers': [{
    'urls': 'stun:stun.l.google.com:19302'
  }]
};

// Set up audio and video regardless of what devices are present.
var sdpConstraints = {
  offerToReceiveAudio: true,
  offerToReceiveVideo: true
};

/////////////////////////////////////////////

var room;
// Could prompt for room name:
room = prompt('Enter room name:');

// 연결할 domain name 
var socket = io.connect("http://ec2-54-180-98-91.ap-northeast-2.compute.amazonaws.com/rtc");

if (room !== '') {
  socket.emit('create or join', room);
  console.log('Attempted to create or  join room', room);
}

socket.on('created', function(room) {
  console.log('Created room ' + room);
});

socket.on('full', function(room) {
  console.log('Room ' + room + ' is full');
});

socket.on('join', function (room){
  console.log('Another peer made a request to join room ' + room);
  console.log('This peer is the initiator of room ' + room + '!');
});

socket.on('joined', function(room) {
  console.log('joined: ' + room);
});

socket.on('log', function(array) {
  console.dir(array);
});

////////////////////////////////////////////////

function sendMessage(message) {
  console.log('Client sending message: ', message);
  socket.emit('message', message, room);
}

// This client receives a message
socket.on('message', function(message) {
  console.log('Client received message:', message);
  if(!pc) {
    maybeStart();
  }
  else if (message.type === 'offer') {
    pc.setRemoteDescription(new RTCSessionDescription({ sdp: message.sdp, type: "offer" }));
    doAnswer();
  } else if (message.type === 'answer') {
    console.log(pc, "thasdfasfdsdfsdfasdf");
    console.log(message);
    pc.setRemoteDescription(new RTCSessionDescription({ sdp: message.sdp, type: "answer" }));
  } else if (message === 'bye') {
    handleRemoteHangup();
  }
});

socket.on("offer", (message) => {
  pc.setRemoteDescription(new RTCSessionDescription({ sdp: message.sdp, type: "offer" }));
  doAnswer();
});

socket.on("answer", (message) => {
  pc.setRemoteDescription(new RTCSessionDescription({ sdp: message.sdp, type: "answer" }));
});

socket.on("candidate", (message) => {
  if(!pc) {
    return maybeStart();
  }
  console.log("this is on candidate socket", pc);
  var candidate = new RTCIceCandidate({
    sdpMLineIndex: message.label,
    candidate: message.candidate
  });
  pc.addIceCandidate(candidate);
});

////////////////////////////////////////////////////

var localVideo = document.querySelector('#localVideo');

navigator.mediaDevices.getUserMedia({
  audio: true,
  video: true
})
.then(gotStream)
.catch(function(e) {
  alert('getUserMedia() error: ' + e.name);
});

function gotStream(stream) {
  console.log('Adding local stream.');
  localStream = stream;
  localVideo.srcObject = stream;
  try {
    maybeStart();
  } catch(err) {
    console.error(err);
  }
}

var constraints = {
  video: true
};

console.log('Getting user media with constraints', constraints);

if (window.location.hostname !== 'localhost') {
  requestTurn(
    'https://computeengineondemand.appspot.com/turn?username=41784574&key=4080218913'
  );
}

function maybeStart() {
  console.log('>>>>>>> maybeStart() ', localStream);
  console.log('>>>>>> creating peer connection');
  createPeerConnection();
  pc.addStream(localStream);
  doCall();
}

window.onbeforeunload = function() {
  sendMessage('bye');
};

/////////////////////////////////////////////////////////

function createPeerConnection() {
  try {
    pc = new RTCPeerConnection(pcConfig);
    pc.onicecandidate = handleIceCandidate;
    pc.onaddstream = handleRemoteStreamAdded;
    pc.onremovestream = handleRemoteStreamRemoved;

    console.log('Created RTCPeerConnnection');
  } catch (e) {
    console.log('Failed to create PeerConnection, exception: ' + e.message);
    alert('Cannot create RTCPeerConnection object.');
    return;
  }
}

function handleIceCandidate(event) {
  console.log('icecandidate event: ', event);
  if (event.candidate) {
    socket.emit("candidate", {
      type: 'candidate',
      label: event.candidate.sdpMLineIndex,
      id: event.candidate.sdpMid,
      candidate: event.candidate.candidate
    }, room);
  } else {
    console.log('End of candidates.');
  }
}

function handleIceCandidate2(event) {
  console.log('icecandidate1 event: ', event);
  if(event.candidate) {
    socket.emit("candidate2", {
      type: "candidate",
      label: event.candidate.sdpMLineIndex,
      id: event.candidate.sdpMid,
      candidate: event.candidate.candidate
    }, room);
  } else {
    console.log("End of candidate");
  }
}

function handleRemoteStreamAdded(event) {
  console.log('Remote stream added.');
  //remoteStream = event.stream;
  //remoteVideo.srcObject = remoteStream;
  const rmVideo = document.createElement("video");
  rmVideo.autoplay = true;
  rmVideo.srcObject = event.stream;
  document.getElementById("videos").appendChild(rmVideo);
} 

function handleRemoteStreamRemoved(event) {
  console.log('Remote stream removed. Event: ', event);
}

function handleCreateOfferError(event) {
  console.log('createOffer() error: ', event);
}

function doCall() {
  console.log('Sending offer to peer');
  pc.createOffer(setLocalAndSendMessage, handleCreateOfferError);
}

function doAnswer() {
  console.log('Sending answer to peer.');
  pc.createAnswer().then(
    setLocalAndSendMessage,
    onCreateSessionDescriptionError
  );
}

function setLocalAndSendMessage(sessionDescription) {
  pc.setLocalDescription(sessionDescription);
  console.log('setLocalAndSendMessage sending message', sessionDescription);
  if(sessionDescription.type === "answer") {
    socket.emit("answer", sessionDescription, room);
  } else if(sessionDescription.type === "offer") {
    socket.emit("offer", sessionDescription, room);
  }
}

function onCreateSessionDescriptionError(error) {
  //trace('Failed to create session description: ' + error.toString());
}

function requestTurn(turnURL) {
  var turnExists = false;
  for (var i in pcConfig.iceServers) {
    if (pcConfig.iceServers[i].urls.substr(0, 5) === 'turn:') {
      turnExists = true;
      turnReady = true;
      break;
    }
  }
  if (!turnExists) {
    console.log('Getting TURN server from ', turnURL);
    // No TURN server. Get one from computeengineondemand.appspot.com:
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var turnServer = JSON.parse(xhr.responseText);
        console.log('Got TURN server: ', turnServer);
        pcConfig.iceServers.push({
          'urls': 'turn:' + turnServer.username + '@' + turnServer.turn,
          'credential': turnServer.password
        });
        console.log(pcConfig, "this is cadfadsfas");
        turnReady = true;
      }
    };
    xhr.open('GET', turnURL, true);
    xhr.send();
  }
}

function hangup() {
  console.log('Hanging up.');
  stop();
  sendMessage('bye');
}

function handleRemoteHangup() {
  console.log('Session terminated.');
  stop();
}

function stop() {
  pc.close();
  pc = null;
}
    return(
        <>
            <video id="localVideo"></video>
            <S.NextButton onClick={()=>dispatch(InterviewState(2))}>다음</S.NextButton>
        </>
    )
}
export default Interview;

