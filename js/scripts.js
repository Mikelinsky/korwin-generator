window.onload = function () {
    let firstTable = ['Ja chcę powiedzieć jedna rzecz:', 'Trzeba powiedzieć jasno:', 'Jak powiedział wybitny krakowianin Stanisław Lem:', 'Prosze mnie dobrze zrozumieć:', 'Ja chciałem panstwu przypomnieć, że:', 'Niech państwo nie mają złudzeń:', 'Powiedzmy to wyraźnie:'];
    let secondTable = ['przedstawiciele czerwonej hołoty', 'ci wszyscy (tfu!) geje', 'funkcjonariusze reżimowej telewizji', 'tak zwani ekolodzy', 'ci wszyscy (tfu!) demokraci', 'agenci bezpieki', 'feminazistki'];
    let thirdTable = ['zupełnie bezkarnie', 'całkowicie bezczelnie', 'o pogladach na lewo od komunizmu', 'celowo i świadomie', 'z premedytacją', 'od czasów Okrągłego Stołu', 'w ramach postępu'];
    let fourthTable = ['nawołują do podniesienia podatków', 'próbują wyrzucić kierowców z miast', 'próbuja skłócić Polskę z Rosją', 'głoszą brednie o globalnym ociepleniu', 'zakazuja posiadania broni', 'nie dopuszczaja prwicy do władzy', 'ucza dzieci homoseksualizmu'];
    let fifthTable = ['bo dzięki temu mogą kraść', 'bo dostają za to pieniądze', 'bo tak się uczy w państwowej szkole', 'bo bez tego (tfu!) demokracja nie może istnieć', 'bo głupich jest więcej niż mądrych', 'bo chcą tworzyć raj na ziemi', 'bo chcą niszczyć cywilizację białego cżłowieka'];
    let sixthTable = ['przez kolejne kadencje', ' o czym się nie mówi', 'i właśnie dlatego Europa umiera', 'ale przyjdą muzułmanie i zrobią porządek', 'tak samo z resztą jak za Hitlera', 'proszę zobaczyć co się dzieje na Zachodzie, jesli mi państwo nie wierzą', 'co lat temu sto nikomu nie przyszłoby nawet do głowy'];

    let firstParagraph = document.getElementById('para1');
    let secondParagraph = document.getElementById('para2');
    let thirdParagraph = document.getElementById('para3');
    let fourthParagraph = document.getElementById('para4');
    let fifthParagraph = document.getElementById('para5');
    let sixthParagraph = document.getElementById('para6');

    let generateButton = document.getElementById('generate-text');

    generateButton.addEventListener('click', function () {

        let firstPart = firstTable[Math.floor(Math.random() * firstTable.length)];
        let secondPart = secondTable[Math.floor(Math.random() * secondTable.length)];
        let thirdPart = thirdTable[Math.floor(Math.random() * thirdTable.length)];
        let fourthPart = fourthTable[Math.floor(Math.random() * fourthTable.length)];
        let fifthPart = fifthTable[Math.floor(Math.random() * fifthTable.length)];
        let sixthPart = sixthTable[Math.floor(Math.random() * sixthTable.length)];

        firstParagraph.innerText = firstPart;
        secondParagraph.innerText = secondPart;
        thirdParagraph.innerText = thirdPart;
        fourthParagraph.innerText = fourthPart;
        fifthParagraph.innerText = fifthPart;
        sixthParagraph.innerText = sixthPart;
    });
}



