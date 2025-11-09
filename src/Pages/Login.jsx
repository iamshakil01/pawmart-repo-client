import { useContext, useRef, useState } from 'react';
import { auth, AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router';

const googleProvider = new GoogleAuthProvider();

const Login = () => {
    const { SignIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef();
    const location = useLocation();
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (password.length < 6) {
            toast.error("Password length must be at least 6 characters.");
            return;
        }

        if (!/[A-Z]/.test(password)) {
            toast.error("Password must have an Uppercase letter.");
            return;
        }

        if (!/[a-z]/.test(password)) {
            toast.error("Password must have a Lowercase letter.");
            return;
        }

        SignIn(email, password)
            .then(() => {
                toast.success('You Are Login Successfully');
                navigate(`${location.state ? location.state : '/'}`);
            })
            .catch(error => {
                toast.error(error.message);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => {
                toast.success('You Are Login Successfully');
                navigate(`${location.state ? location.state : '/'}`);
            })
            .catch(error => {
                toast.error(error.message);
            });
    }


    const handleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }


    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-center text-2xl py-5'>Login Your Account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">

                        <label className="label">Email</label>
                        <input name='email' type="email" className="input input-bordered w-full"
                            ref={emailRef}
                            placeholder="Email" required />

                        {/* Password With Toggle */}
                        <label className="label">Password</label>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                className="input input-bordered w-full" placeholder="Password" required />
                            <button
                                onClick={handleShowPassword}
                                className="btn btn-ghost btn-xs absolute top-1/2 -translate-y-1/2 right-2 md:right-4 p-2"
                                title={showPassword ? 'Hide Password' : 'Show Password'}
                                type='button'
                            >
                                {showPassword ? <FaEyeSlash size={18}></FaEyeSlash> : <FaEye size={18}></FaEye>}
                            </button>
                        </div>

                        <div>
                            <a className="link link-hover text-sm">Forgot password?</a>
                        </div>
                        <button type='submit' className="btn btn-neutral mt-4 w-full">Login</button>
                        <div className='divider'>OR</div>
                        <div className='space-y-3 flex flex-col'>
                            <button
                                onClick={handleGoogleSignIn}
                                className='btn btn-outline btn-secondary font-bold gap-2'
                                type='button'
                            >
                                <FcGoogle size={24}></FcGoogle>Login With Google
                            </button>
                        </div>

                        <p className='font-semibold text-center mt-4'>
                            Don't Have An Account?
                            <Link className='text-secondary ml-1' to={'/register'}>Register</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;