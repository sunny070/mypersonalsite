import React from 'react'
import Personalprojectitem from './Personalprojectitem'

const Skills = () => {
  return (
    <div className='project'>
        
        <h1>Here Are Some of The Skills That i Have developed</h1>
        <div className='project__container'>
        <div className='project__wrapper'>
            <ul className='project__items'>
                <Personalprojectitem
                className='text'
                src='../image/html.png'
                text="Hypertext Markup Language"
                link=""
                // src="images/img-9.jpg"
                // text="Explore the hidden waterfall deep inside the Amazon Jungle"
                lable="HTML"
                // path='/services'
                />
                <Personalprojectitem
                  src='../image/css.png'
                  text="Cascading Style Sheets"
                  link=""

                // src="images/img-2.jpg"
                // text="Explore the hidden waterfall deep inside the Amazon Jungle"
                lable="CSS"
                path='/services'
                />
                <Personalprojectitem

                src='../image/java.png'
                // text="Simple Dice Game"
                link="https://sunny070.github.io/dicegame/"
                // src="images/img-4.jpg"
                text="Javascript"
                lable="Javascript"
                path='/products'
                />
            </ul>
            </div>

                <div className='project__wrapper'>
            <ul className='project__items'>

                <Personalprojectitem
                src='../image/c.png'
                // text="Assesment"
                link="https://sunny070.github.io/project/"
                // src="images/img-8.jpg"
                text="C"
                lable="C"
                path='/sign-up'
                />
                <Personalprojectitem
                src='../image/php.png'
                // text="ToDoApp"
                link="https://sunny070.github.io/todolistapp/"
                // src='../image/listed.png'
                text="Hypertext Preprocessor"
                // link="https://sunny070.github.io/project/"
                lable="PHP"
                path='/sign-up'
                />

<Personalprojectitem
                src='../image/python.jpg'
                // text="ToDoApp"
                link="https://sunny070.github.io/todolistapp/"
                // src='../image/listed.png'
                text="Python"
                // link="https://sunny070.github.io/project/"
                lable="Python"
                path='/sign-up'
                />
              </ul>

                </div>
                <div className='project__wrapper'>
            <ul className='project__items'>

                <Personalprojectitem
                src='../image/react.png'
                text="React"
                link="https://sunny070.github.io/todolistapp/"
                // src='../image/listed.png'
                // link="https://sunny070.github.io/project/"
                lable="React"
                path='/sign-up'
                />
                <Personalprojectitem
                src='../image/laravel.png'
                text="Laravel"
                link="https://sunny070.github.io/todolistapp/"
                // src='../image/listed.png'
                
                // link="https://sunny070.github.io/project/"
                lable="Laravel"
                path='/sign-up'
                />
                <Personalprojectitem
                src='../image/office.jpg'
                text="ToDoApp"
                link="https://sunny070.github.io/todolistapp/"
                // src='../image/listed.png'
                // text="Assesment"
                // link="https://sunny070.github.io/project/"
                lable="Microsoft SuiteExcel"
                path='/sign-up'
                />
            </ul>
            </div>

        </div>
        
      
    </div>
    

  )
}

export default Skills
