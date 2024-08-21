import React,{useState} from 'react'
import '../index.css'
export default function Calculator() {

  const [value, setvalue] = useState('')

  const handelChange = (e) =>{
    setvalue (prevent => prevent + e.target.value)
  }

  const handelDelete = () => {
    setvalue (prevent => prevent.slice(0,-1))
  }

const handelClear = () =>{
  setvalue (' ')
}

const handelEqual = () =>{
  setvalue(eval(value))
}

  return (
    
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="row ">
        <input className='display'  value={value} readOnly/>
      </div>
      </div>

      <div className="row my-3">
       <button className='col-3' value='C' onClick={handelClear}>C</button>
       <button className='col-3' value='DE' onClick={handelDelete}>DE</button>
       <button className='col-3' value='.' onClick={handelChange}>.</button>
       <button className='col-3' value='-' onClick={handelChange}>-</button>
      </div>

      <div className="row my-3">
       <button className='col-3' value='7' onClick={handelChange}>7</button>
       <button className='col-3' value='8' onClick={handelChange}>8</button>
       <button className='col-3' value='9' onClick={handelChange}>9</button>
       <button className='col-3' value='+' onClick={handelChange}>+</button>
      </div>

      <div className="row my-3">
       <button className='col-3' value='4' onClick={handelChange}>4</button>
       <button className='col-3' value='5' onClick={handelChange}>5</button>
       <button className='col-3' value='6' onClick={handelChange}>6</button>
       <button className='col-3' value='*' onClick={handelChange}>*</button>
      </div>

      <div className="row my-3">
       <button className='col-3' value='1' onClick={handelChange}>1</button>
       <button className='col-3' value='2' onClick={handelChange}>2</button>
       <button className='col-3' value='3' onClick={handelChange}>3</button>
       <button className='col-3' value='/' onClick={handelChange}>/</button>
      </div>

      <div className="row my-3">
       <button className='col-3' value='0' onClick={handelDelete}>0</button>
       <button className='col-3' value='00' onClick={handelChange}>00</button>
       <button className='col-6' value='=' onClick={handelEqual}>=</button>
      </div>

    </div>
  </div>

  )
}
