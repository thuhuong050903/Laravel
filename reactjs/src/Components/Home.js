import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Home.css";
// import Lazada from "./Lazada";

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/get-productLazada/')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <div className="home-container">
                {data.map((item) => (
                    <div className="home-card" key={item.id}>
                        <img src={`http://127.0.0.1:8000/source/image/product/${item.Image}`} alt="{item.name}" />
                        <h2>{item.name}</h2>
                    
                        <p>{item.Price}</p>
                        <p>{item.Shop}</p>
                        <div className="card-buttons">
                            Chi Tiết
                            <button className="add-to-cart-button">Thêm giỏ hàng</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
