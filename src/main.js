// import { Start } from './scenes/Start.js';

// const config = {
//     type: Phaser.AUTO,
//     title: 'Overlord Rising',
//     description: '',
//     parent: 'game-container',
//     width: 1280,
//     height: 720,
//     backgroundColor: '#000000',
//     pixelArt: false,
//     scene: [
//         Start
//     ],
//     scale: {
//         mode: Phaser.Scale.FIT,
//         autoCenter: Phaser.Scale.CENTER_BOTH
//     },
// }

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [window.Start],
};

new Phaser.Game(config);