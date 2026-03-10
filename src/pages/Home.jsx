import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../redux/thunks";

function Home() {

  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  return (

    <div className="container mt-5">

      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">
          Student Management System
        </h1>
      </div>

      <div className="row">

        {students && students.map((student) => (

          <div className="col-md-4 mb-4" key={student.id}>

            <div className="card shadow p-3">

              <h5 className="card-title">{student.name}</h5>

              <p className="card-text">
                <strong>Roll:</strong> {student.roll}
              </p>

              <p className="card-text">
                <strong>Class:</strong> {student.class}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  )

}

export default Home;