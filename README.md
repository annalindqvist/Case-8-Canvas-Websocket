# Case 8 - Canvas-Websocket


###### There a alot of branches at the moment. Branch: release2.0 is hosted on render. Branch: feature, feature2.0 and release I wish to delete when I know how to. 
###### Branch: after-presentation I created after the presentation of this case. My plan when/if I get the time, I wish to start with the todo-list in that branch-read me. 

Welcome to my first schoolproject working with canvas and websocket. I have made an simple chat where you can send textmessages & add emojis from picmo's emojipicker. Also you paint an simple drawing with canvas and send as an image in the chat. 

- The chat works best in desktop at the moment due to lack of time on the design. I focused on the functionality of the chat.

- I have this project hosted on render.com. Check it out here: https://chitchatapp.onrender.com

-------------------------------------

If you want to clone the project to your computer follow this steps: 

1. copy this link: https://github.com/annalindqvist/Canvas-Websocket.git
2. in vsc terminal type: git clone https://github.com/annalindqvist/Canvas-Websocket.git and press enter.
- 2.1: cd into project " cd Canvas-Websocket.
- 2.2: run "npm install" in terminal
3. to run this on you localhost you need to change what port you run it on. 
- 3.1: open server.js and make sure port is declared as: "const port = 80;".
- 3.2: open public/js/code.js and make sure websocket is declared as: "const websocket = new WebSocket("ws://localhost:80");".
- 3.4: dont forget to save! 
4. to start project simply type: "node server.js" in terminal


-------------------------------------

# Questions about the buttons in the chat?

- 😎 = to open the emojipicker from picmo
- 🖌️ = to open the canvas or when open press again to close & clear the canvas.
- The button next to 🖌️, (paperplain with hearts), you send your message or drawing.

-------------------------------------
# Skolans krav:

Minimum krav: 
1. Funktionalitet i applikationen ska vara baserad på både websockets och canvas - Check
2. Applikationen ska kunna användas meningsfullt med fler än en uppkopplad klient - Check
3. Använd ws biblotektet - Check
4. Applikationen kan ha delar med 'vanliga' DOM element för ex chatt - Check
5. En README.md som beskriver hur man installerar och använder applikationen - Check

// Extra stuff jag valde att göra:
- Hosta på render.com

// Saker jag önskade var bättre
- Funktionen om någon skriver, den bör sluta direkt när man klickar på skickaknappen, gör det inte nu. Räknar ner från senaste knapptrycket endå.
- Designen behöver mer kärlek
- Roligare canvas-funktion