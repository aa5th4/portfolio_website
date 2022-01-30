import Profile from './container/Profile';
import './App.css';
import About from './container/About';
import Resumepage from './container/Resumepage';
import Contact from './container/Contact';


function App() {

  const reveal = () =>{
    var reveals=document.querySelectorAll('.reveal');
    for(var i=0;i <reveals.length;i++){
      var windowheight = window.innerHeight;
      var revealtop=reveals[i].getBoundingClientRect().top;
      var revealpoint=150;
      if(revealtop<windowheight- revealpoint){
        reveals[i].classList.add('active');
      }
      else{
        reveals[i].classList.remove('active');
      }
    }
}

  window.addEventListener('scroll',reveal);
 

  return (
    <div className="App">
        <Profile/>
        <About/>
        <Resumepage/>
        <Contact/>
    </div>
  );
}

export default App;
