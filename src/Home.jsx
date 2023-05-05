import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";

function Home() {
    const [data, setData] = useState([])

    const APIkey = 'bgCY9vU7NRMru9j96JJA113Cll0BuiyUmpMBAQw0';

    async function loadNasa() {
        try {
            const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${APIkey}`);
            setData(response.data)
            // console.log(response.data.url);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        loadNasa()
        // eslint-disable-next-line1
    }, [])

    return (
        <>
        <Nav />
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <img className="nasa-image img-fluid" src={data.url} alt="NASA" />
            </div>
        </>
    )
}

export default Home;