import './App.css';
import { useEffect, useState } from 'react';
import "./Exitium.css"
import Tooltip from 'react-float-tooltip'

//Val Storage
//function default_values{
//MAKE GETTER FOR DEFAULT VALUES SO THEY CAN BE RESET PROPERLY
//}

//Arch Multiplier
let Multiplier = 1;
let changev = 0;

//Stat Spread//
let Health = 100;
let Armor = 100;

//____________________
let Strength_Stat = Math.round(50 * Multiplier);
let Agility_Stat = Math.round(50 * Multiplier);
let Intelligence_Stat = Math.round(50 * Multiplier);
let Charisma_Stat = Math.round(50 * Multiplier);
let Perception_Stat = Math.round(50 * Multiplier);
let Vitality_Stat = Math.round(50 * Multiplier);
//_____________________

//Getters n Setters for Stats
function setstr(){
  Math.round(Strength_Stat = Strength_Stat * Multiplier);
}
function setagl(){
  Math.round(Agility_Stat = Agility_Stat * Multiplier);
}
function setint(){
  Math.round(Intelligence_Stat = Intelligence_Stat * Multiplier);
}
function setcha(){
  Math.round(Charisma_Stat = Charisma_Stat * Multiplier);
}
function setper(){
  Math.round(Perception_Stat = Perception_Stat * Multiplier);
}
function setvit(){
  Math.round(Vitality_Stat = Vitality_Stat * Multiplier);
}

function reset(){
  window.location.reload(false);
} 

//Psionic Modifiers
function psi_setper(term){
  Perception_Stat = Perception_Stat+term;
}
function psi_setint(term){
  Intelligence_Stat = Intelligence_Stat+term;
}
//Locked off or More expensive Cybernetics Mods
//Access to Psychic and Telekentic Mods
//Psionic Modifiers

//Android Modifiers
function and_setstr(term){
  Strength_Stat = Strength_Stat+term;
}

function and_setint(term){
  Intelligence_Stat = Intelligence_Stat+term;
}
//Android Modifiers


//Sionen Modifiers 
function sio_setper(term){
  Perception_Stat = Perception_Stat+term;
}
function sio_setint(term){
  Intelligence_Stat = Intelligence_Stat+term;
}
//Sionen Modifiers 

let chosen_archetype;
let chosen_subarchetype;

function modifymulti(modval3){
  Multiplier = modval3;
}


function setchosen_subarchetype(modval2){
  chosen_subarchetype = modval2;
}

function setchosen_archetype(modval1){
  chosen_archetype = modval1;
}

var stat_set = [Strength_Stat, Agility_Stat, Intelligence_Stat, Charisma_Stat, Perception_Stat, Vitality_Stat];
//Modules


function Strength_Log(){
  console.log(Strength_Stat)
}

function Agility_Log(){
  console.log(Agility_Stat)
}

function Intelligence_Log(){
  Intelligence_Stat+=1
  console.log(Intelligence_Stat)
}

function Charisma_Log(){
  console.log(Charisma_Stat)
}

function Perception_Log(){
  console.log(Perception_Stat)
}

function Vitality_Log(){
  console.log(Vitality_Stat)
}






