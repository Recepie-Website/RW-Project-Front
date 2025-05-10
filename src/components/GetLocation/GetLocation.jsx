import {useEffect, useState} from 'react';

const API_URL = process.env.REACT_APP_API_URL;

const Geolocation = () => {
    const [oblast, setOblast] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                // Send to the backend
                const response = await fetch(`${API_URL}/api/users/location`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ latitude, longitude })
                });
                const contentType = response.headers.get("content-type");



                if (!response.ok) {
                    const text = await response.text();
                    console.error("Bad response from backend:", text);
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                if (!contentType || !contentType.includes("application/json")) {
                    const text = await response.text();
                    console.error("Not JSON:", text);
                    throw new Error("Response is not JSON");
                }

                const data = await response.json();
                setOblast(data.oblast);
            },
            (error) => {
                console.error("Geolocation error", error);
            }
        )
    }, [])
    console.log("Here we go:", oblast);
}

export default Geolocation;