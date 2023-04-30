/*Exercitiul 1
class masina {
    constructor(marca,model,culoare,kilometraj) {
        this.marca=marca;
        this.model=model;
        this.culoare=culoare;
        this.kilometraj=kilometraj;
    }

get proprietati() {
    return this.marca+this.model+this.culoare+this.kilometraj;
}

set proprietati() {
    return this.marca+this.model+this.culoare+this.kilometraj;
}
}
const masina1=newMasina('Volvo','XC-60','Negru','234000');
console.log(masina1.proprietati);
const masina2=newMasina2('Mazda', 'CX-5', 'Verde', '111000');
console.log(masina2.propritati);
const masina3=newMasina3('Dacia', 'BIGGSTER', 'Albastru', '20000');
console.log(masina3.propritati);
*/

/*Exercitiul 2
class masina {
    constructor(marca,model,culoare,kilometraj) {
        this.marca=marca;
        this.model=model;
        this.culoare=culoare;
        this.kilometraj=kilometraj;
    }

get proprietati() {
    return this.marca+this.model+this.culoare+this.kilometraj;
}

class masinaDeCurse extends masina {
    constructor(marca,model,culoare,kilometraj,participalaCampionat) {
       super(marca,culoare,model,kilometraj)
       this.participalaCampionat=participalaCampionat;
    }
}
get proprietati() {
    return this.marca+this.model+this.culoare+this.kilometraj;
}
get participalaCampionat(pozitiaInCampionat) {
    if (pozitiaInCampionat>=0)
    return  'Am castigat locul' $this.pozitiaInCampionat' 
} else {
    return 'Nu am castigat nicium premiu'
}
}
const m1=newmasinaDeCurse('Toyota','Turbo','Rosu','100000');
console.log(m1.proprietati);
console.log(m1.participalaCampionat(2));
console.log(m1.participalaCampionat(-1));