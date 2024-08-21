import React, { useState, useEffect } from 'react';

export default function Api() {
  const [api, setApi] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(setApi);
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {api.map(ap => (
          <div className="col-md-4 mb-4" key={ap.id}>
            <div className="card h-100">
              <img
                src={ap.image}
                className="card-img-top"
                alt={ap.title}
                style={{ height: '200px', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title">{ap.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ap.category}</h6>
                <h6 className="card-title">${ap.price}</h6>
                <p className="card-text">Rating: {ap.rating.rate} ({ap.rating.count} reviews)</p>
                <p className="card-text">{ap.description}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
