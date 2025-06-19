// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from './Component/Layout/Layout';
// import Home from './Component/Home/Home';
// import Skills from "./Component/Pages/Skills";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />

//           <Route path="/skills" element={<Skills/>} />

//         </Route>

//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;




import React from "react";
import Layout from "./Component/Layout/Layout";

const App = () => {
  return <Layout />;
};

export default App;
