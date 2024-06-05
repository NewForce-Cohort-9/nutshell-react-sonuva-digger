// Import necessary hooks and functions from React and services
import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeService.jsx"
import "./Ticket.css"
import { assignTicket } from "../../services/ticketServices.jsx"
import { updateTicket } from "../../services/ticketServices.jsx"
import { events } from "api / database.json"

// Define the Ticket component, accepting ticket, currentUser, and getAndSetTickets as props
export const Event = ({ events, userId, eventDate, location }) => {
    // Define state variables to hold the list of employees and the assigned employee
    const [user, setUsers] = useState([])
    const [assignedUser, setAssignedUser] = useState({})

    // useEffect to fetch all employees when the component mounts
    useEffect(() => {
        // Call the service to get all employees and update the state with the fetched data
        getAllEmployees().then((employeesArray) => {
            setEmployees(employeesArray)
        })
    }, [])

    // useEffect to find the employee assigned to the current ticket when employees or ticket changes
    useEffect(() => {
        // Find the employee whose ID matches the employee ID on the current ticket
        const foundEmployee = employees.find(
            (employee) => employee.id === ticket.employeeTickets[0]?.employeeId
        )
        // Update the state with the found employee
        setAssignedEmployee(foundEmployee)
    }, [employees, ticket])

    // Function to handle claiming a ticket
    const handleClaim = () => {
        // Find the employee object for the current user
        const currentEmployee = employees.find(
            (employee) => employee.userId === currentUser.id
        )

        // Create a new employee ticket object to assign the ticket to the current employee
        const newEmployeeTicket = {
            employeeId: currentEmployee.id,
            serviceTicketId: ticket.id,
        }

        // Call the service to assign the ticket and refresh the list of tickets
        assignTicket(newEmployeeTicket).then(() => {
            getAndSetTickets()
        })
    }

    // Function to handle closing a ticket
    const handleClose = () => {
        // Create an updated ticket object with the current date as the date completed
        const closedTicket = {
            id: ticket.id,
            userId: ticket.userId,
            description: ticket.description,
            emergency: ticket.emergency,
            dateCompleted: new Date(),
        }

        // Call the service to update the ticket and refresh the list of tickets
        updateTicket(closedTicket).then(() => {
            getAndSetTickets()
        })
    }
}
return (
    // The main section for the ticket component
    <section className="ticket">
        {/* Displaying the ticket ID in the header */}
        <header className="ticket-info">#{ticket.id}</header>

        {/* Displaying the ticket description */}
        <div>{ticket.description}</div>

        {/* Footer section containing additional ticket details and action buttons */}
        <footer>
            <div>
                {/* Displaying the assignee information */}
                <div className="ticket-info">assignee</div>
                {/* If an employee is assigned, display their full name; otherwise, display "None" */}
                <div>{assignedEmployee ? assignedEmployee.user?.fullName : "None"}</div>
            </div>
            <div>
                {/* Displaying whether the ticket is an emergency */}
                <div className="ticket-info">emergency</div>
                {/* If the ticket is an emergency, display "yes"; otherwise, display "no" */}
                <div>{ticket.emergency ? "yes" : "no"}</div>
            </div>
            <div className="button-container">
                {/* If the current user is a staff member and no employee is assigned, display the "Claim" button */}
                {currentUser.isStaff && !assignedEmployee ? (
                    <button className="btn btn-secondary" onClick={handleClaim}>
                        Claim
                    </button>
                ) : (
                    ""
                )}

                {/* If the current user is the assigned employee and the ticket is not completed, display the "Close" button */}
                {assignedEmployee?.userId === currentUser.id &&
                    !ticket.dateCompleted ? (
                    <button className="btn btn-warning" onClick={handleClose}>
                        Close
                    </button>
                ) : (
                    ""
                )}
            </div>
        </footer>
    </section>
)