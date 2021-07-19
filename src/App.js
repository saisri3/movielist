import logo from './logo.svg';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">

<div class="grid-container">
  <div class="grid-item"> <img className="images" src={require('./images/starwars.jpeg').default}  alt="starwars" height="100" width="180" />
</div>
  <div class="grid-item"><p>StarWars:Episode VII</p></div>
  <div class="grid-item"><p>2017</p></div>
  <div class="grid-item"><button>PG-13</button> </div>
  <div class="grid-item"><p>2h31m</p></div>      
</div>

<div class="grid-container">
  <div class="grid-item"> <img className="images" src={require('./images/hardcore.jpg').default}  alt="starwars" height="100" width="180" />
</div>
  <div class="grid-item"><p>Hardcore</p></div>
  <div class="grid-item"><p>2016</p></div>
  <div class="grid-item"><button>R</button> </div>
  <div class="grid-item"><p>1h36m</p></div>    
 </div>
 
 <div class="grid-container">
  <div class="grid-item"> <img className="images" src={require('./images/thecrown.jpeg').default}  alt="starwars" height="100" width="180" />
</div>
  <div class="grid-item"><p>TheCrown</p></div>
  <div class="grid-item"><p>2017</p></div>
  <div class="grid-item"><button>TV-MA</button> </div>
  <div class="grid-item"><p>2 Seasons</p></div>    
</div> 
    
<div class="grid-container">
  <div class="grid-item"> <img className="images" src={require('./images/hardcore.jpg').default}  alt="starwars" height="100" width="180" />
</div>
  <div class="grid-item"><p>Hardcore</p></div>
  <div class="grid-item"><p>2016</p></div>
  <div class="grid-item"><button>R</button> </div>
  <div class="grid-item"><p>1h36m</p></div>    
      </div>
  
      <div class="grid-container">
  <div class="grid-item"> <img className="images" src={require('./images/setitup.jpeg').default}  alt="starwars" height="100" width="180" />
</div>
  <div class="grid-item"><p>Set It Up</p></div>
  <div class="grid-item"><p>2018</p></div>
  <div class="grid-item"><button>TV-14</button> </div>
  <div class="grid-item"><p>1 Season</p></div>    
      </div>
      
      <div class="grid-container">
  <div class="grid-item"> <img className="images" src={require('./images/hardcore.jpg').default}  alt="starwars" height="100" width="180" />
</div>
  <div class="grid-item"><p>Hardcore</p></div>
  <div class="grid-item"><p>2016</p></div>
  <div class="grid-item"><button>R</button> </div>
  <div class="grid-item"><p>1h36m</p></div>    
      </div>
      
      <div class="grid-container">
  <div class="grid-item"> <img className="images" src={require('./images/thesinner.jpg').default}  alt="starwars" height="100" width="180" />
</div>
  <div class="grid-item"><p>The Sinner</p></div>
  <div class="grid-item"><p>2016</p></div>
  <div class="grid-item"><button>R</button> </div>
  <div class="grid-item"><p>1h36m</p></div>    
</div>
      






    </div>
  );
}

export default App;
