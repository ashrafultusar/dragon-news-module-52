
import logo from '../../assets/logo.png';

import moment from 'moment';


const Header = () => {
    return (
        <div className='text-center my-12 space-y-2'>
            <img src={logo} alt="" />
            <p className='text-[18px]'>Journalism Without Fear or Favour</p>
            <p className='text-[20px] font-medium'>{ moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;