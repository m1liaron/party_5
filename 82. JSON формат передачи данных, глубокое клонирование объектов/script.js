'use strict';

const persone = {
    name: 'Alex',
    tel: '+84384238242',
    parents:{
        mom:'Olga',
        dad:'Oleja'
    }
};

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);