function App() {

  const [count, setCount] = useState(4)

  
  //
  const [Strcount, setStrCount] = useState(50)
  const [Aglcount, setAglCount] = useState(50)
  const [Intcount, setIntCount] = useState(50)
  const [Chacount, setChaCount] = useState(50)
  const [Percount, setPerCount] = useState(50)
  const [Vitcount, setVitCount] = useState(50)
  //
  
  //Stat Increases
  function AddStrStat() {
    setStrCount(prevCount => prevCount +1)
  }
  function SubStrStat() {
    setStrCount(prevCount => prevCount -1)
  }
  function AddAglStat() {
    setAglCount(prevCount => prevCount +1)
  }
  function SubAglStat() {
    setAglCount(prevCount => prevCount -1)
  }
  function AddIntStat() {
    setIntCount(prevCount => prevCount +1)
  }
  function SubIntStat() {
    setIntCount(prevCount => prevCount -1)
  }
  function AddChaStat() {
    setChaCount(prevCount => prevCount +1)
  }
  function SubChaStat() {
    setChaCount(prevCount => prevCount -1)
  }
  function AddPerStat() {
    setPerCount(prevCount => prevCount +1)
  }
  function SubPerStat() {
    setPerCount(prevCount => prevCount -1)
  }
  function AddVitStat() {
    setVitCount(prevCount => prevCount +1)
  }
  function SubVitStat() {
    setVitCount(prevCount => prevCount -1)
  }
  //Stat Increases

  //Stat Mod Calculation
  const [Strmod_count, setStrmod_count] = useState(0)
  const [Aglmod_count, setAglmod_count] = useState(0)
  const [Intmod_count, setIntmod_count] = useState(0)
  const [Chamod_count, setChamod_count] = useState(0)
  const [Permod_count, setPermod_count] = useState(0)
  const [Vitmod_count, setVitmod_count] = useState(0)
  //Stat Mod Calculation

  function Strmod_countadd() {
    setStrCount(prevCount => prevCount +3)
    //Add Some to Raw Vit
    
  }
  function Strmod_countSub() {
    setStrCount(prevCount => prevCount +1)
  }








  function AddStrmod() {
    setStrCount(prevCount => prevCount +1)
  }
  function RemoveStrmod() {
    setStrCount(prevCount => prevCount -1)
  }


  function decrease() {
    setCount(prevCount => prevCount -1)
  }
  function increase() {
    setCount(prevCount => prevCount +1)
  }

  const countries = [
    {id:"1",name:"Human"},
    {id:"2",name:"Android"},
    {id:"3",name:"Sionen"}
  ];

  const states = [
    {id:"1",countryId:"1",name:"Standard"},
    {id:"2",countryId:"1",name:"Psionic"},
    {id:"3",countryId:"2",name:"Liberated"},
    {id:"4",countryId:"2",name:"ExoTech Drone"},
    {id:"5",countryId:"3",name:"Rogue"},
    {id:"6",countryId:"3",name:"Infiltrator"},
    {id:"7",countryId:"3",name:"Elite"}
  ]

  const cities = [
    {id:"1",stateId:"1",name:"A"},
    {id:"2",stateId:"1",name:"B"},
    {id:"3",stateId:"2",name:"C"},
    {id:"4",stateId:"2",name:"D"},
    {id:"1",stateId:"3",name:"E"},
    {id:"2",stateId:"3",name:"F"},
    {id:"3",stateId:"4",name:"G"},
    {id:"4",stateId:"4",name:"H"}
  ]

  const [ country, setCountry] = useState([]);
  const [ state, setState] = useState([]);
  const [ city, setCity] = useState([]);
  
  useEffect(()=>{
    setCountry(countries);
  },[])
  
  const handleCountry = (id) => {
    
    //console.log(chosen_archetype)

    switch(id) {
      case ("1"):
        setchosen_archetype("1")
        console.log("Human");
        break;
      case ("2"):
        setchosen_archetype("2")
        console.log("Android");
        break;
      case ("3"):
        setchosen_archetype("3")
        console.log("Sionen");
        break;       

    }

    //1-Human Arch
    //2-Android Arch
    //3-Sionen Arch

    const dt = states.filter(x => x.countryId === id);
    setState(dt);
  }
  
  const handleState = (id) => {
    
    setchosen_subarchetype(chosen_subarchetype)


    if(chosen_archetype == 1){
      //console.log('Human-Sub-archetype'); 
      switch(id){
        case("1"):
          console.log("Standard");
          console.log("No Access to Psychic and telekinetic Mods")
          console.log("Complete Access to Cybernetic mods at standard cost")
          break;
        case("2"):
          console.log("Psionic");
          modifymulti(.90);
          setstr();
          setagl();
          setcha();
          setint();
          setper();
          setvit();        
          
          psi_setper(10);
          psi_setint(10);
          
          console.log("Complete Access to Psychic and telekinetic Mods")
          console.log("Cybernetic mods are much more difficult to apply and expensive")
          console.log("Lower starting Physical Stats and Higher starting Mental Stats")
          break;
      }

    }else if(chosen_archetype == 2){
      console.log(chosen_archetype);
      switch(id){
        case("3"):
          console.log("Liberated");
          and_setstr(5)
          and_setint(5)
          console.log("Complete Access to Cybernetic mods at a discount")
          break;
        case("4"):
          and_setstr(5)
          and_setint(5)
          console.log("Standard");
          console.log("No Access to Psychic and telekinetic Mods")
          console.log("Complete Access to Cybernetic mods at standard cost")
          break;
    }
  }else if(chosen_archetype == 3){
    console.log(chosen_archetype);
    switch(id){
      case("5"):
        console.log("Rogue");
        break;
      case("6"):
        console.log("Infiltrator");
        sio_setint(5)
        sio_setper(5)
        break;
      case("7"):
        console.log("Elite");
        modifymulti(1.3);
        setstr();
        setagl();
        setcha();
        setint();
        setper();
        setvit();
        sio_setint(10)
        break;
  }
}


    //console.log(id);
    const dt = cities.filter(x => x.stateId === id);
    setCity(dt);
  }

  var set = [Health, Armor];


  




  

  //var Stats
  
  //var Stats


  return (
    <div id = "root" className="row">
      <div id="tooltip-root"></div>
      <div className='column'><p>a</p>
        <p>Hopefully a little less complicated</p>
        <select id="ddlCountry" className='form-control select-class texture' onChange={(e) => handleCountry(e.target.value)}>
          <option value="0">Select Archetype</option>
        {
          country && 
          country !== undefined ?
          country.map((ctr,index) => {
              return(
                  <option key={index} value={ctr.id}>{ctr.name}</option>
              )
          })
          :"No Country"

        }
        </select>
        <br></br>
        <select id="ddlStates" className='form-control select-class texture' onChange={(e) => handleState(e.target.value)}>
          <option value="0">Select Sub Archetype</option>
        {
          state && 
          state !== undefined ?
          state.map((ctr,index) => {
              return(
                  <option key={index} value={ctr.id}>{ctr.name}</option>
              )
          })
          :"No State"

        }
        </select>
        <br></br>
        <select id="ddlCity" className='form-control select-class texture'>
          <option value="0">Select Nothing</option>
        {
          city && 
          city !== undefined ?
          city.map((ctr,index) => {
              return(
                  <option key={index} value={ctr.id}>{ctr.name}</option>
              )
          })
          :"No City"

        }
        </select>

        <p>Lmao</p>
        <button onClick={reset}>Reset Stats\Selection</button>
        
        
        <li>Health Stat: {set[0]}</li>
        <li>Armor Stat: {set[1]}</li>

        <p>-----------</p>
        
        <div className='microlist'>
        <li className='tldrborder'>Strength Stat: {Math.round(Strcount * Multiplier + Strmod_count)} <button onClick={AddStrStat}>+</button><button onClick={SubStrStat}>-</button></li>
        <li className='tldrborder'>Agility Stat: {Math.round(Aglcount * Multiplier + Aglmod_count)} <button onClick={AddAglStat}>+</button><button onClick={SubAglStat}>-</button></li>
        <li className='tldrborder'>Intelligence Stat: {Math.round(Intcount * Multiplier + Intmod_count)} <button onClick={AddIntStat}>+</button><button onClick={SubIntStat}>-</button></li>
        <li className='tldrborder'>Charisma Stat: {Math.round(Chacount * Multiplier + Chamod_count)} <button onClick={AddChaStat}>+</button><button onClick={SubChaStat}>-</button></li>
        <li className='tldrborder'>Perception Stat: {Math.round(Percount * Multiplier + Permod_count)} <button onClick={AddPerStat}>+</button><button onClick={SubPerStat}>-</button></li>
        <li className='tldrborder'>Vitality Stat: {Math.round(Vitcount * Multiplier + Vitmod_count)} <button onClick={AddVitStat}>+</button><button onClick={SubVitStat}>-</button></li>
        </div>
        </div>
        <div className='column'><p className='oslov'>Module Selection</p></div>
        <p></p>
        
        <button className='lebutton' onClick={Strength_Log}>Add Strength Mod</button>
        <button className='lebutton' onClick={Agility_Log}>Add Agility Mod</button>
        <button className='lebutton' onClick={Intelligence_Log}>Add Intelligence Mod</button>
        <button className='lebutton' onClick={setint}>Add Charisma Mod</button>
        <button className='lebutton' onClick={Perception_Log}>Add Perception Mod</button>
        <button className='lebutton' onClick={Vitality_Log}>Add Vitality Mod</button>
        <p></p>
        <button className='lebutton'>Test</button>
        <button className='lebutton' onClick={AddStrmod}>+</button>
        <button className='lebutton' onClick={RemoveStrmod}>-</button>
        <button className='lebutton'>Remove Mod</button>
        <button className='lebutton'>Remove Mod</button>
        <button className='lebutton'>Remove Mod</button>
        -
      </div>
  );
}

export default App;