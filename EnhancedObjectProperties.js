/**
 * Just demonstrating some enhanced features of JavaScript with Objects.
 */

const soccerTeam = "SOCCER"

const soccer = (a, b) => ({
    [soccerTeam.toLocaleLowerCase()]: a,
    b,
    getTeamName(){
        return this.b - (this.b - 30)
    }
})

const newName = soccer("Team", 10)
console.log(newName)
console.log(newName.getTeamName())

/**
 * When working with this and the scope of objects, function () must be
 * used instead of arrow functions for the TOP level property.
 */

const person = {
    firstName: "Stefan",
    lastName: "Bayne",
    cars: ["Hyundai", "Mitsubishi"],
    toString: function () {
        console.log(`Name: ${this.firstName}`)
        this.cars.forEach(car => {
            console.log(`Name: ${this.firstName} drives ${car}`)
        })
    }
}

person.toString()

/**
 * 
 * OUTPUT:
 * 
 * { soccer: 'Team', b: 10, getTeamName: [Function: getTeamName] }
30
Name: Stefan
Name: Stefan drives Hyundai
Name: Stefan drives Mitsubishi
 */