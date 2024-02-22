import './Login.css'; 

const LoginForm = () => {

    return (
        <>
            <div className="login">
                <div className="div">
                    <div className="overlap">
                        <div className="side-l">
                            <div className="logo"></div>
                            <header className="header"><div className="element">Login</div></header>
                            <div className="form">
                                <div className="input">
                                    <div className="overlap-group">
                                        <div className="text-field">
                                            <div className="text-input">
                                                <div className="text">
                                                    <input className="example-gmail-com" placeholder="example@gmail.com" type="email" />
                                                </div>
                                            </div>
                                            <div className="top">
                                                <div className="left">
                                                    <div className="form-field-label"><div className="label">E-mail</div></div>
                                                </div>
                                                <div className="right"></div>
                                            </div>
                                        </div>
                                        <div className="text-field-2">
                                            <div className="text-field-3">
                                                <div className="text-input-2">
                                                    <div className="text-2">
                                                        <div className="text-wrapper">
                                                            <input className="password-input" placeholder="Password" type="password" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-field-label-wrapper">
                                                    <div className="form-field-label-2"><div className="text-wrapper-2">Password</div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="button"><div className="children">Sign in</div></button>
                            </div>
                        </div>
                        <div className="top-2"></div>
                    </div>
                    <div className="overlap-2">
                        <p className="alumni-tracker"><span className="span">Alumni </span> <span className="text-wrapper-3">Tracker</span></p>
                        <img className="CRMC-LOGO" src="./CRMC_LOGO1.png" />
                    </div>
                </div>
            </div>


        </>
    );
}

export default LoginForm;
