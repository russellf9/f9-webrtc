# f9-webrtc
An exploration of WebRTC

## Motivation

I want to create a testbed for various WebRTC functionality on a more _vanilla_ environment before I progress to investigating further the use of WebRTC with Cordova and (ionic).

## Requirements

I've a related Trello board at: [f9-webrtc](https://trello.com/b/Gbe5U7pc/f9-webrtc).

Requirements include:

- Setup sip server
- Use jssip
- Use CORDOVA/Ionic
- Test the jssip-cordova plugin


## SIP proxies/servers

I've had real issues setting up a `SIP proxies/servers`. I went through the list at [interoperability - SIP proxies/servers](http://jssip.net/documentation/misc/interoperability/), and wasn't able to find a simple (for me) version to use and set up.

## Running the app

I haven't added any Gulp, or server stuff so just activate MAMP and run in Chrome:

```
http://localhost:8888/www.factornine.co.uk/development/f9-webrtc/app/
```
Or use Webstorm to select `index.html` -> Open in Browser -> Chrome


