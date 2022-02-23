import './App.css';
import m from "./m.png"
import Drop from './Drop.js';
import Pos from './Pos'

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
function App() {
  return (
    <>
<div className="container">
<div className="contactInfo">
 <img className="me" src={m}></img>
  </div>
  <div className="contactForm">
<form>
<label className='form-label'></label>
          <input
            className='form-input'
            type='text'
            name='Full Name'
            placeholder='Full Name'/>
            
            <label className='form-label'></label>
          <input
            className='form-input'
            type='text'
            name='paste your Linkedin link'
            placeholder='Paste your Linkedin link'/>
          
            <label className='form-label'></label>
          <input
            className='form-input'
            type='text'
            name='Paste your Instagram Id '
            placeholder='Paste your Instagram Id'/>

            <label className='form-label'></label>
          <input
            className='form-input'
            type='text'
            name='Paste your Photo link '
            placeholder='Paste your photo link'/>
<br/>
<Drop/>
<br/>
<Pos/>
<button className='form-input-btn' type="submit">Send</button>

</form>

  </div>
</div>
    </>
  );
}
export default App;
