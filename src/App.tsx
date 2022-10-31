import './App.css'

function App() {

  return (
    <div>
      <img className="logo" src="../mplogo.png" alt="logo"/>
      <br />
      <img id="gif" src="../in-build.gif" alt="in-build"/>
      <p className='text'>Pagina en construccion...</p>
      <div className='social-media-container'>
        <a className='social-media' href='https://github.com/MarioParrilla' target="_blank" ><img className='logo-social-media' src='../github.svg'/></a>
        <a className='social-media' href='https://www.linkedin.com/in/marioparrillamaroto/' target="_blank" ><img className='logo-social-media' src='../linkedin.svg'/></a>
      </div>
    </div>
  )
}

export default App
