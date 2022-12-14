const array = [];
for (let i = 1; i < 29; i++){
array.push(i);
}
array.forEach(e => {
const date = new Date(2023, 1, e);
const day = new Intl.DateTimeFormat('ru-RU', { weekday: 'long'}).format(date);
console.log(`${e} Февраля, ${day}`);
});
