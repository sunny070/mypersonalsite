import React from 'react'
import Personalprojectitem from './Personalprojectitem'
import '../../App.css'
import stock from '../../image/stock.jpg'
import covid from '../../image/covid.jpg'
import dice from '../../image/dice.png'
import listed from '../../image/listed.png'
import todo from '../../image/todo.jpg'




const Personalproject = () => {
  return (
    <div className='project'>

      <h1>Check out the Projects I have created</h1>
      <div className='project__container'>
        <div className='project__wrapper'>
          <ul className='project__items'>
            <Personalprojectitem
              className='text'
              src={stock}
              text="StockPricePrediction"
              link=""
              // src="images/img-9.jpg"
              // text="Explore the hidden waterfall deep inside the Amazon Jungle"
              lable="StockPricePrediction"
            // path='/services'
            />
            <Personalprojectitem
              src={covid}
              text="Covid Notification System"
              link=""

              // src="images/img-2.jpg"
              // text="Explore the hidden waterfall deep inside the Amazon Jungle"
              lable="Adventure"
              path='/services'
            />
            <Personalprojectitem

              src={dice}
              text="Simple Dice Game"
              link="https://sunny070.github.io/dicegame/"
              // src="images/img-4.jpg"
              // text="Explore the hidden waterfall deep inside the Amazon Jungle"
              lable="Simple Dice Game"
              path='/products'
            />

            <Personalprojectitem
              src={listed}
              text="Assesment"
              link="https://sunny070.github.io/project/"
              // src="images/img-8.jpg"
              // text="Explore the hidden waterfall deep inside the Amazon Jungle"
              lable="Adventure"
              path='/sign-up'
            />
            <Personalprojectitem
              src={todo}
              text="ToDoApp"
              link="https://sunny070.github.io/todolistapp/"
              // src='../image/listed.png'
              // text="Assesment"
              // link="https://sunny070.github.io/project/"
              lable="ToDoApp"
              path='/sign-up'
            />
          </ul>
        </div>


      </div>



      {/* <div className='project-wrap'>
      <Personalprojectitem 
      className='text'
      src='../image/stock.jpg'
      text="StockPricePrediction"
      link=""
      />
   
      
    
      <Personalprojectitem
      src='../image/covid.jpg'
      text="Covid Notification System"
      link=""
      />
    
      
      <Personalprojectitem
      src='../image/dice.png'
      text="Simple Dice Game"
      link="https://sunny070.github.io/dicegame/"
      />
   

      
      <Personalprojectitem
      src='../image/listed.png'
      text="Assesment"
      link="https://sunny070.github.io/project/"
      />
      
      
      <Personalprojectitem
      src='../image/todo.jpg'
      text="ToDoApp"
      link="https://sunny070.github.io/todolistapp/"
      /> 
      </div> */}
    </div>
  )
}

export default Personalproject
