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
            <div className="container">
                <div className="row align-items-center">
                    <div className="col col-6">
                        <div className="d-flex align-items-center" style={{ height: "100vh" }}>
                            <img className="nasa-image img-fluid" src={data.url} alt="NASA" />
                        </div>
                    </div>
                    <div className="card col-6 h-100">
                        <h4 className="col col-6 card-title text-white">
                            {data.title}
                            <p className="pt-4">Date: {data.date}</p>
                        </h4>
                        <p className="card-text text-white">{data.explanation}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;