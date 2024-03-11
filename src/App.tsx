import { useEffect, useState } from "react"
import getAllGroup from "./api/getAllGroups"
import { Group } from "./interfaces/Group"

function App() {

  const [data,setData] = useState<Group[]>([])

  useEffect(()=>{
    console.log(getAllGroup());
  },[])

  return (
    <>
      <div>
        {}
      </div>
    </>
  )
}

export default App
