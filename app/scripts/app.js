'use strict';


// Create our JsSIP instance and run it:
var configuration = {
    'ws_servers': 'wss://call.webrtc.nu:443/ws',
    'uri': 'sip:203@webrtc.nu',
    'password': 'Stat1onX!'
};

var ua = new JsSIP.UA(configuration);

console.log('api 12:38');

ua.start();


// Make an audio/video call:
var session = null;

// HTML5 <video> elements in which local and remote video will be shown
var selfView =   document.getElementById('my-video');
var remoteView =  document.getElementById('peer-video');

// Register callbacks to desired call events
var eventHandlers = {
    'progress': function(e){
        console.log('call is in progress');
    },
    'failed': function(e){
        console.log('call failed with cause: ', e);
    },
    'ended': function(e){
        console.log('15:17 call ended with cause: ', e);
       // console.log('call ended with cause: '+ e.data.cause);
    },
    'confirmed': function(e){
        var local_stream = session.connection.getLocalStreams()[0];

        console.log('call confirmed');

        // Attach local stream to selfView
        selfView = JsSIP.rtcninja.attachMediaStream(selfView, local_stream);
    },
    'addstream': function(e){
        var stream = e.stream;

        console.log('remote stream added');

        // Attach remote stream to remoteView
        remoteView = JsSIP.rtcninja.attachMediaStream(remoteView, stream);
    }
};

var options = {
    'eventHandlers': eventHandlers,
    'mediaConstraints': {'audio': true, 'video': true}
};

// call Chaz
session = ua.call('sip:205@call.webrtc.nu', options);


