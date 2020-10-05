/* eslint-disable no-unused-vars */


const createCalculator = () => {
    return {
        total: 0,
 
        value () {
           return this.total;
        },

        add (num) {
           this.total += num;
        },

        subtract (num) {
            this.total -= num;
        },

        clear () {
            this.total = 0;
        }


    }

   
}

const addSquareMethod = arr => {
    return arr.map ( x => {
        x.square = function () {
            return this.total * this.total;
        }
        return x;
    })
}


// arr.every(square)












const humanCalculatorInnerProto = 
     {
 
        value () {
           return this.total;
        },

        add (num) {
           this.total += num;
        },

        subtract (num) {
            this.total -= num;
        },

        clear () {
            this.total = -10;
        },


    }

   


const createHumanCalculator = () => {
    const humanCalculator = Object.create(humanCalculatorInnerProto);
    humanCalculator.total = -10;
    return humanCalculator;
}


