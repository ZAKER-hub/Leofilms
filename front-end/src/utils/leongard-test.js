export default result => {
    const pluses_and_cons = {
        "Демонстративность": [[7, 19, 22, 29, 41, 44, 63, 66, 73, 85, 88], [51], 2],
        "Застревание": [[2, 15, 24, 34, 37, 56, 68, 78, 81], [12, 46, 59], 2],
        "Педантичность": [[4, 14, 17, 26, 39, 48, 58, 61, 70, 80, 83], [36], 2],
        "Неуравновешенность": [[8, 20, 30, 42, 52, 64, 74, 86], [], 3],
        "Гипертимность": [[1, 11, 23, 33, 45, 55, 67, 77], [], 3],
        "Дистимичность": [[9, 21, 43, 75, 87], [31, 53, 65], 3],
        "Тревожность": [[16, 27, 38, 49, 60, 71, 82], [5], 3],
        "Циклотимичность": [[6, 18, 28, 40, 50, 62, 72, 84], [], 3],
        "Аффективность": [[10, 32, 54, 76], [], 6],
        "Эмотивность": [[3, 13, 35, 47, 57, 69, 79], [25], 3]
    }

    let person_types = {
        "Демонстративность": 0,
        "Застревание": 0,
        "Педантичность": 0,
        "Неуравновешенность": 0,
        "Гипертимность": 0,
        "Дистимичность": 0,
        "Тревожность": 0,
        "Циклотимичность": 0,
        "Аффективность": 0,
        "Эмотивность": 0
    }

    let genresTypes = {
        "Демонстративность": ['комедия', 'фантастика', 'фэнтези', 'приключения'],
        "Застревание": ['боевик', 'драма', 'вестерн', 'военный', 'криминал'],
        "Педантичность": ['ужасы', 'триллер', 'история', 'документальный', 'новости'],
        "Неуравновешенность": ['боевик', 'ужасы', 'триллер', 'вестерн', 'военный', 'криминал'],
        "Гипертимность": ['комедия', 'боевик', 'мюзикл', 'фэнтези', 'приключения', 'спорт'],
        "Дистимичность": ['ужасы', 'триллер', 'детектив', 'фантастика', 'короткометражка'],
        "Тревожность": ['фантастика', 'детектив', 'история', 'документальный', 'биография'],
        "Циклотимичность": ['ужасы', 'комедия', 'боевик', 'триллер', 'фантастика'],
        "Аффективность": ['драма', 'мелодрама', 'биография', 'концерт', 'музыка'],
        "Эмотивность": ['драма', 'мелодрама', 'артхаус', 'биография']
    }

    for(let i = 0; i < 88; i++){
        if(result[i]){
            for(let key of Object.keys(pluses_and_cons)){
                if(pluses_and_cons[key][0].includes(i+1)){
                    person_types[key] ++
                }
            }

        }
        else{
            for(let key of Object.keys(pluses_and_cons)){
                if(pluses_and_cons[key][1].includes(i+1)){
                    person_types[key] ++
                }
            }
        }
    }

    for(let key of Object.keys(person_types)){
        person_types[key] = person_types[key] * pluses_and_cons[key][2]
    }

    var types = [[],[],[]]
    for(let key of Object.keys(person_types)){
        if(person_types[key] < 19 && person_types[key] > 12){
            types[1].push(key)
        }
        else if (person_types[key] < 25 && person_types[key] > 18){
            types[0].push(key)
        }
        else if (person_types[key] < 13 && person_types[key] > -1){
            types[2].push(key)
        }
    }

    if(types[0].length < 1) {
        let suma = 0
        let numbers = []
        for(let key of Object.keys(person_types)){
            suma += person_types[key]
            numbers.push(person_types[key])
        }
        let max = Math.max.apply(null, numbers)
        let maxFour = Math.floor(max/4)
        let srednee = Math.floor(suma / 10)
        srednee = maxFour + srednee
        while(srednee >= max){
            srednee--
        }

        let peson = []
        for(let key of Object.keys(person_types)){
            if(person_types[key] > srednee){
                peson.push(key)
            }
        }
        types = peson
    }
    else{
        types = types[0]
    }
    let genres_t = []
    for(let type of types){
        genres_t.push(...genresTypes[type])
    }

    let genres = []
    for(let genre of genres_t){
        if(!genres.includes(genre)){
            genres.push(genre)
        }
    }

    return genres
}