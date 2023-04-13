export interface Iuser {
    email: string,
    login: string,
    password: string,
    name: string,
}


const usersBase: Iuser[]  = [{
    email: "danilayumatov@yandex.ru",
    login: "h8m3m0r3",
    password: "11111111",
    name: "Данила",
}, {
    email: "ivanterewenko@yandex.ru",
    login: "IvanTerewenkoE",
    password: "22222222",
    name: "Иван",
}]

export {usersBase};