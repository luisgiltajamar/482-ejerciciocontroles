(function() {
    WinJS.Namespace.define("Controles",{
        
        Mayusculas: WinJS.Class.define(function(element, options) {
            if (!element || element.tagName.toLowerCase() !== "input") {
                throw "Tipo de control incorrecto";
            }
            this._element = element;
            this._element.winControl = this;
            this._element.addEventListener("keyup", this._valueChanged.bind(this), false);
            this._valueChanged();
        }, {
            _element: null,
            _valueChanged: function() {
                var tx = this._element.value;
                tx = tx.toUpperCase();
                this._element.value = tx;
               }


        }, {}),
        Passwords:WinJS.Class.define(function(element, options) {
            this._element = element;
            this._element.winControl = this;
            options = options || {}
            this._etiqueta = options.etiqueta || "Password:";
            this._initControl();

        }, {
            _element: null,
            _initControl: function() {
                var label = document.createElement("label");
               // label.setAttribute("innerText", this._etiqueta);
                var tx = document.createTextNode(this._etiqueta);
                label.appendChild(tx);

                var caja = document.createElement("input");
                caja.setAttribute("type", "password");

                this._element.appendChild(label);
                this._element.appendChild(caja);
               }


        }, {})
    });


})();