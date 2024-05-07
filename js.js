function q(caracteres) {
    let piramide = '';
    for (let i=1; i <= caracteres; i++) {
        piramide += ' '.repeat(caracteres - i) + '^'.repeat(i * 2 - 1) + '\n';
    }
    console.log(piramide);
}
q(10);
