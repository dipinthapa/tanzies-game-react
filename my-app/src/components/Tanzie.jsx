import React from 'react'
import "../styles/tenzie.css"
import Dice from './Dice'
import { nanoid } from 'nanoid'
import Conftti from 'react-confetti'


const Tanzie = () => {
    const [dices, setDices] = React.useState(allNewDices)
    const [tanzie, setTanzie] = React.useState(false);
    const [roll, setRoll] = React.useState(0)
    const [start, setStart] = React.useState(0)
    const [seconds, setSeconds] = React.useState(0)
    const [minutes, setMinutes] =React.useState(0)
    const [hours, setHours] = React.useState(0)

    if (seconds > 59) {
        setSeconds(0)
    }
    if (minutes > 59) {
        setMinutes(0)
        setHours(hours == hours -1)
    }
    if (hours > 23) {
        setHours(0)
    }

    React.useEffect(() => {
        let timer =setInterval(() => {
            if (!start) {
                return
            }
            if (tanzie){
                return
            }
            setSeconds(seconds => seconds + 1)
        }, 1000)
        return () => clearInterval(timer)
    }, [start, !tanzie])

    React.useEffect(()=> {
        let value = dices[0].value
        let isHeld = dices.every(dice => dice.isHeld)
        let isSameValue = dices.every(dice => dice.value == value)
    })

    function allNewDices(){
        const newArray = []
        for (let i = 0; i < 10; i++){
            newArray.push({id:nanoid(), value: (Math.floor(Math.random()* 6) + 1), isHeld:false})
        }
    }

    function holdDice(id){
        setStart(true)
        if (tanzie){
            return
        }
        setDices(dices => dices.map(dice =>{
            return dice.id === id ? {...dice, isHeld: !dice.isHeld} : dice
        } ))
    }

    function rollDice() {
        if (tanzie){
            setHours(0)
            setSeconds(0)
            setMinutes(0)
            setStart(false)
            setDices(allNewDices())
            return
        }
        setDices(dices => dices.map(dice =>{
            return dice.isHeld === false ? {...dice, value: (Math.floor(Math.random() * 6) + 1)} : dice
        }))
        setRoll(x => x + 1)
    }

    const diceElements = dices.map(dice => {
        return {
            <Dice />
        }
    })

  return (
    <>
        <main>
            <h1 className='title'>Tanzies </h1>
            <p className='instruction'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="start-menu">

            </div>
        </main>
    </>
  )
}

export default Tanzie
