import React from 'react';

const Menubar = () => {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand fs-1" href="MealDB">MealDB</a>
                    <button className="navbar-toggler" type="button"data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link  active" aria-current="page" href="home">Home</a>
                            <a className="nav-link active" href="Food">Food</a>
                            <a className="nav-link active" href="Pricing">Pricing</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Menubar;