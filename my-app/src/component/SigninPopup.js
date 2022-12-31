import {Link} from 'react-router-dom';

const signinPopupHidden = () => {
    document.getElementsByClassName('signin-page-contents')[0].classList.remove('active');
    document.querySelector('body').classList.remove('active');
}

const displayPassword = () => {
    document.getElementsByClassName('displays-password')[0].classList.toggle('active');
    const i = document.getElementsByClassName('password1-type')[0];
    i.type === 'password' ? i.type = 'text' : i.type = 'password';
}

const SigninPopup = () => {
    return(
        <div className="signin-page-contents">
            <div className="signin">
                <div className="top">
                    <h5>Masuk</h5>
                    <div className="close" onClick={signinPopupHidden}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <form>
                    <input type="text" className="form-control" placeholder="Email" />
                    <div className="password-container">
                        <input type="password" className="form-control password1-type" placeholder="Password" />
                        <div className="displays-password" onClick={displayPassword}>
                            <i className="bi bi-eye-slash"></i>
                            <i className="bi bi-eye"></i>
                        </div>
                    </div>
                    <div className="forget-password">
                        <Link to="/" className="anchor">Lupa Password?</Link>
                    </div>
                    <button type="submit" className='btn btn-primary'>Masuk</button>
                </form>
            </div>
        </div>
    )
}

export default SigninPopup;