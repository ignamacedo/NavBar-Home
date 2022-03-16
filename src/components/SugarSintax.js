import React from 'react';

export default function SugarSyntax(){
    
    var array = [5,6,7]; //array declarado

    //BUCLE FOR..OF
    const loopFOROF = () =>{
        let bucleforOF = ``; 
        for(let index of array){ 
            bucleforOF += `${i}`;
        }
        return bucleforOF;
    }

    //TERNARIO
    const ternbary = (boolean) => { 
        let result;
        boolean ? result = `${boolean}` : result = `${boolean}` 
        return result;
    }

    //SEPEAD...
    const spreadOperator = () =>{
        
        let newElement = 10;
        let array2 = [...array,newElement];
        //pusheo un elemento
        retrun `${array2}`;
    }

    //.filter(condicion)
    const filter = () =>{
        //pasa datos de un array a otro, pero filtrando por la condicion
        const words = ['spray', 'item', 'elite', 'exuberant', 'destruction', 'present'];
        const result = words.filter(word => word.length > 6);
        return `${result}`;
    }
}
