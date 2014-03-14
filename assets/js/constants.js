var URL = "http://emiliano.bocamuchas.org/pong.js/";
var URL_SOCKET = "http://emiliano.bocamuchas.org:8080";
var URL_EXPRESS = "http://emiliano.bocamuchas.org:8000/";
var IMG = "assets/img/";
var JS = "assets/js/";
var CSS = "assets/css";
var LANGUAGES = {"en":{"acronym":"en","name":"English", "terms":{
                    "gameName":"Pong",
                    "resetButton":"Reset",
                    "pauseButton":"Pause",
                    "joystick":"Joystick",
                    "takeJoystick":"Take the joystick",
                    "connecting": "Connecting",
                    "connected": "Connected",
                    "ready": "Ready",
                    "waiting": "Waiting",
                    "loading": "Loading",
                    "player": "Player",
                    "one": "One",
                    "two": "Two",
                    "phName": "Type your name"} },
                 "pt":{"acronym":"pt","name":"Português", "terms":{
                     "gameName":"Telejogo",
                     "resetButton":"Iniciar",
                     "pauseButton":"Pausar",
                     "joystick":"Controle",
                     "takeJoystick":"Pegue o controle",
                     "connecting": "Conectando",
                     "connected": "Conectado",
                     "ready": "Pronto",
                     "waiting": "Aguardando",
                     "loading": "Carregando",
                     "player": "Jogador",
                     "one": "Um",
                     "two": "Dois",
                     "phName": "Digite seu nome"} },
                 "es":{"acronym":"es","name":"Españo", "terms":{
                     "gameName":"Tele-pong",
                     "resetButton":"Inicio",
                     "pauseButton":"Pausa",
                     "joystick":"Controlador",
                     "takeJoystick":"Agarre el controlador",
                     "connecting": "Conectando",
                     "connected": "Conectado",
                     "ready": "Listos",
                     "waiting": "Esperando",
                     "loading": "Cargando",
                     "player": "Jugador",
                     "one": "Uno",
                     "two": "Dos",
                     "phName": "Escriba su nombre"} } };
var DEFAULT_LANGUAGE = LANGUAGES.pt;
