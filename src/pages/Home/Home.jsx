import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import GoogleSheetPieChart from '../../components/GoogleSheetPieChart/GoogleSheetPieChart';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1.jpg';
import Blog2Img from '../../utils/images/blog2.jpg';
import Blog3Img from '../../utils/images/blog3.jpg';



const blogs = [
  {
    id: 1,
    img: [Blog1Img],
    title: 'Blog 1',
    description: 'Được gặp gỡ các chuyên gia '
  },

  {
    id: 2,
    img: [Blog2Img],
    title: 'Blog 2',
    description: 'Được học tập với đội ngũ giảng viên là các thạc sĩ, kỹ sư, chuyên gia trong các lĩnh vực Công nghệ thông tin, Thiết kế đồ họa, An toàn thông tin… với nhiều năm kinh nghiệm'
  },

  {
    id: 3,
    img: [Blog3Img],
    title: 'Blog 3',
    description: 'Tham gia các hoạt động ngoại khóa do trường tổ chức'
  },
];

function Home() {
  const [isVisible, setIsVisible] = useState(false);


  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  return (

    <div className='home-page'>
      <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
        <div className='container d-flex flex-column align-items-center'>
          <h2>Welcome To</h2>
          <h1 className='text-center fw-semibold'>Trường Cao Đẳng Quốc Tế Ispace</h1>
          <p>
            Trường Cao Đẳng An ninh mạng iSPACE là đơn vị thuộc NGS Group. iSPACE tiên phong trong đào tạo thực hành từ năm 2008 theo tiêu chí tuyển sinh đi liền tuyển dụng.
            Từ năm 2015, Trường iSPACE thực hiện chương trình tuyển sinh và đào tạo đặc biệt “CNTT- Học để làm việc ngay”. Chương trình mang đến cho các bạn trẻ đam mê CNTT ba giá trị vượt trội: 70% học thực hành, 100% làm việc ngay, 100% thêm nghề phụ.
          </p>
          <div className='d-flex flex-column flex-sm-row align-items-center'>
            <Link to="/courses">
              <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Our Courses</button>
            </Link>
            <Link to="/contact">
              <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
            </Link>
          </div>
        </div>
      </header>


      <div className="py-5">
        <ChooseSection />
      </div>


      <div className="sc_heading clone_title text-center">
        <h3 className="title">BAN CỐ VẤN - GIẢNG VIÊN</h3>
        <p className="sub-heading">Trường Cao đẳng An ninh mạng iSPACE</p>
        <h3>Hiệu Trưởng</h3>
      </div>

      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-01-1.jpg"
              alt="Hiệu trưởng"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <p>
              <a href="https://ispace.edu.vn/tien-si-nguyen-duy-ham-hieu-truong/">
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <h2 className="text-center mb-4">GIẢNG VIÊN</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <a href="https://ispace.edu.vn/thac-si-le-hoang-binh-nguyen-gv-ispace/">
              <img
                src="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-02.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-md-6 mb-4">
            <a href="https://ispace.edu.vn/thay-nguyen-the-phuong-gv-ispace/">
              <img
                src="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-05-04.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-md-6 mb-4">
            <a href="https://ispace.edu.vn/thay-truong-pham-hoai-thuong/">
              <img
                src="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-05.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-md-6 mb-4">
            <a href="https://ispace.edu.vn/co-le-kim-ngan/">
              <img
                src="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-03-1.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-md-6 mb-4">
            <a href="https://ispace.edu.vn/ths-van-minh-dai/">
              <img
                src="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-06.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </section>

            <div className="py-5">
        <GoogleSheetPieChart />
      </div>

      <div className="py-5">
        <FaqAccordion />
      </div>

      <div className='blog-section text-light py-5'>
        <div className='container d-flex flex-column align-items-center'>
          <h2 className='text-center text-capitalize mb-5'>Tin Đáng Chú Ý</h2>
          <div className='row g-4'>
            {blogs.map((blog) => (
              <div key={blog.id} className='col-md-6 col-lg-4'>
                <Link to={`/blog/${blog.id}`} className='text-decoration-none'>
                  <Card className='h-100 shadow scale-hover-effect'>
                    <Card.Img variant="top" src={blog.img} />
                    <Card.Body className='p-md-5'>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
          <Link to="/blog">
            <button type='button' className='btn btn-danger btn-lg mt-5'>Read More Blogs</button>
          </Link>
        </div>
      </div>

      {isVisible && (
        <div
          className="scroll-to-top"
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            cursor: 'pointer',
            zIndex: '999',
          }}
        >
          <FaArrowUp size={24} color="white" />
        </div>
      )}
    </div>
  );
}

export default Home;