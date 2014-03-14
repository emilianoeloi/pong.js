var _chamadaCima = true;
var _chamadaBaixo = true;
(function( $, undefined ) {
    $.widget( "mobile.slider", $.mobile.slider, {
        options: {
            popupEnabled: false,
            showValue: false
        },
        _create: function() {
            var o = this.options,
            popup = $( "<div></div>", {
                class: "ui-slider-popup ui-shadow ui-corner-all ui-body-" + ( o.theme ? o.theme : $.mobile.getInheritedTheme( this.element, "c" ) )
            });
            this._super();
            $.extend( this, {
                _currentValue: null,
                _popup: popup,
                _popupVisible: false,
                _handleText: this.handle.find( ".ui-btn-text" )
            });
            this.slider.before( popup );
            popup.hide();
            this._on( this.handle, {
                "vmousedown" : "_showPopup"
            } );
            this._on( this.slider.add( $.mobile.document ), {
                "vmouseup" : "_hidePopup"
            } );
            this._refresh();
        },
        // position the popup centered 5px above the handle
        _positionPopup: function() {
            var pos = $("#move").val();
	    var upKey = (globalPlayer == 'one') ? 'up' : 'w',
                downKey = (globalPlayer == 'one') ? 'down' : 's';
            if(pos > 60){
                if(_chamadaCima){
                    console.log(' pra cima ');
                    console.log('key down');
                    $.get(pressUrl(upKey, 'down'), function() {});
                    _chamadaCima = false;
                }
                _chamadaBaixo = true;
            }else if(pos <40){
                if(_chamadaBaixo){
                    console.log(' pra baixo ');
                    console.log('key down');
                    $.get(pressUrl(downKey, 'down'), function() {});
                    _chamadaBaixo = false;
                }
                _chamadaCima = true;
            }else if (pos > 40 && pos < 60){
                console.log(' parar ');
                console.log('key keyup');
                $.get(pressUrl(upKey, 'up'), function() {});
                _chamadaCima = true;
                _chamadaBaixo = true;
                
            }
            var dstOffset = this.handle.offset();
            this._popup.offset( {
                left: dstOffset.left + ( this.handle.width() - this._popup.width() ) / 2,
                top: dstOffset.top - this._popup.outerHeight() - 5
            });
        },
        _setOption: function( key, value ) {
            this._super( key, value );
            if ( key === "showValue" ) {
                if ( value ) {
                    this._handleText.html( this._value() ).show();
                } else {
                    this._handleText.hide();
                }
            }
        },
        // show value on the handle and in popup
        refresh: function() {
            this._super.apply( this, arguments );
            // necessary because slider's _create() calls refresh(), and that lands
            // here before our own _create() has even run
            if ( !this._popup ) {
                return;
            }
            this._refresh();
        },
        _refresh: function() {
            var o = this.options, newValue;
            if ( o.popupEnabled ) {
                // remove the _title attribute from the handle (which is
                // responsible for the annoying tooltip); NB we have
                // to do it here as the jqm slider sets it every time
                // the slider's value changes :(
                this.handle.removeAttr( 'title' );
            }
            newValue = this._value();
            if ( newValue === this._currentValue ) {
                return;
            }
            this._currentValue = newValue;
            if ( o.popupEnabled ) {
                this._positionPopup();
                this._popup.html( newValue );
            }
            if ( o.showValue ) {
                this._handleText.html( newValue );
            }
        },
        _showPopup: function() {
            if ( this.options.popupEnabled && !this._popupVisible ) {
                this._handleText.hide();
                this._popup.show();
                this._positionPopup();
                this._popupVisible = true;
            }
        },
        _hidePopup: function() {
            if ( this.options.popupEnabled && this._popupVisible ) {
                /*console.log(' parar ');
                console.log('key keyup');
                $.get(pressUrl('updown', 'up'), function() {});
                _chamadaCima = true;
                _chamadaBaixo = true;*/
                $("#move").val(50);
                $("#move").slider('refresh');
                this._handleText.show();
                this._popup.hide();
                this._popupVisible = false;
            }
        }
    });
})( jQuery );
function pressUrl(key, direction){
    var url = [];
    url.push(URL_EXPRESS);
    url.push('pongjs/');
    url.push($('body').attr('id'));
    url.push('/');
    url.push(key);
    url.push('/');
    url.push(direction);
    return url.join('');
}
var globalPlayer = "";
function loadScreen(player){
    globalPlayer = player;
    var title = [];
    title.push(getLanguage().terms.player);
    title.push(" ");
    switch(player){
        case "one":
            title.push(getLanguage().terms.one);
            break;
        case "two":
            title.push(getLanguage().terms.two);
            break;
        default:
            break;
    }
    title.push(" - ");
    title.push(getLanguage().terms.gameName);
    $("title").text(title.join(''));
    $(".header.title").text(title.join(''));
    $("#name").attr('placeholder', getLanguage().terms.phName)
}
