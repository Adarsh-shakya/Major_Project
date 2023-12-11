import React ,{useState}from 'react'

const Test = () => {
    
    const [name, setName]=useState('');
    const [password,setPassword]=useState('');
    const [city,setCity]=useState('');

    const submitHendel=(e)=>{
        e.preventDefault()
        console.log(name,password,city);
        alert(`name ${name} password ${password} city ${city}`);

    }

  return (
    <div>
      <form onSubmit={submitHendel} >
          <label>Name</label>
          <input type='name' id='name' name='name' onChange={(e)=>{setName(e.target.value)}}/>
          <label>password</label>
          <input type='password' id='password' name='password' onChange={(e)=>{setPassword(e.target.value)}}/>
          <select value={city} onChange={(e)=>{setCity(e.target.value)}}>
            <option value="Etah" >Etah</option>
            <option value="Mathura">Mathura</option>
            <option value="Kasganj">Kasganj</option>
            <option value="Vareli">Vareli</option>
            <option value="Hathras">Hathras</option>
          </select>
          <input type='submit'  onClick={submitHendel}/>
      </form>
    </div>
  )
}

export default Test
