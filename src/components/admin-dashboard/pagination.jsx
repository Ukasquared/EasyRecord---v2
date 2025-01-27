function Pagination ({isOpenModal, totalPages}) {
    return(
        // pagination controls
        <div className="display-pagination">
            {isOpenModal && totalPages > 1 && (<div></div>)}
        </div>
        
    )
}

export default Pagination