// import VideoPlayer from './components/VideoPlayer'

// // import Popup from 'reactjs-popup'

// // import 'reactjs-popup/dist/index.css'
// npm install reactjs-popup

import './App.css'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

// const App = () => (
//   <div className="popup-container">
//     <Popup
//       trigger={
//         <button className="trigger-button" type="button">
//           Trigger
//         </button>
//       }
//       modal
//       position="top left"
//     >
//       <div>
//         <p>React is a popular and widely used programming language</p>
//       </div>
//     </Popup>
//   </div>
// )
// const App = () => (
//   <div className="popup-container">
//     <Popup
//       modal
//       trigger={
//         <button type="button" className="trigger-button">
//           Trigger
//         </button>
//       }
//       position="top right"
//     >
//       {close => (
//         <>
//           <div>
//             <p>React is a popular and widely used programming language</p>
//           </div>
//           <button
//             type="button"
//             className="trigger-button"
//             onClick={() => close()}
//           >
//             Close
//           </button>
//         </>
//       )}
//     </Popup>
//   </div>
// )

// const App = () => (
//   <div className="popup-container">
//     <Popup
//       trigger={
//         <button type="button" className="trigger-button">
//           Trigger
//         </button>
//       }
//       position="top left"
//     >
//       <p>React is a popular and widely used programming language</p>
//     </Popup>
//   </div>
// )

const overlayStyles = {
  backgroundColor: 'green',
}
const App = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          Trigger
        </button>
      }
      overlayStyle={overlayStyles}
    >
      <p>React is a popular and widely used programming language</p>
    </Popup>
  </div>
)

// // const overlayStyles = {
// //   backgroundColor: '#ffff',
// // }
// const App = () => (
//   // <div className="popup-container">
//   //   <Popup
//   //     modal
//   //     trigger={
//   //       <button className="trigger-button" type="button">
//   //         Trigger
//   //       </button>
//   //     }
//   //     overlayStyle={overlayStyles}
//   //     position="bottom-left"
//   //   >
//   //     <div>
//   //       <p>React is a popular and widely used programming language</p>
//   //     </div>
//   //   </Popup>
//   // </div>
//   <VideoPlayer />
// )

// export default App

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

// import {Chrono} from 'react-chrono'

// const items = [
//   {
//     title: 'May 1940',
//     cardTitle: 'Dunkirk',
//     cardSubtitle: 'Men of the British Expeditionary Force.',
//     cardDetailedText:
//       'On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and attacking northern France.',
//   },
// ]

// const App = () => (
//   <div className="chrono-container">
//     <Chrono
//       items={items}
//       theme={{
//         primary: 'green',
//         secondary: 'blue',
//         cardBgColor: 'yellow',
//         cardForeColor: 'violet',
//         titleColor: 'green',
//       }}
//     />
//   </div>
// )

// const App = () => (
//   <div className="chrono-container">
//     <Chrono mode="VERTICAL_ALTERNATING">
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
// )

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

// PieChart

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
// const App = () => {
//   return (
//     <ResponsiveContainer width="100%" height={300}>
//       <PieChart>
//         <Pie
//           cx="50%"
//           cy="60%"
//           data={data}
//           startAngle={0}
//           endAngle={3600}
//           outerRadius="70%"
//           innerRadius="30%"
//           dataKey="count"
//         >
//           <Cell name="Telugu" fill="#fecba6" />
//           <Cell name="Hindi" fill="#b3d23f" />
//           <Cell name="English" fill="#a44c9e" />
//         </Pie>
//         <Legend
//           iconType="circle"
//           layout="horizontal"
//           verticalAlign="top"
//           align="right"
//         />
//       </PieChart>
//     </ResponsiveContainer>
//   )
// }
// Bar Chart
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts'

// const data = [
//   {
//     group_name: 'Group A',
//     boys: 200,
//     girls: 400,
//   },
//   {
//     group_name: 'Group B',
//     boys: 3000,
//     girls: 500,
//   },
//   {
//     group_name: 'Group C',
//     boys: 1000,
//     girls: 1500,
//   },
//   {
//     group_name: 'Group D',
//     boys: 700,
//     girls: 1200,
//   },
// ]

// const App = () => {
//   const DataFormatter = number => {
//     if (number > 1000) {
//       return `${(number / 1000).toString()}k`
//     }
//     return number.toString()
//   }

//   return (
//     <ResponsiveContainer width="100%" height={500}>
//       <BarChart
//         data={data}
//         margin={{
//           top: 5,
//         }}
//       >
//         <XAxis
//           dataKey="group_name"
//           tick={{
//             stroke: 'gray',
//             strokeWidth: 1,
//           }}
//         />
//         <YAxis
//           tickFormatter={DataFormatter}
//           tick={{
//             stroke: 'gray',
//             strokeWidth: 0,
//           }}
//         />
//         <Legend
//           wrapperStyle={{
//             padding: 30,
//           }}
//         />
//         <Bar dataKey="boys" name="Boys" fill="#1f77b4" barSize="20%" />
//         <Bar dataKey="girls" name="Girls" fill="#fd7f0e" barSize="20%" />
//       </BarChart>
//     </ResponsiveContainer>
//   )
// }

// React Slick | Reading Material
// npm install react-slick
// npm install slick-carousel
// import Slider from 'react-slick'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

// const App = () => {
//   const settings = {
//     dots: false,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplay: 500,
//   }
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//       </Slider>
//     </div>
//   )
// }

export default App
