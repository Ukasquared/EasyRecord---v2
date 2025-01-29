function Pagination ({isOpenModal, totalPages, currentPage, onPageChange}) {

    const pages = Array.from({length:totalPages}, (_, i) => i + 1)

    return(
        // pagination controls
        <div className="display-pagination">
            {isOpenModal && totalPages > 1 && (
                <div>
                    <button type="button" 
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    >Prev</button>
                    {pages.map((page) => {
                        (<button key={page} 
                            onClick={() => onPageChange(page)}
                            disabled={page === currentPage}>
                           {currentPage}
                        </button>)
                    })}
                    <button type="button" 
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    >Next</button>
                </div>)
            }
        </div>
        
    )
}

export default Pagination