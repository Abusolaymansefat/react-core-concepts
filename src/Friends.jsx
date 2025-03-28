import { use } from "react"
import Friend from "./Friend"

// import { use } from "react"

export default function Friends({friendsPromise}){

    const friends = use(friendsPromise)
    console.log(friends)
    return(
        <div className="cards">
            <h3>FriendS: {friends.length}</h3>

            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}

// export default function FriendS ({friendsPromise}){

//     const Friends = use(friendsPromise)
//     console.log(Friends)
//     return (
//         <div>
//             <h3>Friends:</h3>
//         </div>
//     )
// }