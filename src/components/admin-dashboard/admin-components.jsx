import { useEffect, useState } from "react"
import AttendanceFilter from "./attendancefilter";

function AdminDashboard() {
    const [attendanceData, setAttendanceData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [modal, setModal] = useState(false)
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

    const prevBtn = () => {
        if (currentPage > totalPages) setCurrentPage((pageNumber) => pageNumber - 1);
    }

    const nxtBtn = () => {
        if (currentPage > 1) setCurrentPage((pageNumber) => pageNumber + 1);
    }

    return(
        <section className="admin-component">
            {/* the attendance will be displayed in a modal, the modal will be set
            to true when the user searches for student atendance
            - nothing else will be clickable until the user exits the modal  */}
            <AttendanceFilter onFilter={handleFilter} />


        </section>
    )
}

export default AdminDashboard