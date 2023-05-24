import React from 'react'
import Personalprojectitem from './Personalprojectitem'
import html from '../../image/html.png'
import css from '../../image/css.png'
import java from '../../image/java.png'
import c from '../../image/c.png'
import php from '../../image/php.png'
import python from '../../image/python.jpg'
import react from '../../image/react.png'
import laravel from '../../image/laravel.png'
import off from '../../image/office.jpg'





const Skills = () => {
  return (
    <div className='project'>

      <h1>Here Are Some of The Skills That i Have developed</h1>
      <div className='project__container'>
        <div className='project__wrapper'>
          <ul className='project__items'>
            <Personalprojectitem
              className='text'
              src={html}
              text="Hypertext Markup Language"
              link=""
              // src="images/img-9.jpg"
              // text="Explore the hidden waterfall deep inside the Amazon Jungle"
              lable="HTML"
            // path='/services'
            />
            <Personalprojectitem
              src={css}
              text="Cascading Style Sheets"
              link=""

              // src="images/img-2.jpg"
              // text="Explore the hidden waterfall deep inside the Amazon Jungle"
              lable="CSS"
              path='/services'
            />
            <Personalprojectitem

              src={java}
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
              src={c}
              // text="Assesment"
              link="https://sunny070.github.io/project/"
              // src="images/img-8.jpg"
              text="C"
              lable="C"
              path='/sign-up'
            />
            <Personalprojectitem
              src={php}
              // text="ToDoApp"
              link="https://sunny070.github.io/todolistapp/"
              // src='../image/listed.png'
              text="Hypertext Preprocessor"
              // link="https://sunny070.github.io/project/"
              lable="PHP"
              path='/sign-up'
            />

            <Personalprojectitem
              src={python}
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
              src={react}
              text="React"
              link="https://sunny070.github.io/todolistapp/"
              // src='../image/listed.png'
              // link="https://sunny070.github.io/project/"
              lable="React"
              path='/sign-up'
            />
            <Personalprojectitem
              src={laravel}
              text="Laravel"
              link="https://sunny070.github.io/todolistapp/"
              // src='../image/listed.png'

              // link="https://sunny070.github.io/project/"
              lable="Laravel"
              path='/sign-up'
            />
            <Personalprojectitem
              // style={"width:40px"}
              src={off}
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
