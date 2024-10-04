import VideoPlayer from './components/VideoPlayer'
// import {Chrono} from 'react-chrono'
// import Popup from 'reactjs-popup'

// import 'reactjs-popup/dist/index.css'

import './App.css'
// const overlayStyles = {
//   backgroundColor: '#ffff',
// }
const App = () => (
  // <div className="popup-container">
  //   <Popup
  //     modal
  //     trigger={
  //       <button className="trigger-button" type="button">
  //         Trigger
  //       </button>
  //     }
  //     overlayStyle={overlayStyles}
  //     position="bottom-left"
  //   >
  //     <div>
  //       <p>React is a popular and widely used programming language</p>
  //     </div>
  //   </Popup>
  // </div>
  <VideoPlayer />
)

export default App
// {close => (
//         <>
//
//           <button
//             className="trigger-button"
//             type="button"
//             onClick={() => close()}
//           >
//             close
//           </button>
//         </>
//       )}

// <div className="chrono-container">
//     <Chrono mode="VERTICAL" items={items2}>
//       <div>
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/csk-logo-img.png"
//           className="image"
//           alt="chennai-super-kings"
//         />
//       </div>
//       <div>
//         <h1>Mumbai Indians</h1>
//         <p>IPL Team winner for the year 2019 is Mumbai Indians.</p>
//       </div>
//     </Chrono>
//   </div>

// const items = [
//   {
//     title: 'May 1940',
//     cardTitle: 'Dunkirk',
//     cardSubtitle: 'Men of the British Expeditionary Force.',
//     cardDetailedText:
//       'On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and attacking northern France.',
//   },
//   {
//     title: 'May 1941',
//     cardTitle: 'Dunkirk',
//     cardSubtitle: '1941.',
//     cardDetailedText:
//       'On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and attacking northern France.',
//   },
//   {
//     title: 'May 1942',
//     cardTitle: 'Dunkirk',
//     cardSubtitle: '1942.',
//     cardDetailedText:
//       'On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and attacking northern France.',
//   },
// ]

// const items2 = [{title: '2018'}, {title: '2019'}]

// import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

// const data = [
//   {
//     count: 809680,
//     language: 'Telugu',
//   },
//   {
//     count: 4555697,
//     language: 'Hindi',
//   },
//   {
//     count: 12345657,
//     language: 'English',
//   },
// ]

// return (
//   <ResponsiveContainer width="100%" height={300}>
//     <PieChart>
//       <Pie
//         cx="50%"
//         cy="60%"
//         data={data}
//         startAngle={180}
//         endAngle={0}
//         outerRadius="30%"
//         dataKey="count"
//       >
//         <Cell name="Telugu" fill="#fecba6" />
//         <Cell name="Hindi" fill="#b3d23f" />
//         <Cell name="English" fill="#a44c9e" />
//       </Pie>
//       <Legend
//         iconType="rect"
//         layout="vertical"
//         verticalAlign="middle"
//         align="left"
//       />
//     </PieChart>
//   </ResponsiveContainer>
// )
