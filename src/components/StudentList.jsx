import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../redux/thunks";
import StudentDetails from "./StudentDetails";

function StudentList(){

  const dispatch = useDispatch();

  const students = useSelector(state => state.students);

  const [filterClass,setFilterClass] = useState("");

  const [sort,setSort] = useState("");

  useEffect(()=>{
    dispatch(fetchStudents());
  },[])


  let data = [...students];

  if(filterClass){
    data = data.filter(s => s.class === filterClass)
  }

  if(sort === "name"){
    data.sort((a,b)=> a.name.localeCompare(b.name))
  }

  if(sort === "roll"){
    data.sort((a,b)=> a.roll - b.roll)
  }


  return(

    <div className="container mt-4">

      <h2>Student List</h2>

      <div className="d-flex gap-3 mb-3">

        <select onChange={(e)=>setSort(e.target.value)}>

          <option>Sort</option>
          <option value="name">Name</option>
          <option value="roll">Roll</option>

        </select>

        <input
          placeholder="Filter by class"
          onChange={(e)=>setFilterClass(e.target.value)}
        />

      </div>

      {data.map(student => (

        <StudentDetails key={student.id} student={student}/>

      ))}

    </div>

  )

}

export default StudentList;
