import React, { Fragment, useEffect, useState } from 'react'

const DisplayCatogories = (props) => {

    const [sorted,setSorted]=useState();
    const [count,setCount] =useState({
        counter:1,
        index:0,
        nextindex:9
    })
    const {counter,index,nextindex}=count;

    useEffect(()=>{
        setSorted(props.prop)

    },[props.prop])
    
    const onChange=(e)=>{
        e.preventDefault();
        if(e.target.value==='default'){
            setSorted([...props.prop]);
        }
        
        e.target.value ==='0' ? sorted.sort(function (a, b) {
            return a.price - b.price;
          }) : sorted.sort(function (a, b) {
            return b.price- a.price;
          })

         setSorted([...sorted]); 
    }
    function onloadadd(){
        setCount({
            counter:counter+1,
            index:nextindex,
            nextindex:nextindex+9
        })
    }
    function onloadmin(){
        if(index>0){
            setCount({
                counter:counter-1,
                index:index-9,
                nextindex:nextindex-9
            })
        }
        
    }
   

    return (
        <Fragment >
            <div className='displaynav'>
                showing {index}-{nextindex}
            <select   onChange={e=>onChange(e)} className="displaybtn" >
            <option value="default" >Default</option>
            <option value="0" >Low to high</option>
            <option value="1" >high to low</option>
          </select>
            </div>
            
            <div className="displaycategory">
            {
            sorted && sorted.filter(rate=>rate.price<props.data).slice(index,nextindex).map((item)=>{
                return <div className='dispproduct'>
                    <img src={item.url} alt="No Preview for product" height='100px' width='100%'/>
            <div className='displist'>{item.title}</div>
            <div className='displist'>{item.price}</div>
            </div>
            })
             }
            </div>
            <div className='displaypage'>
             <button onClick={onloadmin} style={{backgroundColor:'white',border:'1px'}} >{'<'} </button>
             <button style={{backgroundColor:'rgb(240, 106, 106)' ,color:'white',border:'1px'}} >{counter}</button>
            <button onClick={onloadadd} style={{backgroundColor:'white',border:'1px'}}>{'>'}</button>
            </div>
        </Fragment>
        
    )
}

export default DisplayCatogories
