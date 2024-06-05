import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/anhnen.jpg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';

function About() {
  return (
    <div className='about-page'>
      <header className='height-75'>
        <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h1 className='text-center fw-semibold'>Giới thiệu chung</h1>
        </div>
      </header>

      <div className='container my-5'>
        <div className="row">
          <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0 '>
            <h2 className='mb-4 mb-lg-5'>Giới Thiệu Chung</h2>
            <p>Từ năm 2015, iSPACE thực hiện chương trình tuyển sinh và đào tạo đặc biệt "CNTT- Học để làm việc ngay"</p>

            <p>Chương trình mang đến cho các bạn trẻ đam mê CNTT ba giá trị vượt trội: 70% học thực hành, 100% làm việc ngay, 100% thêm nghề phụ.</p>

            <p>Năm học 2021- 2022, trường Cao đẳng An ninh mạng iSPACE mở rộng và nâng cấp cơ sở vật chất với quy mô hiện đại và sáng tạo theo xu hướng trường học quốc tế.</p>

            <p>Bên cạnh chương trình đào tạo chính quy, iSPACE đào tạo các khóa học ngắn hạn về công nghệ thông tin đồng thời cung cấp dịch vào đào tạo về kỹ năng, cách ứng cứu sự cố CNTT cho nhân sự CNTT của doanh nghiệp cũng như tư vấn triển khai hệ thống CNTT cho doanh nghiệp.</p>
            <Link to="/contact">
              <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
            </Link>
          </div>
          <div className='col-lg-6 d-flex justify-content-center'>
            <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" />
          </div>
        </div>
      </div>

      <div className='bg-dark text-light py-5'>
        <ChooseSection />
      </div>

      <div className='bg-body-tertiary py-5'>
        <div className="container">
          <h3 class="elementor-heading-title elementor-size-default">GIÁ TRỊ CỐT LÕI</h3>
          <div class="elementor-element elementor-element-80f8456 elementor-widget elementor-widget-image" data-id="80f8456" data-element_type="widget" data-widget_type="image.default">
            <div class="elementor-widget-container">
              <img loading="lazy"
                decoding="async"
                width="1254"
                height="431"
                src="https://ispace.edu.vn/wp-content/uploads/2021/03/TamNhin_iSPACE_2.png"
                class="attachment-full size-full wp-image-10465"
                alt=""
                srcset="https://ispace.edu.vn/wp-content/uploads/2021/03/TamNhin_iSPACE_2.png 1254w, https://ispace.edu.vn/wp-content/uploads/2021/03/TamNhin_iSPACE_2-300x103.png 300w, https://ispace.edu.vn/wp-content/uploads/2021/03/TamNhin_iSPACE_2-1024x352.png 1024w, https://ispace.edu.vn/wp-content/uploads/2021/03/TamNhin_iSPACE_2-768x264.png 768w"
                sizes="(max-width: 1254px) 100vw, 1254px" />
            </div>
          </div>
          <div className='row g-4'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;