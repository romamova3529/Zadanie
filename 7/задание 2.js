let arrayOfEmails = new Array();
let blackList = new Array();

arrayOfEmails = [ 'romanova@gmail.com', 'djkjdkjkdfkj@mail.ru', 'panfddsfsafov@mail.ru', 'andreykras@mail.ru', 'danila@mail.ru', 'dekan@mail.ru'];
blackList = ['panfddsfsafov@mail.ru', 'dekan@mail.ru'];


console.log("Все эмайлы:\n" + arrayOfEmails.join("|") );
console.log("черный список:\n" + blackList.join("|") );
filter(arrayOfEmails, blackList);
function filter(allEmails, blackList) {
  for (let i = 0; i < allEmails.length; ++i) {
    for (let n = 0; n < blackList.length; n++) {
      if (allEmails[i] == blackList[n]) {
        allEmails.splice(i, 1);
        --i;
      }
    }
  }
  console.log("оставшиеся:\n" + allEmails.join("|") + "\n__");
}