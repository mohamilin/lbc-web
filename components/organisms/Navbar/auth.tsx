import Link from 'next/link'

interface LoginProps {
    isLogin?: boolean
}
function Auth(props:Partial<LoginProps>) {
    const { isLogin } = props
    if (isLogin) {
        return (
            <li className="nav-item my-auto dropdown d-flex">
                <div className="vertical-line d-lg-block d-none"></div>
                <div>
                    <a className="dropdown-toggle ms-lg-40" href="#" role="button" id="dropdownMenuLink"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="assets/img/avatar-1.png" className="rounded-circle" width="40" height="40"
                            alt="" />
                    </a>

                    <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
                        <li><a className="dropdown-item text-lg color-palette-2" href="#">My Profile</a></li>
                        <li><a className="dropdown-item text-lg color-palette-2" href="#">Wallet</a></li>
                        <li><a className="dropdown-item text-lg color-palette-2" href="#">Account Settings</a>
                        </li>
                        <li><a className="dropdown-item text-lg color-palette-2" href="#">Log Out</a></li>
                    </ul>
                </div>
            </li>
        )
    }
    return (
        <>
            <li className="nav-item my-auto">
                <Link href="/login" >
                    <a className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
                        role="button"><span style={{ fontSize: "18px", fontWeight: 480 }} >Login</span></a>
                </Link>
            </li>
        </>
    )
}

export default Auth
