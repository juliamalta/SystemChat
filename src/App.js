
import './App.css';
import Image from './assets/programado.jpg'
import Image2 from './assets/perfil.jpg'
import Sand  from "./assets/send.png"

function App() {
  return (
    <div className="container">
      <div className="back-ground"></div>
      
      <div className="chat-container">

  <div className='chat-contacts'>
  <div className='chat-options'></div>
  
  <div className='chat-item'> 
  
  <img src={Image} className='image-profile' alt=''/>
  <div className='title-chat-container'>
    <span  className='title-messsage'>Networking Profissao Programador</span>
    <span className='last-message'>Paulo : Bom dia!</span>

    </div>

  </div>

  <div className='chat-item'> 
  <img src={Image2} className='image-profile' alt=''/>
  <div className='title-chat-container'>
    <span  className='title-messsage'>Julia</span>
    <span className='last-message'>Júlia: Oiii!</span>
    </div>
  </div>
  </div>

  <div className='chat-Message'>
  <div className='chat-options'>
  <div className='chat-item'> 
  
  <img src={Image} className='image-profile' alt=''/>
  <div className='title-chat-container'>
    <span  className='title-messsage'>Networking Profissao Programador</span>
    <span className='last-message'>Paulo ,Jose, Marcio ,Georgio</span>

    </div>

  </div>
  </div>

  <div className='chat-messages-area'>

  </div>
<div className='chat-input-area'>
  <input className="chat-input" placeHolder="Mensagem" />
<img src = {Sand} alt ="" className='send-message-icon' />
</div>

  </div>
  
  
  
  
  </div>
  </div>
  );
}

export default App;
