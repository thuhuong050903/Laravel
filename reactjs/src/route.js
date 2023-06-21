import ShowProduct from "./Components/ShowProduct";
import Lazada from "./Components/Lazada";
// const routes =[
//     {
//         path:"/",
//         exact:true,
//         main: ()=><ShowProduct/>,
//     },
//     {
//         path:"/admin",
//         exact:true,
//         main: () => <ShowProduct/>,
//     }
// ];

const routes =[
    {
        path:"/",
        exact:true,
        main: ()=><Lazada/>,
    },
    {
        path:"/admin",
        exact:true,
        main: () => <Lazada/>,
    }
];

export {routes};