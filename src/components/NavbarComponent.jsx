import React from 'react'

const NavbarComponent = ({ submitHandler, searchTerm, setSearchTerm }) => {
  return (
    <div className='NavbarComponent'>
      <div>
        <h1>My Movies</h1>
        <div className='text-secondary font-italic'>
          created by Philcob | API: The Movie Db
        </div>
      </div>
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
