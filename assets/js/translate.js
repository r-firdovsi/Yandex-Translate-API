function Translate(word,language) {
    this.apikey   = "trnsl.1.1.20190424T065631Z.e4ec4049007271db.f628293b2c66d835cea3bf2b01fcb5e4d776205c"
    this.word     = word;
    this.language = language;

    //XHR object

    this.xhr =  new XMLHttpRequest();
}

Translate.prototype.translateWord = function(callback) {
    //Ajax islemleri
    const endPoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET",endPoint);

    this.xhr.onload = () => {
        if(this.xhr.status === 200) {
            const json =  JSON.parse(this.xhr.responseText);
            const text = json.text[0];

            callback(null,text);
        } else {
            callback("Bir hata olusdu", null);
        }
    }

    this.xhr.send();
};

Translate.prototype.changeParams =  function (newWord, newLanguage) {
    this.word = newWord;
    this.language = newLanguage;
};