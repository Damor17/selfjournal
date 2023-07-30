import { Link } from "react-router-dom"

const Missing = () => {
    return (
        <main className="Missing">
            <h2> Page Not Found</h2>
            <p> Well, thats a bummer!</p>
            <p>
                <Link to='/'> Visit Our HomePage</Link>
            </p>
        </main>
    )
}
export default Missing