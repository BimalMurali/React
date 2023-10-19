import React from 'react'
import { useState } from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import ItemList from './ItemList'


const Content = ({items,handleCheck,handleDelete}) => {

    const [name,setName]=useState('Bimal')
    const [count ,setCount] = useState(0)
    // old vanilla javascript method
    const handleNameChange = () =>{
        const names=['Bimal','Navya','Rohan']
        const int =Math.floor(Math.random()*3)
        return names[int]
      } 
    const handleNameChanges = () =>{
        const names=['Bimal','Navya','Rohan']
        const int =Math.floor(Math.random()*3)
        setName(names[int])
      } 

      const handleClick = () =>{
        // console.log(count)
        setCount(count+1)
        console.log(count)


      }
      const handleClick2 = (name) =>{
        console.log(`${name } was clicked`)
      }
      const handleClick3 = (e) =>{
        console.log(e.target.innerText)
      }
      const handleClick4 = (e) =>{
        console.log(count)
      }

    //   list 
    // const [items,setItems]=useState([
    //     {
    //         id:1,
    //         checked:false,
    //         item:"Rice"
    //     },
    //     {
    //         id:2,
    //         checked:true,
    //         item:"Wheet"
    //     },
    //     { 
    //         id:3,
    //         checked:false,
    //         item:"Grape"
    //     },

    // ])

    // const handleCheck=(id)=>{
    //     console.log(`key : ${id}`)
    //     const listItems = items.map((item)=>item.id==id?{
    //         ...item,checked:!item.checked
    //     }:item)
    //     setItems(listItems)
    // }

    // const handleDelete=(id)=>{
    //     console.log(`key : ${id}`) 
    //     const listItems = items.filter((item)=>item.id!=id)
    //     setItems(listItems)
    //     localStorage.setItem('shoppinglist',JSON.stringify(listItems))
    // }

    return (
        <main>


            {/* <p>
                Hello {handleNameChange()}
            </p>
            <p>
                Hello {name}
            </p>
            <p onDoubleClick={handleNameChanges}>double click to change name</p>
            <button onClick={handleNameChanges}>Click Me</button>
            <button onClick={()=>handleClick2('bimal')}>Click Me</button>
            <button onClick={(e)=>handleClick3(e)}>Click Me</button>

            <button onClick={handleClick}>Count</button>
            <button onClick={handleClick4}>Count status</button> */}


            {/* list  */} 
            {items.length ?(

            // <ul>
            //     {
            //         items.map((item)=>(
            //             <li className="item" key={item.id}>
            //                 <input type="checkbox"
            //                 onChange={()=>handleCheck(item.id)} checked={item.checked} />
            //                 <label
            //                 style={(item.checked)?{textDecoration:'line-through'}:null}
            //                 onDoubleClick={()=>handleCheck(item.id)}>{item.item}</label>
            //                 <FaTrashAlt 
            //                 onClick={()=>handleDelete(item.id)} role="button" tabIndex="0"/>
            //             </li>
            //         )
            //     )}
            // </ul>
            <ItemList items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}/>
            )
            :(
                <p>Your list is empty</p>
            )



            }
        </main>
    )
}

export default Content
