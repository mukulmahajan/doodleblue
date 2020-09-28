import React, { Fragment, useState } from 'react'
import DisplayCatogories from './DisplayCatogories';
import Navbar from './Navbar'

const Dashboard = () => {

    const [List,setLists]=useState({

 Mugs: [
            { title: 'flower mug', price: 250,toprated:false,url:'images/mug1.jfif' },            
            { title: 'clay mug 2', price: 50000,toprated:true,url:'images/mug2.webp' },            
            { title: 'clay mug 3', price: 10000,toprated:false,url:'images/mug3.webp' },            
            { title: 'clay mug 4', price: 40000,toprated:false,url:'images/mug4.jpg' },            
            { title: 'clay mug 5', price: 500 ,toprated:false,url:'images/mug5.jpg'},           
            { title: 'clay mug 6', price: 56000,toprated:false,url:'images/mug6.webp' },           
            { title: 'clay mug 7', price: 8900,toprated:false,url:'images/mug1.jfif' },           
            { title: 'clay mug 8', price: 98000,toprated:false,url:'images/mug2.webp' },           
            { title: 'clay mug 9', price: 120000,toprated:false,url:'images/mug3.webp' },           
            { title: 'clay mug 10', price: 82,toprated:false,url:'images/mug2.webp' }
        ],
    laptop: [
        { title: 'dell', price: 25000 ,toprated:false,url:'images/laptop1.webp'},
        { title: 'apple 2', price: 265200,toprated:false,url:'images/laptop2.jpg' },
        { title: 'apple 3', price: 2606,toprated:false ,url:'images/laptop3.jpg'},
        { title: 'apple 4', price: 36500 ,toprated:false,url:'images/laptop4.webp'},
        { title: 'apple 5', price: 26550 ,toprated:true,url:'images/laptop5.jpg'},
        { title: 'apple 6', price: 23250 ,toprated:false,url:'images/laptop3.jpg'},
        { title: 'apple 7', price: 96610 ,toprated:false,url:'images/laptop4.webp'},
        { title: 'apple 8', price: 9860 ,toprated:false,url:'images/laptop1.webp'},
        { title: 'apple 9', price: 98640 ,toprated:false,url:'images/laptop3.jpg'},
        { title: 'apple 10', price: 98840 ,toprated:false,url:'images/laptop1.webp'}
    ]
        ,
        Mobile: [
            { title: 'samsung', price:15350 ,toprated:false,url:'images/mob1.webp'},
            { title: 'htc 2', price:168400,toprated:true ,url:'images/mob2.jpeg'},
            { title: 'htc 3', price: 14600 ,toprated:false,url:'images/mob3.jpg'},
            { title: 'htc 4', price: 65000,toprated:false ,url:'images/mob3.jpg'},
            { title: 'htc 5', price: 3000,toprated:false ,url:'images/mob5.webp'},,
            { title: 'htc 6', price: 3560,toprated:false ,url:'images/mob2.jpeg'},
            { title: 'htc 7', price: 600,toprated:false ,url:'images/mob3.jpg'},
            { title: 'htc 8', price: 80,toprated:false ,url:'images/mob3.jpg'},
            { title: 'htc 9', price: 90,toprated:false ,url:'images/mob3.jpg'},
            { title: 'htc 10', price: 780,toprated:false ,url:'images/mob1.webp'}
        ]
        ,
        TV: [
            { title: 'sony', price: 6000,toprated:false,url:'images/tv1.jpg' },
            { title: 'MI 2', price: 68000,toprated:true,url:'images/tv2.jpeg' },
            { title: 'MI 3', price: 22000,toprated:false ,url:'images/tv3.png'},
            { title: 'MI 4', price: 99000,toprated:false ,url:'images/tv4.webp'},
            { title: 'MI 5', price: 55000,toprated:false ,url:'images/tv5.jpg'},,
            { title: 'MI 6', price: 8800,toprated:false ,url:'images/tv4.webp'},
            { title: 'MI 7', price: 980,toprated:false ,url:'images/tv1.jpg'},
            { title: 'MI 8', price: 555,toprated:false ,url:'images/tv4.webp'},
            { title: 'MI 9', price: 880,toprated:false ,url:'images/tv1.jpg'},
            { title: 'MI 10', price: 348,toprated:false ,url:'images/tv5.jpg'}
        ]
        ,
    

});
const [slide,setslide]=useState({
    val:100000
})
const {val} =slide;
    const [obj,setObj]=useState();
    const AddNew=(newProduct)=>{
        
        List[newProduct.status].push({
            title:newProduct.title,
            price:newProduct.price,
            toprated:newProduct.toprated,
            url:newProduct.file
        })

        setLists({...List});
        
    }
    const onClick=(e)=>{
        e.preventDefault();
        setObj(e.target.value)
    }
    const slidechange=(e)=>{
        e.preventDefault();
        setslide({
            val:e.target.value
        })
    }
    return (
        <Fragment>
            <div><Navbar handleClick={newProduct=>AddNew(newProduct)} /></div>
            <div className='dash'>
            <div className='dashleft'>
            <div>CATEGORIES</div>
            <div className='categories'>
            {Object.keys(List).map((item)=>
                <div className="categorybtndiv"><button type='button' value={item} onClick={e=>onClick(e)} className='categorybutton'>{item}</button></div>)}
            </div>
            <div className='filter'>Filter by Price:<br></br><input type="range" min="1" max="500000" value={val} onChange={e=>slidechange(e)} />
            <br></br>
            Price:{val}
            </div>
            <div className='toprated'>Top Products<br></br>{
                    Object.keys(List).map((item)=>{
                        return List[item].filter(rating=>rating.toprated===true).map((i)=>
                        <div className='topproducts'>
                            <div className='topimg'><img src={i.url} alt="No Preview for product" height='40px' width='40px'/></div>
                            <div className='topdata'>{i.title}<br></br>
                            {i.price}</div>  
                        </div>
                            )})
                    }
            </div>
            
            </div>
            
            <div className='dashright'>
                <DisplayCatogories  prop={List[obj]} data={val} />
            </div>
            </div>
        </Fragment>

    )
}

export default Dashboard
