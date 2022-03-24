import { Link } from 'react-router-dom';


const Unrecognized = () => {
    return <h1>
        <p>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</p>
        <Link to="/authors/add">GO</Link>
    </h1>
}
export default Unrecognized