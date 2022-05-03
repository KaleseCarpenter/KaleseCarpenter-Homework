//Our Ship
let ussAssembly = {
    dodge: function(){
        //allows us to retreat
    }

}

//-----------------------------------------------------

//want to start a loop to let each player go

const battle = () => {
    let playerOneScore = 100

    let alienScore = 100



    console.log("Battle Started")
//start game
//establishRoundOne

    let command = prompt(" Ready to [A]ttack or [R]etreat? ")
    if (command === "A"){
        let target = document.querySelector('.ufo')

        let explosion = document.createElement('img')
            explosion.setAttribute('src', '')
        // signal explosion

        //decrease alien Point Value
    }


    //PlayerOne


    //Player 2
}




let alienMob = []


// Round => each Player gets to attack

//------------------------------------------------------------------

const move = () =>{
    let icon = document.querySelector('.ship')
    icon.classList.toggle('moveSomething')


}

//hull = hp          We are going to put attributes that correspond with the ship
let ussAssembly = {
    hp: 20,
    firepower: 5,
    accuracy: .7
}