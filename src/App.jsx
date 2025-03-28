import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'
import Users from './Users'
import Friends from './Friends'
import Posts from './Posts'
import { Suspense } from 'react'


// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//    .then(res => res.json())

//    const fetchFriends = async() =>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     return res.json()

  //  }

  const fetchPosts = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
  }

function App() {
  // const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts()

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

      <Suspense fallback = {<h4>Posts are coming.......</h4>}>
      <Posts postsPromise = {postsPromise}></Posts>

      </Suspense>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense>

      <Suspense fallback = {<h3>Friends are coming for treat...</h3>}>
      <Friends friendsPromise = {friendsPromise}></Friends>
        
      </Suspense> */}
      
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
