import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/planets">planet</Link>
                    </li>
                    <li>
                        <Link to="/peoples">People</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
