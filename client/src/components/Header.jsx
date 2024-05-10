import {  Navbar,Dropdown,Avatar} from 'flowbite-react';
import React from 'react';
import { Link, useLocation ,useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';
import image from '../assets/image.png'
import logo3 from '../assets/logo3.png'



    const Header = () => {

    const path = useLocation().pathname;
    const { currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate=useNavigate()

    
    const handleSignout = async () => {
        try {
        const res = await fetch('http://localhost:8000/signout', {
            method: 'POST',
        });
        const data = await res.json();
        if (!res.ok) {
            console.log(data.message);
        } else {
            dispatch(signoutSuccess());
            navigate('/signin')
        }
        } catch (error) {
        console.log(error.message);
        }
    };

    return (
        <Navbar className='border-b-2'>

            <Link  className='flex items-center justify-center whitespace-nowrap text-sm sm:text-3xl font-bold dark:text-white'>
                <img src={logo3}  width={150} alt="" />

            </Link>

        <div className='flex gap-2 md:order-2'>


            {currentUser ? (
            <Dropdown
                arrowIcon={false}
                inline
                label={
                <Avatar alt='user' img={currentUser.profilePicture} rounded />
                }
            >
                <Dropdown.Header>
                <span className='block text-sm'>@{currentUser.nom} {currentUser.prenom}</span>
                <span className='block text-sm font-medium truncate'>
                Cin : {currentUser.cin}
                </span>
                </Dropdown.Header>
                <Link to={'/dashboard?tab=profile'}>
                    <Dropdown.Item>Profile</Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleSignout}>Logout</Dropdown.Item>
            </Dropdown>
            )

            :(
            <Link  to='/signin' >
                <img src={image}  width={400} alt="" />
            </Link>)}
            <Navbar.Toggle />
            
        </div>

        {currentUser ? (
                <Navbar.Collapse>


                </Navbar.Collapse>
            ) : 
                null}
        </Navbar>
    );
};

export default Header;
