  import {useState} from 'react'

import Button from './Button'




const About = () => {



  // const state = useState("Anuska")
  // console.log(state)
  // console.log(state[1])



const state = useState(0)
// const firstItem  = state[0]
// const secondItem = state[1]



const[count , setCount] = useState(0)

const increaseCounter = () => {
  setCount(count + 1)
}
const decreaseCounter = () => {
  setCount(count - 1)
}

  return (
    <div>

      <h1>{count}</h1>

      
      <Button onClick={increaseCounter}>+</Button>
      <Button onClick={decreaseCounter}>-</Button>
    </div>
  )
}


export default About


    

    

