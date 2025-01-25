// fetch the attendance of any student
// student
import { useState } from "react"



function Attendance({onFilter}) {
    const [studentId, setStudentId] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    const handleFilter = () => {
        onFilter({studentId, startDate, endDate})
    }

    
    return (
        <div>
            <label htmlFor="studentId"> Student Id</label>
            <input 
                type="text" 
                name="student-id" 
                id="student-id"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                placeholder="student Id" /> <br />

            <label htmlFor="startdate">Start Date</label>
            <input type="date" name="startdate" id="startdate" 
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="startdate"/> <br />

            <label htmlFor="enddate">End Date</label>
            <input type="date" name="enddate" id="enddate" 
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="enddate"/> <br />

            <button type="submit" 
                onSubmit={handleFilter}>Find attendance</button>
        </div>
    )
}

export default Attendance