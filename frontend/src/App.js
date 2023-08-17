 
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="header">
          <img class="logo" src="c:\Users\Giriraj Ranjan\Downloads\upgard logo.png" alt="company logo"></img>
          <h2 className="certificate">Internship Certificates</h2>
        </div>
        <div className="content">
          <lable className="FirstName">First Name:</lable>
          <input className="FirstNameinput" type="name"></input>
          <lable className="lastname">Last Name:</lable>
          <input className="lastnameinput" type="name"></input>
          <div>
           <lable className="mobilename">mobile No</lable>
           <input type='number' className='mobileinput'></input>
          </div>

          <div>
            <lable className="emailname">Email</lable>
            <input type="email" className='emailinput'></input>
          </div>

          <div className='university'>
            <lable className="universityname">University/Institution Name:</lable>
            <input className="universityinput"></input>
          </div>
          <div className='internship'>
            <lable className="internshipcomplete">has successfully completed an internship at</lable>
            <input type='date' className='internshipinput'></input>
            <h4 className="companyname">Company Name</h4>
            <input className="companyinput"></input>
            <p className="companyaddress">company Address</p>
            <textarea className="companyaddresstext"></textarea>
          </div>
           <div className='button'>
           <button className='submitbutton'>Submit</button>
           </div>
           
           

        </div>
    </div>
  );
}

export default App;
