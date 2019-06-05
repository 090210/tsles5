var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persoon = /** @class */ (function () {
    function Persoon(naam, leeftijd, geslacht) {
        this.naam = naam;
        this.leeftijd = leeftijd;
        this.geslacht = geslacht;
    }
    return Persoon;
}());
var Medewerker = /** @class */ (function (_super) {
    __extends(Medewerker, _super);
    function Medewerker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Medewerker.prototype.jarig = function () {
        return this.leeftijd + 1;
    };
    return Medewerker;
}(Persoon));
var jan = new Medewerker('Jan', 10, 'male');
var eduard = new Medewerker('Eduard', 11, 'male');
alert(jan.jarig());
