import React from 'react'
import{Card,Input,Button} from 'react-rainbow-components'
export const Park = () => {
  return (
    <>
       <div>Park</div>

<div className="flex inputs">
<div >
    <b class="inp"> Current(A):</b>
    <Input disabled className="disabled-cursor1  input"  />                      
</div>

<div>
    <b class="inp"> Power(W):</b>
    <Input disabled className="disabled-cursor1 input " />
</div>
<div >
    <b class="inp">Energy(Kwh):</b>
    <Input disabled className="disabled-cursor1 input " />
</div>
</div>
    
    </>
  )
}
