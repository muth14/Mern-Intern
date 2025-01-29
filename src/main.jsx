// // import React from 'react'; 
// // import { createRoot } from 'react-dom/client';
// // import './index.css'; 
// // import App from './App.jsx'; 
// // import Header from './header.jsx'; 
// // import Footer from './footer.jsx'; 
// // import Content from './content.jsx';
// // import { Comp1 } from './content.jsx';
// // import { Comp2 } from './content.jsx';
// // import { Comp3 } from './content.jsx';
// // import { Comp4 } from './content.jsx';
// // import { Comp5 } from './content.jsx';

// // createRoot(document.getElementById('root')).render(
// //   <>
// //     <Header />
   
// //     <Content/>
// //     <Comp1/>
// //     <Comp2/>
// //     <Comp3/>
// //     <Comp4/>
// //     <Comp5/>
// //     <Footer />
// //   </>
// // );


// // //main.jsx
// import 
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './Main.css'
// import {App} from './App.jsx'
// createRoot(document.getElementById('root')).render(
//     <StrictMode>
//         <App/>
//     </StrictMode>
// )



import { createRoot } from 'react-dom/client'
import './Main.css'
import {App} from './App.jsx'
import {Provider} from "react-redux"
import store from "../reduxstore/store.js"


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App/>
    </Provider>
    
)