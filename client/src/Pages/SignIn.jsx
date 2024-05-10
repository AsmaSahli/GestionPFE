import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import dGraduation from '../assets/3dGraduation.png'
import { useDispatch, useSelector } from 'react-redux';
    import {
    signInStart,
    signInSuccess,
    signInFailure,
    } from '../redux/user/userSlice'; 


    const SignIn = () => {
    const [formData, setFormData] = useState({});
    const { loading, error: errorMessage } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.cin || !formData.password) {
        return dispatch(signInFailure('Please fill all the fields'));
        }
        try {
        dispatch(signInStart());
        const res = await fetch('http://localhost:8000/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
            credentials: 'include',
        });
        const data = await res.json();
        if (data.success === false) {
            dispatch(signInFailure(data.message));
        }

        if (res.ok) {
            dispatch(signInSuccess(data));
            navigate('/');
        }
        } catch (error) {
        dispatch(signInFailure(error.message));
        }
    };


    return (
        <div className='min-h-screen mt-20'>
        <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
            {/* left */}
            <div className='flex-1'>
            <Link  className='self-center whitespace-nowrap text-sm sm:text-2xl font-bold dark:text-white'>
                {/* <span className='font-mono'> Mon PFE </span> */}

            </Link>
            <img src={dGraduation}  width={700} alt="" />
            {/* <p className='text-sm mt-5 font-mono '>
            GESTION DE PROJETS DE FIN D’ETUDES
            </p> */}

            </div>
            {/* right */}

            <div className='flex-1'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>

                <div>
                <Label value=' CIN' />
                <TextInput
                    type='text'
                    placeholder=''
                    id='cin'
                    onChange={handleChange}
                />
                </div>
                <div>
                <Label value=' password' />
                <TextInput
                    type='password'
                    placeholder='*********'
                    id='password'
                    onChange={handleChange}
                />
                </div>
                <Button
                gradientMonochrome="teal"
                type='submit'
                disabled={loading}
                >
                {loading ? (
                    <>
                    <Spinner size='sm' />
                    <span className='pl-3'>Loading...</span>
                    </>
                ) : (
                    'Sign In'
                )}
                </Button>

            </form>
            {errorMessage && (
                <Alert className='mt-5' color='failure'>
                {errorMessage}
                </Alert>
            )}
            </div>
        </div>

        </div>
    );
    }

export default SignIn