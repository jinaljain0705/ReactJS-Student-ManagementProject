import { useNavigate } from "react-router-dom";

function Login(){

  const navigate = useNavigate();

  const handleLogin = ()=>{

    localStorage.setItem("auth",true);

    navigate("/");

  }

  return(

    <div className="container mt-5 text-center">

      <h2>Login</h2>

      <button
        className="btn btn-primary mt-3"
        onClick={handleLogin}
      >
        Sign In
      </button>

    </div>

  )

}

export default Login;
