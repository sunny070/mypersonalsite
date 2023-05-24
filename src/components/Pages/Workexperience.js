import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import Personalproject from './Personalproject'
import Personalprojectitem from './Personalprojectitem'
import web from '../../image/web.jpg'
import java from '../../image/java.png'
// import web from '../../image/web.jpg'




const Workexperience = () => {



  return (

    <div className='project'>

      <h1>Experience Gained so far</h1>
      <div className='project__container'>
        <div className='project__wrapper'>
          <ul className='project__items'>
            <Personalprojectitem
              className='text'
              src={web}
              text="Full Stack Web Developer- Intern
                Department of Information and Communication Technology
                01/2021 - 03/2021, Aizawl,Mizoram 
                ● Build a New Water Connection System for Mizoram Government
                ● Tools: HTML, CSS, Javascript, PHP framework Laravel"
              link=""
              // src="images/img-9.jpg"
              // text="Explore the hidden waterfall deep inside the Amazon Jungle"
              lable="Intern"
            // path='/services'
            />
            <Personalprojectitem
              src={java}
              text="ENGINNERING INTERN/TRAINEE
                  TOOL ROOM AND TRAINING CENTRE
                  12/2020 - 01/2021, Guwahati
                  ● Learned Core JAVA during the pandemic through online"
              link=""

              // src="images/img-2.jpg"
              // text="Explore the hidden waterfall deep inside the Amazon Jungle"
              lable="Training"
              path='/services'
            />

          </ul>
        </div>


      </div>











      {/* <div className='work-container'>
      <div className='work-wrapper'> */}
      {/* <div className='intern'>
    

<div className='intern-desc'>
   It was my first Internship everything was new to me 
   and we all were given Government related project and
    i got a project on New Water Connection System
   where i have to build a web application where user
    can fill application form for their Water Connection
    there were various Authentication used and after completion of
    form various officers accepts the form if its all correct or rejects
    when the form is incorrect and after that the user is registered and 
    can check their status and download the acknowledgement form and even can pay bills and print its reciepts 
     as everything was new to me i have to learn every
      thing from scratch and the time limit was also
       limited but i still manage to complete the given
        task on time where i got to lean many new thing..

        The project focused on developing a web application for a new water connection system. The main objective of the application was to streamline the process of applying for a water connection. Users could access the application and fill out an online form with their personal and address details, along with any other required information.

To ensure the security and authenticity of the application process, various authentication mechanisms were implemented. This could include features like username/password login, two-factor authentication, or other secure authentication protocols. These measures helped protect the user's information and prevent unauthorized access.

Once the user submitted the application form, it would undergo a review process by different officers involved in the water connection system. These officers would carefully examine the form and verify the accuracy and completeness of the information provided. If everything was correct, the form would be accepted, indicating that the user was eligible for a water connection. However, if there were any errors, missing information, or discrepancies, the form would be rejected. In such cases, the user would be informed of the reasons for rejection, allowing them to rectify the issues and resubmit the form if necessary.

Upon acceptance of the application, the user would be officially registered in the system as a recipient of a water connection. This registration would enable them to access various services and features provided by the web application.

One of the key features of the application was the ability for users to check the status of their application. This functionality allowed users to track the progress of their application, providing transparency and reducing the need for manual inquiries. Additionally, users could download an acknowledgement form, which served as proof of their application submission and acceptance.

The web application also facilitated online bill payments for water consumption. Users could view their current bills, make payments securely through integrated payment gateways, and generate receipts for their transactions. This feature aimed to provide convenience and ease of managing water bills for the users.

During your internship, you faced the challenge of learning and familiarizing yourself with various technologies, frameworks, and concepts related to web application development. Despite the time constraints, you successfully completed the project, which not only allowed you to contribute to the development of the water connection system but also provided you with valuable experience and knowledge in building web applications, implementing authentication mechanisms, handling form submissions, and integrating payment gateways



</div>

</div> */}
      {/* <div className='trainee'>
<div className='intern-desc'>
    It was the time when India was suffering from pendamic
    and full lockdown people were not allowed to go out of their residence
    where noting much was available got to learn core java 


    Certainly! During a time when India was experiencing a pandemic and a nationwide lockdown, you utilized this period to learn Core Java. Here's a description of Core Java:

Core Java refers to the fundamental aspects of the Java programming language. It includes the basic building blocks and concepts necessary for developing Java applications. Core Java covers the core features of the language, such as syntax, data types, control structures, object-oriented programming (OOP) principles, and the standard library.

By learning Core Java, you gained an understanding of the foundational concepts required to develop robust and scalable Java applications. Some key topics typically covered in Core Java include:

Syntax and Language Fundamentals: Learning the basic syntax of Java, such as variable declaration, data types, operators, loops, conditionals, and control structures.

Object-Oriented Programming (OOP): Understanding the principles of OOP, including classes, objects, inheritance, polymorphism, encapsulation, and abstraction. These concepts allow you to design and create reusable, modular, and maintainable code.

Exception Handling: Learning how to handle errors and exceptions that may occur during program execution. This includes using try-catch blocks, throwing and catching exceptions, and ensuring graceful error handling in your applications.

Java Standard Library: Exploring the Java Standard Library, which provides a vast collection of pre-built classes and packages for various functionalities. This includes working with input/output (I/O) operations, collections, networking, multithreading, and more.

File Handling: Understanding how to read from and write to files using Java's file handling capabilities. This involves operations like creating, reading, writing, and manipulating files and directories.

Generics: Exploring the concept of generics in Java, which allows you to write reusable code that can work with different data types, providing type safety and eliminating runtime errors.

Java APIs: Familiarizing yourself with the Application Programming Interfaces (APIs) provided by Java, such as the Java Development Kit (JDK), which includes classes and methods for various functionalities like string manipulation, date and time handling, mathematical calculations, and more.

By learning Core Java, you gained the knowledge and skills necessary to develop Java applications, laying a solid foundation for further exploration and specialization in Java programming. This newly acquired expertise could open up opportunities for you to build various types of applications, ranging from desktop applications to web and enterprise solutions using Java technologies.
    
</div>
</div> */}
    </div>



  )


}

export default Workexperience
