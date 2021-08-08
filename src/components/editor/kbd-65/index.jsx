import React, { useState } from 'react';
import styles from './Kbd65.module.css'
import Key from '../key'
import generate from '../../../../pages/api/generate';
const Kbd65 = () => {

  const [mapChanges,addChange] = useState([])

  const handleMapUpdate = (mapChange, kbdKey) => {
    /* try to find kbdkey in mapChanges, if found , update */
    let findKbdKey = mapChanges.findIndex(val=>val.kbdkey == kbdKey)
    if (findKbdKey != -1) {
      // update
      console.log("Key",findKbdKey)
      mapChanges[findKbdKey] = { kbdkey: kbdKey, ...mapChange }
      addChange([...mapChanges])
    } else {
      addChange([...mapChanges, { kbdkey: kbdKey, ...mapChange }])
    }
    console.log("state.mapchange",mapChanges,mapChange)
  };

  const doGenerate = () => {
    generate(mapChanges)
  }

  return (
    <div className={styles.flex1}>
      KBD65
   
    <div className={styles.kbd65}>
      
        <Key kbdkey={"Q"} handleMapUpdate={handleMapUpdate} />
      <Key kbdkey={"W"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"E"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"R"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"T"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"Y"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"U"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"I"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"O"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"P"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"["} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"]"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"\\"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"A"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"S"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"D"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"F"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"G"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"H"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"J"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"K"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"L"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={";"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"'"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"Enter"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={""} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"Shift"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"Z"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"X"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"C"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"V"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"B"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"N"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"M"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={","} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"."} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"/"} handleMapUpdate={handleMapUpdate}/>
      <Key kbdkey={"Shift"} handleMapUpdate={handleMapUpdate}/>

      </div>
      <ol>
        {mapChanges.map(val => <li key={val.kbdkey}>OLD KEY:{val.kbdkey}-NEW KEY:{val.text}-CODE:<code>{val.code}</code></li>)}
      </ol>
      <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg" onClick={doGenerate}>Download Config</button>
      </div>
  )
}



export default Kbd65