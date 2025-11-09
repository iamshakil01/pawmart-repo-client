import { useContext, useState } from 'react';
import { auth, AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const googleProvider = new GoogleAuthProvider();

const Register = () => {
    const { createUser, setUser } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);


    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value
        console.log({ name, photo, email, password });

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

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                toast.success("Registration successful!");
            })
            .catch(error => {
                toast.error(error.message)
            });
    };

    const handleShowPassword = (event) => {
        event.preventDefault()
        setShowPassword(!showPassword)
    };
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => {
                toast.success('You Are Login Successfully');
            })
            .catch(error => {
                toast.error(error.message);
            });
    }


    return (
        <div className='flex justify-center items-center min-h-screen my-10'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-center text-2xl py-5'>Register Your Account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset py-3">

                        {/* Name */}
                        <label className="label font-bold text-xs">Your Name</label>
                        <input name='name' type="text" className="input input-bordered w-full" placeholder="Enter Your Name" required />

                        {/* Photo URL */}
                        <label className="label font-bold text-xs">Photo URL</label>
                        <input name='photo' type="text" className="input input-bordered w-full" placeholder="Photo URL" required />

                        {/* Email */}
                        <label className="label font-bold text-xs">Email</label>
                        <input name='email' type="email" className="input input-bordered w-full" placeholder="Enter Your Email" required />


                        {/* Password With Toggle */}
                        <label className="label font-bold text-xs">Password</label>
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

                        <button type='submit' className="btn btn-neutral mt-6 w-full">Register</button>

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
                        <p className='font-semibold text-center mt-3'>Already Have An Account? <Link className='text-secondary' to={'/login'}> Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;