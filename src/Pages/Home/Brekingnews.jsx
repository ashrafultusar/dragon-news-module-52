import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const Brekingnews = () => {
    return (
        <div className="flex gap-1">
            <button className="btn btn-secondary">Breking News</button><Marquee pauseOnHover={true} speed={150}>
            <Link>I can be a React component, multiple React components, or just some text.</Link>
  <Link>I can be a React component, multiple React components, or just some text.</Link>
</Marquee>
        </div>
    );
};

export default Brekingnews;