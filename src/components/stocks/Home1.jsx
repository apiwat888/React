import React from 'react'

const Home1 = () => {
    const logout = () => {
        localStorage.clear()
        setTimeout(() => {
            window.location.reload()
        }, 1100);
    }
    return (
        <div>
            <div>
                <button onClick={logout}>logout</button>
            </div>
        </div>
    )
}

export default Home1
