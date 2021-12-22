import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Prueba = () => {
  let { hola } = useParams();
  const [date, setDate] = useState();

  useEffect(()=>{
    setDate(hola || new Date().toString());
  }, [hola])

  return (
    <div>
      <p>La fecha es {date}</p>
    </div>
  )
}

export default Prueba;