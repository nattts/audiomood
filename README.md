# audiomood

## overview

A basic app that plays music to choose music according to the chosen mood.

 A user is presented with the player and dynamically created buttons with different moods. When a particilar mood is chosen the first 7 tracks will be listed in the player. The auto play is not on, therefore to play the track it is has to be selected first.

## to get started

1.`git clone https://github.com/nattts/audiomood.git`

2. if you prefer to run the server with the port of your choice, then in the project directory open file .env and set up the port:

PORT=<your port>

otherwise the default 7000 port will be used.

3.`yarn serve`
4. go to `http://localhost:7000/` or `http://localhost:{your port}/`

## to run some tests

`yarn test`