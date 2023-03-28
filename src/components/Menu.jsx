import React from 'react'
import { Link } from 'react-router-dom'

export default function menu() {
    return (
        <div>

            <Link to={'page1'}><button>click to go Page1</button></Link>
            <Link to={'page2'}><button>click to go Page2</button></Link>



        </div>
    )
}
