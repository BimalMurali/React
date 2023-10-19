// import logo from './logo.svg';
import './Header';
import Header from './Header';
import AddItem from './AddItem';
import Content from './Content'
import Footer from './Footer'
import { useState } from 'react'

function App() {
  const handleNameChange = () =>{
    const names=['Bimal','Navya','Rohan']
    const int =Math.floor(Math.random()*3)
    return names[int]
  }

  // const [items,setItems]=useState([
  //   {
  //       id:1,
  //       checked:false,
  //       item:"Rice"
  //   },
  //   {
  //       id:2,
  //       checked:true,
  //       item:"Wheet"
  //   },
  //   { 
  //       id:3,
  //       checked:false,
  //       item:"Grape"
  //   },

// ])
  const [items,setItems]=useState(JSON.parse(localStorage.getItem('shoppinglist')))

const [newItem,setNewItem] = useState('')

const setAndSaveItems = (newItems) =>{
  setItems(newItems)
  localStorage.setItem('shoppinglist',JSON.stringify(newItems))

}

const handleCheck=(id)=>{
    console.log(`key : ${id}`)
    const listItems = items.map((item)=>item.id==id?{
        ...item,checked:!item.checked
    }:item)
    setAndSaveItems(listItems)

}

const handleDelete=(id)=>{
    console.log(`key : ${id}`) 
    const listItems = items.filter((item)=>item.id!=id)
    setAndSaveItems(listItems)

}
const handleSubmit=(e)=>{
  e.preventDefault()
  if (!newItem) return 
  console.log(newItem)
  addItem(newItem)
  setNewItem('')

}
const addItem =(item)=>{
  const id=items.length ? items[items.length-1].id + 1:1;
  const myNewItem = {id,checked:false,item}
  const listItems = [...items,myNewItem]  
  setAndSaveItems(listItems)

}

  const name='Bimal';
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {handleNameChange()}</p>
        <p>{1}</p>
        <p>{[1,2,3]}</p>P
        <p>{name}</p>
        
        <p>{true}</p> cannot render a booleen
      </header> */}
      <Header title="Groceries"/>
      <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}/>
      <Content  
      items={items}  
      handleCheck={handleCheck}
      handleDelete={handleDelete}/>
      <Footer 
      items={items.length} />
    </div>
  );
}

export default  App;
