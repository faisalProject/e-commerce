import {Link} from 'react-router-dom';
import google from '../images/google.png';
import Swal from 'sweetalert2';

const signinPopupHidden = () => {
    document.getElementsByClassName('signin-page-contents')[0].classList.remove('active');
    document.querySelector('body').classList.remove('active');
}

const displayPassword1 = () => {
    document.getElementsByClassName('displays-password1')[0].classList.toggle('active');
    const i = document.getElementsByClassName('password1-type')[0];
    i.type === 'password' ? i.type = 'text' : i.type = 'password';
}

const successSignin = () => {
    Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: 'Berhasil Masuk!',
        showConfirmButton: false
    })
}

const SigninPopup = () => {
    return(
        <div className="signin-page-contents">
            <div className="signin">
                <div className="top">
                    <h5>Masuk</h5>
                    <div className="close" onClick={() => signinPopupHidden()}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <form>
                    <input type="text" className="form-control" placeholder="Email" />
                    <div className="password-container">
                        <input type="password" className="form-control password1-type" placeholder="Password" />
                        <div className="displays-password1" onClick={() => displayPassword1()}>
                            <i className="bi bi-eye-slash"></i>
                            <i className="bi bi-eye"></i>
                        </div>
                    </div>
                    <div className="forget-password">
                        <Link to="/" className="anchor">Lupa Password?</Link>
                    </div>
                    <button type="submit" className='btn btn-primary' onClick={() => successSignin()}>Masuk</button>
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
                        <p>Belum mempunyai akun? <Link to='/register' className='anchor' onClick={signinPopupHidden}>Daftar</Link></p>
                    </div>
                </form>
                <div className='bottom'>
                    <p>Dengan melakukan login, Anda setuju dengan syarat & ketentuan E-Commerce. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                </div>
            </div>
        </div>
    )
}

export default SigninPopup;