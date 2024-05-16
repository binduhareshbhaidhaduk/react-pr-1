// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Card from './components/cards/Card'
import './App.css'

function App() {
  
  return (
    <>
      <div>
        <Card />
      </div>
    </>
  )
}

export default App;
// export default function List() {
//   const listItems = people.map(person =>
//     <li key={person.id}>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}</b>
//           {' ' + person.profession + ' '}
//           known for {person.accomplishment}
//       </p>
//     </li>
//   );
//   return <ul>{listItems}</ul>;}