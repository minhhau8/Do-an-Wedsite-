import React, { useState } from 'react';

function CourseRegisterForm({ courseId }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Đăng ký khóa học:', { name, email, phone, courseId });
  
    setShowSuccessMessage(true);

    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Đăng ký khóa học</h4>
            </div>
            <div className="card-body">
              {showSuccessMessage && (
                <div className="alert alert-success" role="alert">
                  Đăng ký khóa học thành công!
                </div>
              )}
              <form onSubmit={handleSubmit} className="course-register-form">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Tên</label>
                  <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Số điện thoại</label>
                  <input type="tel" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Đăng ký</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseRegisterForm;
