import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/25486388?s=460&u=b9bffd30c4bdf0adcfc73a8893ca204b81a77350&v=4" alt="Janderson Vilas Boas"/>
        <div>
          <strong>Janderson Vilas Boas</strong>
          <span>Química</span>
        </div>
      </header>
    
      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br /><br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiência.
      </p>
    
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
    );
  }
  
  export default TeacherItem;