import React from 'react'
import './Resert.scss'
import {Link} from 'react-router-dom'

export default function ResertPasswordPage() {
    return (
        <div id="logreg-forms">
        <form action="/reset/password/" className="form-reset">
        <input type="email" id="resetEmail" className="form-control" placeholder="Email address" required autofocus />
        <button className="btn btn-primary btn-block" type="submit">Reset Password</button>
        <Link to = "/login" id="cancel_reset"><i className="fas fa-angle-left" /> Back</Link>
    </form>
    </div>
    
    )
}
