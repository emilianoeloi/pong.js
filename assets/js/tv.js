function TV(){
    this._title = "";
    this._buttonResetText = "";
    this._buttonPauseText = "";
}
TV.prototype = {
    setTitle: function(title){
        this._title = title;
    },
    getTitle: function(){
        return this._title;
    },
    setButtonResetText: function(text){
        this._buttonResetText = text;
    },
    getButtonResetText: function(){
        return this._buttonResetText;
    },
    setButtonPauseText: function(text){
        this._buttonPauseText = text;
    },
   getButtonPauseText: function(){
        return this._buttonPauseText;
    }
}