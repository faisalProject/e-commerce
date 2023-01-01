import {Link} from 'react-router-dom';

const signinPopupActive = () => {
    document.getElementsByClassName('signin-page-contents')[0].classList.add('active');
    document.querySelector('body').classList.add('active');
}

const displayPassword2 = () => {
    const i = document.getElementsByClassName('password2-type')[0];
    document.getElementsByClassName('displays-password2')[0].classList.toggle('active');
    i.type === 'password' ? i.type = 'text' : i.type = 'password';
}

const displayPassword3 = () => {
    const i = document.getElementsByClassName('password3-type')[0];
    document.getElementsByClassName('displays-password3')[0].classList.toggle('active');
    i.type === 'password' ? i.type = 'text' : i.type = 'password';
}

const Register = () => {
    return(
        <div className="container register-contents">
            <div className="register">
                <div className="top">
                    <h5>Daftar</h5>
                </div>
                <div className="desc">
                    <p>Mari siapkan semuanya sehingga Anda dapat memverifikasi akun pribadi Anda dan mulai menyiapkan profil Anda</p>
                </div>
                <form>
                    <input type="text" className="form-control" placeholder="Nama depan" />
                    <input type="text" className="form-control" placeholder="Nama belakang" />
                    <input type="tell" className="form-control" placeholder="No. Telepon" />
                    <input type="email" className="form-control" placeholder="Email" />
                    <div className="password-container">
                        <input type="password" className="form-control password2-type" placeholder="Password" />
                        <div className="displays-password2" onClick={displayPassword2}>
                            <i className="bi bi-eye-slash"></i>
                            <i className="bi bi-eye"></i>
                        </div>
                    </div>
                    <div className="confirm-password-container">
                        <input type="password" className="form-control password3-type" placeholder="Password konfirmasi" />
                        <div className="displays-password3" onClick={displayPassword3}>
                            <i className="bi bi-eye-slash"></i>
                            <i className="bi bi-eye"></i>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Buat akun</button>
                    <button type="submit" className="btn btn-primary">Buat akun</button>
                </form>
                <div className="signin-option">
                    <p>Sudah mempunyai akun? <Link to='/register' className='anchor' onClick={signinPopupActive}>Masuk</Link></p>
                    <p>Sudah mempunyai akun? <Link to='/register' className='anchor'>Masuk</Link></p>
                </div>
                <div className='bottom'>
                    <p>Dengan melakukan registrasi, Anda setuju dengan syarat & ketentuan E-Commerce. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                </div>
            </div>
        </div>
    )
}

export default Register;