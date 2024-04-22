import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

const RightsideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2>Login With</h2>
        <button className="btn w-full">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button className="btn w-full">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2>Find Us On</h2>
        <a
          className="p-4 text-lg flex items-center border border-solid rounded-t-lg"
          href=""
        >
          <FaFacebook className="mr-3"></FaFacebook> Facebook
        </a>
        <a
          className="p-4 text-lg flex items-center border border-solid "
          href=""
        >
          <FaTwitter className="mr-3"></FaTwitter> Twitter
        </a>
        <a
          className="p-4 text-lg flex items-center border border-solid rounded-b-lg"
          href=""
        >
          <FaInstagram className="mr-3"></FaInstagram> Instagram
        </a>
      </div>

      <div className="p-4 space-y-3 mb-6">
        <h2>Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
       
      </div>
    </div>
  );
};

export default RightsideNav;