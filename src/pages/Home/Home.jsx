import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import posterimg from '../../utils/images/poster.jpg';
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
        <span className="line"></span>
      </div>

      <section className="elementor-section elementor-inner-section elementor-element elementor-element-6af9ba2 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6af9ba2" data-element_type="section">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-20e8778" data-id="20e8778" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-c7675e4 elementor-widget elementor-widget-heading" data-id="c7675e4" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">HIỆU TRƯỞNG</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="elementor-section elementor-inner-section elementor-element elementor-element-0444689 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="0444689" data-element_type="section">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c845131" data-id="c845131" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-aaec715 elementor-widget elementor-widget-image" data-id="aaec715" data-element_type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <a href="https://ispace.edu.vn/tien-si-nguyen-duy-ham-hieu-truong/">
                    <img
                      loading="lazy"
                      decoding="async"
                      width="478"
                      height="104"
                      src="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-01-1.jpg"
                      className="attachment-large size-large wp-image-13904"
                      alt=""
                      srcSet="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-01-1.jpg 478w, https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-01-1-300x65.jpg 300w"
                      sizes="(max-width: 478px) 100vw, 478px"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-b42a155" data-id="b42a155" data-element_type="column">
            <div className="elementor-widget-wrap"></div>
          </div>
        </div>
      </section> 
      <section class="elementor-section elementor-inner-section elementor-element elementor-element-62c7eb6 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="62c7eb6" data-element_type="section">
<div class="elementor-container elementor-column-gap-default">
<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-5b60c0d" data-id="5b60c0d" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-c8a1b83 elementor-widget elementor-widget-heading" data-id="c8a1b83" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">

<h2 class="elementor-heading-title elementor-size-default">GIẢNG VIÊN</h2>		</div>
</div>
</div>
</div>
</div>
</section> 
<section class="elementor-section elementor-inner-section elementor-element elementor-element-9cc3afb elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9cc3afb" data-element_type="section">
<div class="elementor-container elementor-column-gap-default">
<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-b77a2fc" data-id="b77a2fc" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-caf15a0 elementor-widget elementor-widget-image" data-id="caf15a0" data-element_type="widget" data-widget_type="image.default">
<div class="elementor-widget-container">
<a href="https://ispace.edu.vn/thac-si-le-hoang-binh-nguyen-gv-ispace/">
<img 
loading="lazy" 
decoding="async" 
width="478" 
height="104" 
src="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-02.jpg" 
class="attachment-large size-large wp-image-13905" 
alt="" 
srcset="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-02.jpg 478w, https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-02-300x65.jpg 300w" 
sizes="(max-width: 478px) 100vw, 478px"/>								

</a>
</div>
</div>
</div>
</div>
<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7e34382" data-id="7e34382" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-68a3f4e elementor-widget elementor-widget-image" data-id="68a3f4e" data-element_type="widget" data-widget_type="image.default">
<div class="elementor-widget-container">
<a href="https://ispace.edu.vn/thay-nguyen-the-phuong-gv-ispace/">
<img loading="lazy" 
decoding="async" 
width="478" 
height="104" 
src="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-05-04.jpg" 
class="attachment-large size-large wp-image-13925" 
alt="" 
srcset="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-05-04.jpg 478w, https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-05-04-300x65.jpg 300w" 
sizes="(max-width: 478px) 100vw, 478px"/>								
</a>
</div>
</div>
</div>
</div>
</div>
</section> 

<section class="elementor-section elementor-inner-section elementor-element elementor-element-dd9bc12 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="dd9bc12" data-element_type="section">
<div class="elementor-container elementor-column-gap-default">
<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-af641ef" data-id="af641ef" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-39f13c9 elementor-widget elementor-widget-image" data-id="39f13c9" data-element_type="widget" data-widget_type="image.default">
<div class="elementor-widget-container">
<a href="https://ispace.edu.vn/thay-truong-pham-hoai-thuong/">
<img 
loading="lazy" 
decoding="async" 
width="478" 
height="104" 
src="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-05.jpg" 
class="attachment-large size-large wp-image-13907" 
alt="" 
srcset="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-05.jpg 478w, https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-05-300x65.jpg 300w" 
sizes="(max-width: 478px) 100vw, 478px"/>								
</a>
</div>
</div>
</div>
</div>
<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2e60f97" data-id="2e60f97" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-23d9d26 elementor-widget elementor-widget-image" data-id="23d9d26" data-element_type="widget" data-widget_type="image.default">
<div class="elementor-widget-container">
<a href="https://ispace.edu.vn/co-le-kim-ngan/">
<img loading="lazy" 
decoding="async" 
width="478" 
height="104" 
src="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-03-1.jpg" 
class="attachment-large size-large wp-image-13917" 
alt="" 
srcset="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-03-1.jpg 478w, https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-03-1-300x65.jpg 300w" 
sizes="(max-width: 478px) 100vw, 478px"/>								
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section class="elementor-section elementor-inner-section elementor-element elementor-element-09bbd97 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="09bbd97" data-element_type="section">
<div class="elementor-container elementor-column-gap-default">
<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7082bfa" data-id="7082bfa" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-8ea279e elementor-widget elementor-widget-image" data-id="8ea279e" data-element_type="widget" data-widget_type="image.default">
<div class="elementor-widget-container">
<a href="https://ispace.edu.vn/ths-van-minh-dai/">
<img 
loading="lazy" 
decoding="async" 
width="478" 
height="104" 
src="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-06.jpg" 
class="attachment-large size-large wp-image-13924" 
alt="" 
srcset="https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-06.jpg 478w, https://ispace.edu.vn/wp-content/uploads/2024/02/Ban-co-van-va-chuyen-gia-06-300x65.jpg 300w" 
sizes="(max-width: 478px) 100vw, 478px"/>								
</a>
</div>
</div>
</div>
</div>
</div>
</section>

      <div className='py-5 bg-light'>
        <div className="container">
          <div className='row d-flex align-items-center justify-content-around'>
            <div className='col-lg-5'>
              <h2 className='text-capitalize'>2024 start courses</h2>
              <p>Những khóa học đào tạo chính quy.</p>
              <Link to="/courses">
                <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
              </Link>
            </div>
            <div className='col-lg-5 mt-5 mt-lg-0'>
              <img src={posterimg} className='img-fluid' alt="Poster" />
            </div>
          </div>
        </div>
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