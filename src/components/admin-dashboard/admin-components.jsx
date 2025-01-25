import { useState } from "react"


function AdminDashboard() {
    const [attendanceData, setAttendanceData] = useState("");
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [modal, setModal] = useState(false)

    const fetchAttendance = async() => {
        try {
            const response = await fetch(`api/attendance?page=${currentPage}&limit=10`)
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

    const prevBtn = () => {
        setCurrentPage((pageNumber) => pageNumber - 1);
    }

    const nxtBtn = () => {
        setCurrentPage((pageNumber) => pageNumber + 1);

    return(
        <section className="admin-component">


        </section>
    )
}

export default AdminDashboard