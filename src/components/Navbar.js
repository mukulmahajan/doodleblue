import React, { useState } from 'react'

const Navbar = props => {
    const [toggle,setToggle]=useState(false);
    const [formData,setFormData]=useState({
        status:'Mugs',
        title:'',
        price:0,
        toprated:false,
        file:null
    })
    const {status,title,price,toprated,file}=formData;
    const onChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})

    }
    const onClick=()=>{
        setToggle(!toggle);
    }
    const OnSumbit=(e)=>{
        e.preventDefault();
        setToggle(!toggle);
        props.handleClick({status,title,price,toprated,file})

    }
    const onImgChange=(event)=>{
        event.preventDefault();
        setFormData({...formData,file:
           URL.createObjectURL(event.target.files[0])
        })
      }
    return (
        <div>
            <div className='Nav'>
                <div className='Navleft'>Products</div>
                <div className='Navright'>
                    <button onClick={()=>onClick()} className='Navbutton'>Add Product</button>
                </div>
            </div>
            
        {toggle ?<dialog open  className="dialog">
                <form onSubmit={(e)=>{OnSumbit(e)} }>
                <div>
                    Product Category<br></br>
        <select name="status" value={status} onChange={e=>onChange(e)}  required>
        
            <option value="Mugs">Mugs</option>
            <option value="laptop">laptop</option>
            <option value="Mobile">Mobile</option>
            <option value="TV">TV</option>
          </select></div>
          <div>Product Title<br></br><input type='text' name='title' value={title} onChange={e=>onChange(e)} required/></div>          
          <div>Price<br></br><input type='number' name='price' value={price} onChange={e=>onChange(e)} required/></div>
          <input type="checkbox" name="toprated" checked={toprated} value={toprated}
          onChange={e=>{setFormData({...formData,toprated:!toprated}); }} /> Top Rated
          <br></br>
          <input type="file"  onChange={e=>onImgChange(e)}/><br></br>
        <img src={file} alt="No Preview for product" height='40px' width='40px' /><br></br>
        <button onClick={()=>onClick()}>Cancel</button><button type='submit'>submit</button>
          </form></dialog>:''
          }
        </div>
    )
}


export default Navbar
