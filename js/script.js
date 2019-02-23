process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function () {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        process.stdout.write('To wartość instruction' + instruction);
        if (instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
        } else {
            process.stdout.write('Wrong instruction!\n');
        }
    }
});