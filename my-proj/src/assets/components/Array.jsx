import React from 'react'

const Array = ({shoes, rs}) => {

   const [num, setNum] = useState('Hello')
   const handleUpper = ()=>{
    setNum(num.toUpperCase())
   }

  return (
    <>
    <div>
     <p>name of brand:{shoes}</p>
     <p>price of shoes :{rs}</p>
    </div>
     <div>
    <p>initial value:{num}</p>
    <button onClick={handleUpper}>Click</button>
     </div>
     </>
  )
}

export default Array;
