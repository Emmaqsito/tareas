function pan(panOnoPan) {
    panOnoPan = panOnoPan.toLowerCase();
    const alfabeto = 'abcdefghijklmnñopqrstuvwxyz';
    for (let letra of alfabeto) {if(!panOnoPan.includes(letra)) {return false;}}return true;}
    let panOnoPan = "Benjamín pidió una bebida de kiwi y fresa. Noé, sin vergüenza, la más exquisita champaña del menú";
if (pan(panOnoPan)) {
    console.log("Si es");
} else {
    console.log("Sigue participando");
}