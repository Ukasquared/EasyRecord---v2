import { useEffect, useState } from "react"
import AttendanceFilter from "./attendancefilter";
import AttendanceList from "./attendancelist";
import Pagination from "./pagination";

function AdminDashboard() {
    const [attendanceData, setAttendanceData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [openModal, setOpenModal] = useState(false)
    const [limit] = useState(10)

    const [studentId, setStudentId] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    // fetch student attendance
    const fetchAttendance = async() => {

        const queryParams = new URLSearchParams({
            currentPage,
            limit,
            ...(studentId && {studentId}),
            ...(startDate && { startDate }),
            ...(endDate && { endDate }),
        })

        try {
                const response = await fetch(`api/get-student-attendance?${queryParams}`)
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const attendanceData = await response.json()
                setAttendanceData(attendanceData.data)
                setTotalPages(attendanceData.pagination.totalPages)
                setOpenModal(true)
            } catch (error) {
                console.error(error.message);
            }
    }
        useEffect(() => {
              fetchAttendance();
        }, [currentPage])
        

    const handleFilter = (filters) => {
        setStudentId(filters.studentId || null)
        setStartDate(filters.startDate || null)
        setEndDate(filters.endDate || null)
        setCurrentPage(1)
    }

    const handlePageChange = (page) => setCurrentPage(page);


    return(
        <section className="admin-component">
            {/* the attendance will be displayed in a modal, the modal will be set
            to true when the user searches for student atendance
            - nothing else will be clickable until the user exits the modal  */}
            <AttendanceFilter onFilter={handleFilter} />
            <AttendanceList isOpenModal={openModal} attendanceData={attendanceData}/>
            <Pagination isOpenModal={openModal} totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
        </section>
    )
}

export default AdminDashboard