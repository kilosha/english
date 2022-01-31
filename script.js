document.addEventListener("DOMContentLoaded", ()=>{
    
    let words = [
    {
        en: "milestone",
        ru: "этап, веха (в развитии)"
    },
    {
        en: "to get out of hand / to get out of control",
        ru: "выходить из-под контроля"
    },
    {
        en: "sufficient",
        ru: "достаточный"
    },
    {
        en: "to restrain",
        ru: "сдерживать, ограничивать"
    },
    {
        en: "vendor",
        ru: "продавец"
    },
    {
        en: "prospect",
        ru: "перспектива"
    },
    {
        en: "to hinder",
        ru: "мешать, препятствовать"
    },
    {
        en: "get used to it(to learning) | be used to",
        ru: "привыкнуть"
    },
    {
        en: "enhancement",
        ru: "улучшение"
    },
    {
        en: "afterwards",
        ru: "потом, в последствии"
    },
    {
        en: "to diminish",
        ru: "уменьшать(ся)"
    },
    {
        en: "capabilities",
        ru: "возможности"
    },
    {
        en: "evaluation",
        ru: "оценка"
    },
    {
        en: "compliance",
        ru: "согласие, соответстве"
    },
    {
        en: "confidence",
        ru: "уверенность, смелость, доверие, достоверность, конфиденциальность"
    },
    {
        en: "suffer (from)",
        ru: "страдать"
    },
    {
        en: "however",
        ru: "тем не менее, однако"
    },
    {
        en: "occasionally",
        ru: "случайно"
    },
    {
        en: "investigate",
        ru: "изучать, узнавать, исследовать, расследовать"
    },
    {
        en: "approximately",
        ru: "примерно"
    },
    {
        en: "survey",
        ru: "опрос"
    },
    {
        en: "gather",
        ru: "собирать"
    },
    {
        en: "omnipotent",
        ru: "всемогущий"
    },
    {
        en: "slumber party",
        ru: "девичник"
    },
        
    


];


let div = document.getElementById("input");

let word = document.getElementById('russian_word');
word.innerHTML = words[0].ru;

// words.forEach(word => {
//     let newWord = document.createElement('div');
//     newWord.innerHTML = `
//         <div class="word">
//             <div>${word.en}</div>
//             <div>${word.ru}</div>
//         </div>
//     `   
//     div.append(newWord)
// })

document.getElementById("translate").addEventListener("click", () => {
    let currentWord = document.getElementById("russian_word").innerHTML
    let newWord = words.filter(word => word.ru == currentWord);
    document.getElementById("english_word").innerHTML = newWord[0].en
})

document.querySelector("#next").addEventListener("click", () => {
    let currentWord = document.getElementById("russian_word").innerHTML
    let index = words.findIndex(word => word.ru == currentWord);
    let lastIndex = words.length - 1;
    document.getElementById("russian_word").innerHTML = lastIndex > index ? words[index+1].ru : words[0].ru; 
    document.getElementById("english_word").innerHTML = "";
})

});