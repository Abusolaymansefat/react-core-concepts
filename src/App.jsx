import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'

function App() {
  function handelClick(){
    alert('i am clicked')
  }
  const  handelClick3 = () => {
    alert('clicked 3')
  }

  const handelAdds = (num) => {
    const newNum = num +5;
    alert(newNum)
  }

  return (
    <>
      
      <h3>Vite + React</h3>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handelClick}>Click Me</button>
      <button onClick={function handelClick2(){
        alert('clicked 2')
      }}>Click Me2</button>
      <button onClick={handelClick3}>Click Me 3</button>
      <button onClick={() => alert('clicked 4')}>Click Me 4</button>
      {/* <button onClick={handelAdds(10)}>Click Add 5</button> */}
      <button onClick={() => handelAdds(10)}>Click Add 5</button>
      
    </>
  )
}

export default App
