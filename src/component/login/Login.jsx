import { useRef, useState, useEffect, useContext, } from 'react';
import { loginRequest, loginSucesss, loginfailure, saveStorage, } from '../../redux/auth/Authslice';
 
import axios from '../../api/axios';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import AuthContext from "../../context/AuthProvider";

const LOGIN_URL = '/auth/login';
 
const Login = () => {
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [email, setEmail] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    // const  [auth, setAuth] = useState({})
    // const { setAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {isSucess}   = useSelector(state => state.auth)
    
   
    useEffect(() => {
        dispatch(saveStorage())
        dispatch()
        userRef.current.focus();
    }, [])

    useEffect(() => {
       setErrMsg('');
    }, [user, pwd, email])

    const handleSubmit = async (e) => {
        e.preventDefault();
          dispatch(loginRequest())
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ password: pwd, email, }),
                {
                    headers: { 'Content-Type': 'application/json' ,
                       Authorization: 'Bearer' + localStorage.getItem('token')
                        },
                    withCredentials: true,
                    
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.token;
            // const roles = response?.data?.roles;
            dispatch(loginSucesss( pwd, email,  accessToken))
             setPwd('');
            setEmail('')
            
            
            
           
        } catch (err) {
            // dispatch(loginfailure())
            if (!err?.response) {
               setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
               setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
               setErrMsg('Unauthorized');
            } else {
               setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }
    

    return (
       
      
        <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />

                    <label htmlFor='email'>Email:</label>
                    <input type='text'
                            id='email'
                           onChange={(e) => setEmail(e.target.value)}
                           value={email}
                           required
                           autoComplete='off'
                    
                    />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="#">Sign Up</a>
                        </span>
                    </p>
                </section>
                
        
        
    )
}

export default Login