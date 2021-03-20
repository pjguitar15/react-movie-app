import React from 'react'

const PaginationComp = ({ page, setPage, prevDisable }) => {
  return (
    <div className='text-center py-5'>
      <button
        disabled={prevDisable}
        onClick={() => setPage(page - 1)}
        className='btn btn-primary mx-1'
      >
        Previous
      </button>
      <button onClick={() => setPage(page + 1)} className='btn btn-primary'>
        Next
      </button>
    </div>
  )
}

export default PaginationComp
