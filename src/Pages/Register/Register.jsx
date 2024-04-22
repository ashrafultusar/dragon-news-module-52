import { Link } from "react-router-dom";
import Navber from "../../Shared/Navber/Navber";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

const Register = () => {

  const {creatUser}=useContext(AuthContext)


  const handelRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
const email=form.get('email')
const password=form.get('password')

    console.log(email,password);


    // create user
    creatUser(email, password)
      .then(result => {
      console.log(result.user)
      })
      .catch(error => {
      console.error(error)
    })

  };

  return (
    <div>
      <Navber></Navber>

      <form
        onSubmit={handelRegister}
        className="md:w-3/4 lg:w-1/2 mx-auto shadow-lg p-4 rounded-lg "
      >
        <h1 className="text-center">Register your account</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
            placeholder="Name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="photo"
            placeholder="Photo URL"
            name="photo-url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input input-bordered"
            required
                  />
                  
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
        </div>

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
          Alrady have an account ! Please <Link to={"/login"}>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
