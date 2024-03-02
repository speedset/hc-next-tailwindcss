import './togle-dark.css'
import {SunIcon, MoonIcon} from '@heroicons/react/24/outline'
export default function TogleDark(){
  return(
    <div className="dor-check">
    <input className="chk2" type="checkbox" id="check22" />
    <label className="lbl2" htmlFor="check22">
      <span className="circulo">        
        <SunIcon className="sun-svg"/>
        <MoonIcon className="moon-svg"/>       
      </span>
      <div className="invi"></div>
    </label>
  </div>
  )
}