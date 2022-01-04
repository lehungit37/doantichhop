import React from 'react'
import $ from 'jquery'
export default function BtnScrollTop() {
    const scrollTop = () => {
        $('html, body').animate({
            scrollTop: 0
        }, 1500)
    }
    return (
        <div className="btn__scrollTop" onClick={scrollTop}>
            <i className="fas fa-chevron-up" />
        </div>
    )
}
