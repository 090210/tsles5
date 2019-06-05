interface Mens {
    naam: string;
    leeftijd: number;
    geslacht: string;

    jarig();
}

abstract class Persoon implements Mens {
    naam: string;    
    leeftijd: number;
    geslacht: string;

    constructor(naam: string, leeftijd: number, geslacht: string) {
        this.naam = naam;
        this.leeftijd = leeftijd;
        this.geslacht = geslacht;
        
    }

    abstract jarig() : void;
}

class Medewerker extends Persoon {
    jarig(): void {
        this.leeftijd + 1;
    }

}
var jan = new Medewerker('Jan', 10, 'male');
var eduard = new Medewerker('Eduard', 11, 'male');

alert(jan.naam);
