import React from 'react';

function BaiTapThucHanhLayout() {
  return (
    <div>
      {/* Header */}
      <header className="bg-primary text-white py-5 text-center">
        <h1>Heroic Features</h1>
        <p>A Free Bootstrap 5 Starter Template</p>
      </header>

      {/* Body */}
      <div className="container py-5">
        <div className="row">
          {/* Banner */}
          <div className="col-lg-6">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Banner"
              className="img-fluid"
            />
          </div>

          {/* Item */}
          <div className="col-lg-6">
            <h2>Feature One</h2>
            <p>...</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-light py-4 text-center">
        <div className="container">
          <p>&copy; 2023 Your Company</p>
        </div>
      </footer>
    </div>
  );
}

export default BaiTapThucHanhLayout;
