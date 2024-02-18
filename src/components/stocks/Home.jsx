import React from 'react'

const Home = () => {
    const logout = ()=>{
        localStorage.clear()
        setTimeout(()=>{
            window.location.reload()
        },1500);
    }
  return (
    <div>
      <button onClick={logout}>logout</button>
    </div>
  )
}

export default Home
