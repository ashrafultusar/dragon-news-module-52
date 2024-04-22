import { Link, useLocation, useNavigate } from "react-router-dom";
import Navber from "../../Shared/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
const navigate=useNavigate()
  const location = useLocation();


  const handelLogin = (e) => {
    e.preventDefault();

    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signIn(email, password)
      .then(result => {
        console.log(result.user)
        
        // navigate after login
        navigate(location?.state? location.state:'/')

      })
      .catch(error => {
      console.error(error)
    })
  };

  return (
    <div>
      <Navber></Navber>

      <form
        onSubmit={handelLogin}
        className="md:w-3/4 lg:w-1/2 mx-auto shadow-lg p-4 rounded-lg "
      >
        <h1 className="text-center">Login your account</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className="text-center pt-3">
          Don't have an account ! Please <Link to={"/register"}>Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
