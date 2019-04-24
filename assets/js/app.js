// Prototype,Ajax,callback

eventListeners();


function eventListeners() {
    document.getElementById("translate-form").addEventListener("submit", translateWord);
    document.getElementById("language").onchange = function() {
        //Arayuz islemleri
        ui.changeUI();
    }
}

const translate = new Translate(document.getElementById("word").value, document.getElementById("language").value);
const ui = new UI();
function translateWord(e) {
    
    translate.changeParams(document.getElementById("word").value, document.getElementById("language").value);
    
    translate.translateWord(function(err, response) {
        if (err) {
            //Response 
            console.log(err);
        } else {
            ui.displayTranslate(response);
        }
    });
    e.preventDefault();
}