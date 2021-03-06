import React from 'react'

const NavbarComponent = ({ submitHandler, searchTerm, setSearchTerm }) => {
  return (
    <div className='NavbarComponent'>
      <h1>My Movies</h1>
      <form onSubmit={submitHandler}>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Movie Search..'
          type='text'
        />
      </form>
    </div>
  )
}

export default NavbarComponent
