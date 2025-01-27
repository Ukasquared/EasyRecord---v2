
function AttendanceList({isOpenModal, attendanceData}) {

    return(
        <section className="displayList">
        {isOpenModal ? (
            <div className="modai-overlay">
                <div className="modal-content">
                    {attendanceData.length > 0 (
                        <table>
                            <thead>
                                <tr>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Status</th>
                                    <th>date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {attendanceData.map((record, index) => (
                                     <tr key={index}>
                                        <td>{record.student_id}</td>
                                        <td>{record.date}</td>
                                        <td>{record.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                         </table>
                    )}
              
                </div>
               
            </div>
        ) : (<p> No records found </p>)}
       </section>
    )
}

export default AttendanceList;