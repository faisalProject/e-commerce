import {Link} from 'react-router-dom';
import google from '../images/google.png';

const displayPassword4 = () => {
    document.getElementsByClassName('displays-password4')[0].classList.toggle('active');
    const i = document.getElementsByClassName('password4-type')[0];
    i.type === 'password' ? i.type = 'text' : i.type = 'password';
}

const Signin = () => {
    return(
        <div className="signin-mobile-contents">
            <div className="container">
                <div className="signin-mobile">
                    <div className="top">
                        <h5>Masuk</h5>
                    </div>
                    <form>
                        <input type="text" className="form-control" placeholder="Email" />
                        <div className="password-container-mobile">
                            <input type="password" className="form-control password4-type" placeholder="Password" />
                            <div className="displays-password4" onClick={displayPassword4}>
                                <i className="bi bi-eye-slash"></i>
                                <i className="bi bi-eye"></i>
                            </div>
                        </div>
                        <div className="forget-password">
                            <Link to='/' className='anchor'>Lupa Password?</Link>
                        </div>
                        <button type="submit" className='btn btn-primary'>Masuk</button>
                        <div className='option'>
                            <span></span>
                            <p>atau</p>
                            <span></span>
                        </div>
                        <div className='google'>
                            <img src={google} alt="" />
                            <p>Masuk dengan Google</p>
                        </div>
                        <div className='register-option'>
                            <p>Belum mempunyai akun? <Link to='/register' className='anchor'>Daftar</Link></p>
                        </div>
                    </form>
                    <div className='bottom'>
                        <p>Dengan melakukan login, Anda setuju dengan syarat & ketentuan E-Commerce. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin;