import Carregamento from "./src/screens/loading.js";
import { useEffect, useState } from "react";  

export default function App() {
const [isloading, setIsLoading] = useState(true);
useEffect(()=>{
  setTimeout(()=>setIsLoading(false), 4000)
}, [])
  return (
    isloading ? <Carregamento/> : <home/>
  );
}
