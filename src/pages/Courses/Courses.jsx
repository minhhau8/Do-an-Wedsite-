import React, { useState, useEffect } from 'react';
import './Courses.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import CourseRegisterForm from './CourseRegisterForm';
import QuantrimangImg from '../../utils/images/quantrimang.jpg';
import PhattrienphanmemImg from '../../utils/images/phattrienphanmem.jpg';
import ThuongmaidientuImg from '../../utils/images/thuongmaidientu.jpg';
import ThietkedohoaImg from '../../utils/images/thietkedohoa.jpg';
import AnninhmangImg from '../../utils/images/anninhmang.jpg';

function CourseButton({ course, onClick }) {
    const handleClick = () => {
        onClick(course);
    };

    return (
        <button className="btn btn-red" onClick={handleClick}>
            Xem chi tiết
        </button>
    );
}

function CourseCard({ course, onClick }) {
    return (
        <div className="col-12 col-md-4 mb-4">
            <div className="courses-detail">
                <img src={course.img[0]} alt={course.title} className="img-fluid" />
                <h2>{course.title}</h2>
                <p>{course.description}</p>
                <CourseButton course={course} onClick={onClick} />
            </div>
        </div>
    );
}

function Courses() {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    const courses = [
        {
            id: 1,
            img: [QuantrimangImg],
            title: 'Khóa học cung cấp kiến thức chuyên sâu về quản trị mạng, từ cơ bản đến nâng cao.',
            content: (
                <React.Fragment>
                    Chương trình đào tạo quản trị mạng được chắc lọc kiến thức với 70% giờ học thực hành tại doanh nghiệp. Chỉ với thời gian đào tạo 2 năm 3 tháng, sinh viên tốt nghiệp có thể làm việc tại 100 doanh nghiệp đối tác của iSPACE.
                    <h2 style={{ fontWeight: 'bold', textAlign: 'center', color: 'red' }}>Lộ Trình Học Ngành Quản Trị Mạng</h2>
                    <img decoding="async" width="1500" height="210" src="https://ispace.edu.vn/wp-content/uploads/2024/02/co-hoi-nghe-nghiep-thuong-mai-dien-tu.jpg" className="attachment-full size-full wp-image-13997" alt="co-hoi-nghe-nghiep-quan-tri-mang" srcSet="https://ispace.edu.vn/wp-content/uploads/2024/02/co-hoi-nghe-nghiep-thuong-mai-dien-tu.jpg 1919w, https://ispace.edu.vn/wp-content/uploads/2024/02/co-hoi-nghe-nghiep-thuong-mai-dien-tu-300x48.jpg 300w, https://ispace.edu.vn/wp-content/uploads/2024/02/co-hoi-nghe-nghiep-thuong-mai-dien-tu-1024x165.jpg 1024w, https://ispace.edu.vn/wp-content/uploads/2024/02/co-hoi-nghe-nghiep-thuong-mai-dien-tu-768x124.jpg 768w, https://ispace.edu.vn/wp-content/uploads/2024/02/co-hoi-nghe-nghiep-thuong-mai-dien-tu-1536x248.jpg 1536w" sizes="(max-width: 1919px) 100vw, 1919px" />
                    <img decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2024/02/Bo-7-anh-CTDT-QTM-01.jpg" className="attachment-large size-large wp-image-13998" alt="" />
                    <img loading="lazy" decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2024/02/Bo-7-anh-CTDT-QTM-02.jpg" className="attachment-large size-large wp-image-13999" alt="" />
                    <img loading="lazy" decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2024/02/Bo-7-anh-CTDT-QTM-03.jpg" className="attachment-large size-large wp-image-14000" alt="" />
                    <img loading="lazy" decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2024/02/Bo-7-anh-CTDT-QTM-04.jpg" className="attachment-large size-large wp-image-14001" alt="" />
                    <img loading="lazy" decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2024/02/Bo-7-anh-CTDT-QTM-05.jpg" className="attachment-large size-large wp-image-14002" alt="" />
                    <img loading="lazy" decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2024/02/Bo-7-anh-CTDT-QTM-06.jpg" className="attachment-large size-large wp-image-14003" alt="" />
                    <img loading="lazy" decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2024/02/Bo-7-anh-CTDT-QTM-07.jpg" className="attachment-large size-large wp-image-14004" alt="" />
                    <img decoding="async" width="640" height="58" src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-768x69.png" className="attachment-medium_large size-medium_large wp-image-9974" alt="" srcSet="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-768x69.png 768w, https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-300x27.png 300w, https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-1024x92.png 1024w, https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x.png 1144w" sizes="(max-width: 640px) 100vw, 640px" style={{ display: 'block', margin: '0 auto' }} />
                    <h3 style={{ fontWeight: 'bold', textAlign: 'center', color: 'red' }}>Nội Dung Chương Trình Học</h3>

                    <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-a3e49f9 elementor-widget elementor-widget-image" data-id="a3e49f9" data-element_type="widget" data-widget_type="image.default">
                            <div class="elementor-widget-container">
                                <img loading="lazy" decoding="async" width="640" height="124" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1024x199.png" class="attachment-large size-large wp-image-11752" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1024x199.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-300x58.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-768x149.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1536x299.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" /></div>
                        </div>
                        <div class="elementor-element elementor-element-c3bc4bc elementor-widget elementor-widget-text-editor" data-id="c3bc4bc" data-element_type="widget" data-widget_type="text-editor.default">
                            <div class="elementor-widget-container">
                                <ul><li>Đại cương về CNTT</li><li>Cơ sở lập trình</li><li>Kiến trúc máy tính và Hệ điều hành</li><li>Toán ứng dụng cho Tin học</li></ul>						</div>
                        </div>
                    </div>

                    <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-1ed5c56 elementor-widget elementor-widget-image" data-id="1ed5c56" data-element_type="widget" data-widget_type="image.default">
                            <div class="elementor-widget-container">
                                <img loading="lazy" decoding="async" width="640" height="125" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1024x200.png" class="attachment-large size-large wp-image-11753" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" /></div>
                        </div>
                        <div class="elementor-element elementor-element-38da305 elementor-widget elementor-widget-text-editor" data-id="38da305" data-element_type="widget" data-widget_type="text-editor.default">
                            <div class="elementor-widget-container">
                                <ul><li>Mạng máy tính căn bản</li><li>Quản trị hệ thống mạng cơ bản</li><li>Ngôn ngữ lập trình Python</li><li>Cơ sở dữ liệu</li></ul>						</div>
                        </div>
                    </div>

                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-67f97d4" data-id="67f97d4" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-element elementor-element-cd6a4a3 elementor-widget elementor-widget-image" data-id="cd6a4a3" data-element_type="widget" data-widget_type="image.default">
                                <div class="elementor-widget-container">
                                    <img loading="lazy" decoding="async" width="640" height="125" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1024x200.png" class="attachment-large size-large wp-image-11754" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" />													</div>
                            </div>
                            <div class="elementor-element elementor-element-dd73c60 elementor-widget elementor-widget-text-editor" data-id="dd73c60" data-element_type="widget" data-widget_type="text-editor.default">
                                <div class="elementor-widget-container">
                                    <ul><li>Mạng máy tính nâng cao</li><li>Quản trị Windows cơ bản</li><li>Quản trị Linux</li><li>Điện toán đám mây</li></ul>						</div>
                            </div>
                        </div>
                    </div>

                    <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-fa7eb57 elementor-widget elementor-widget-image" data-id="fa7eb57" data-element_type="widget" data-widget_type="image.default">
                            <div class="elementor-widget-container">
                                <img loading="lazy" decoding="async" width="640" height="124" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-1024x199.png" class="attachment-large size-large wp-image-11755" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-1024x199.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-300x58.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-768x149.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-1536x299.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" />													</div>
                        </div>
                        <div class="elementor-element elementor-element-fa57b2e elementor-widget elementor-widget-text-editor" data-id="fa57b2e" data-element_type="widget" data-widget_type="text-editor.default">
                            <div class="elementor-widget-container">
                                <ul><li>Quản trị hệ thống mạng nâng cao</li><li>Quản trị Windows nâng cao</li><li>Bảo mật Linux</li><li>Bảo trì hạ tầng mạng</li></ul>						</div>
                        </div>
                    </div>

                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-f33a5d6" data-id="f33a5d6" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-element elementor-element-afb1506 elementor-widget elementor-widget-image" data-id="afb1506" data-element_type="widget" data-widget_type="image.default">
                                <div class="elementor-widget-container">
                                    <img loading="lazy" decoding="async" width="640" height="124" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-1024x199.png" class="attachment-large size-large wp-image-11756" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-1024x199.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-300x58.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-768x149.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-1536x299.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" />													</div>
                            </div>
                            <div class="elementor-element elementor-element-025e2da elementor-widget elementor-widget-text-editor" data-id="025e2da" data-element_type="widget" data-widget_type="text-editor.default">
                                <div class="elementor-widget-container">
                                    <ul><li>Phòng thủ mạng cơ bản</li><li>Phát triển ứng dụng web</li><li>Kiểm thử xâm nhập</li><li>Quản trị hạ tầng ảo hóa</li></ul>						</div>
                            </div>
                        </div>
                    </div>

                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-89b48a9" data-id="89b48a9" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-element elementor-element-36ffd14 elementor-widget elementor-widget-image" data-id="36ffd14" data-element_type="widget" data-widget_type="image.default">
                                <div class="elementor-widget-container">
                                    <img loading="lazy" decoding="async" width="640" height="125" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1024x200.png" class="attachment-large size-large wp-image-11757" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" />													</div>
                            </div>
                            <div class="elementor-element elementor-element-aee7e34 elementor-widget elementor-widget-text-editor" data-id="aee7e34" data-element_type="widget" data-widget_type="text-editor.default">
                                <div class="elementor-widget-container">
                                    <ul><li>Lập trình mạng</li><li>Phòng thủ mạng nâng cao</li><li>Giám sát mạng</li><li>Ứng cứu sự cố mạng</li></ul>						</div>
                            </div>
                        </div>
                    </div>

                    <section class="elementor-section elementor-top-section elementor-element elementor-element-f2d50f1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="f2d50f1" data-element_type="section">
                        <div class="elementor-container elementor-column-gap-default">
                            <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-e6b15c1" data-id="e6b15c1" data-element_type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                    <div class="elementor-element elementor-element-34035a1 elementor-widget elementor-widget-image" data-id="34035a1" data-element_type="widget" data-widget_type="image.default">
                                        <div class="elementor-widget-container">
                                            <img loading="lazy" decoding="async" width="640" height="125" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-1024x200.png" class="attachment-large size-large wp-image-11758" alt="rượu vang shop" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" />													</div>
                                    </div>
                                    <div class="elementor-element elementor-element-17de547 elementor-widget elementor-widget-text-editor" data-id="17de547" data-element_type="widget" data-widget_type="text-editor.default">
                                        <div class="elementor-widget-container">
                                            <ul><li>Thực tập tốt nghiệp</li><li>Đồ án tốt nghiệp</li></ul>						</div>
                                    </div>
                                </div>
                            </div>

                            <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-4acf924" data-id="4acf924" data-element_type="column">
                                <div class="elementor-widget-wrap">
                                </div>
                            </div>

                            <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-75e6daa" data-id="75e6daa" data-element_type="column">
                                <div class="elementor-widget-wrap">
                                </div>
                            </div>
                        </div>
                    </section>
                </React.Fragment>
            )
        },

        {
            id: 2,
            img: [PhattrienphanmemImg],
            title: 'Học cách phát triển các ứng dụng phần mềm từ thiết kế, lập trình đến triển khai.',
            content: (
                <React.Fragment>
                    Tại iSPACE, ngành phát triển phần mềm được thiết kế tối thiểu 500 giờ trải nghiệm thực tế dưới sự hướng dẫn của doanh nghiệp. Sinh viên sẽ được rèn luyện kĩ năng chuyên môn, tích lũy kinh nghiệm thông qua quá trình học tập tại doanh nghiệp cùng các sản phẩm có khả năng được ứng dụng trong thực tế.
                    <img decoding="async" width="1500" height="210" src="https://ispace.edu.vn/wp-content/uploads/2020/09/LAP-TRINH.jpg" class="attachment-full size-full wp-image-11761" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2020/09/LAP-TRINH.jpg 1919w, https://ispace.edu.vn/wp-content/uploads/2020/09/LAP-TRINH-300x48.jpg 300w, https://ispace.edu.vn/wp-content/uploads/2020/09/LAP-TRINH-1024x165.jpg 1024w, https://ispace.edu.vn/wp-content/uploads/2020/09/LAP-TRINH-768x124.jpg 768w, https://ispace.edu.vn/wp-content/uploads/2020/09/LAP-TRINH-1536x248.jpg 1536w" sizes="(max-width: 1919px) 100vw, 1919px" />
                    <h4 style={{ fontWeight: 'bold', textAlign: 'center', color: 'red' }}>Lộ Trình Học Ngành Phát Triển Phần Mềm</h4>
                    <img loading="lazy" decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2020/09/LTW_HK1.png" class="attachment-large size-large wp-image-10010" alt=""></img>
                    <img loading="lazy" decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2020/09/LTW_HK2.png" class="attachment-large size-large wp-image-10011" alt=""></img>
                    <img loading="lazy" decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2020/09/LTW_HK3.png" class="attachment-large size-large wp-image-10012" alt=""></img>
                    <img loading="lazy" decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2020/09/LTW_HK4.png" class="attachment-large size-large wp-image-10013" alt=""></img>
                    <img loading="lazy" decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2020/09/LTW_HK5.png" class="attachment-large size-large wp-image-10014" alt=""></img>
                    <img loading="lazy" decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2020/09/LTW_HK6.png" class="attachment-large size-large wp-image-10015" alt=""></img>
                    <img loading="lazy" decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK7.png" class="attachment-large size-large wp-image-9966" alt=""></img>
                    <img loading="lazy" decoding="async" width="640" height="58" src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-768x69.png" class="attachment-medium_large size-medium_large wp-image-9974" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-768x69.png 768w, https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-300x27.png 300w, https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-1024x92.png 1024w, https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x.png 1144w" sizes="(max-width: 640px) 100vw, 640px" style={{ display: 'block', margin: '0 auto' }} />
                    <h5 style={{ fontWeight: 'bold', textAlign: 'center', color: 'red' }}>Nội Dung Chương Trình Học</h5>
                    <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-a3e49f9 elementor-widget elementor-widget-image" data-id="a3e49f9" data-element_type="widget" data-widget_type="image.default">
                            <div class="elementor-widget-container">
                                <img loading="lazy" decoding="async" width="640" height="124" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1024x199.png" class="attachment-large size-large wp-image-11752" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1024x199.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-300x58.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-768x149.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1536x299.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" /></div>
                        </div>
                        <div class="elementor-element elementor-element-c3bc4bc elementor-widget elementor-widget-text-editor" data-id="c3bc4bc" data-element_type="widget" data-widget_type="text-editor.default">
                            <div class="elementor-widget-container">
                                <ul><li>Đại cương về CNTT</li><li>Nhập môn lập trình</li><li>Kiến trúc máy tính và Hệ điều hành</li><li>Toán ứng dụng cho Tin học</li><li>Mạng căn bản</li></ul>						</div>
                        </div>
                    </div>

                    <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-1ed5c56 elementor-widget elementor-widget-image" data-id="1ed5c56" data-element_type="widget" data-widget_type="image.default">
                            <div class="elementor-widget-container">
                                <img loading="lazy" decoding="async" width="640" height="125" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1024x200.png" class="attachment-large size-large wp-image-11753" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" /></div>
                        </div>
                        <div class="elementor-element elementor-element-38da305 elementor-widget elementor-widget-text-editor" data-id="38da305" data-element_type="widget" data-widget_type="text-editor.default">
                            <div class="elementor-widget-container">
                                <ul><li>Kỹ thuật lập trình</li><li>Lập trình hướng đối tượng</li><li>Ngôn ngữ lập trình c#/ Java/ PHP</li><li>Cơ sở dữ liệu</li><li>Đồ án 1</li></ul>						</div>
                        </div>
                    </div>

                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-67f97d4" data-id="67f97d4" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-element elementor-element-cd6a4a3 elementor-widget elementor-widget-image" data-id="cd6a4a3" data-element_type="widget" data-widget_type="image.default">
                                <div class="elementor-widget-container">
                                    <img loading="lazy" decoding="async" width="640" height="125" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1024x200.png" class="attachment-large size-large wp-image-11754" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" />													</div>
                            </div>
                            <div class="elementor-element elementor-element-dd73c60 elementor-widget elementor-widget-text-editor" data-id="dd73c60" data-element_type="widget" data-widget_type="text-editor.default">
                                <div class="elementor-widget-container">
                                    <ul><li>Cấu trúc dữ liệu và giải thuật</li><li>Lập trình Web 1</li><li>Thiết kế Web 1</li><li>Nhập môn Công nghệ phần mềm</li></ul>						</div>
                            </div>
                        </div>
                    </div>

                    <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-fa7eb57 elementor-widget elementor-widget-image" data-id="fa7eb57" data-element_type="widget" data-widget_type="image.default">
                            <div class="elementor-widget-container">
                                <img loading="lazy" decoding="async" width="640" height="124" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-1024x199.png" class="attachment-large size-large wp-image-11755" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-1024x199.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-300x58.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-768x149.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-1536x299.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" />													</div>
                        </div>
                        <div class="elementor-element elementor-element-fa57b2e elementor-widget elementor-widget-text-editor" data-id="fa57b2e" data-element_type="widget" data-widget_type="text-editor.default">
                            <div class="elementor-widget-container">
                                <ul><li>Thiết kế Web 2</li><li>Lập trình Web 2</li><li>Phân tích và thiết kế phần mềm</li><li>Kiểm thử phần mềm</li><li>Đồ án 2</li></ul>						</div>
                        </div>
                    </div>

                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-f33a5d6" data-id="f33a5d6" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-element elementor-element-afb1506 elementor-widget elementor-widget-image" data-id="afb1506" data-element_type="widget" data-widget_type="image.default">
                                <div class="elementor-widget-container">
                                    <img loading="lazy" decoding="async" width="640" height="124" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-1024x199.png" class="attachment-large size-large wp-image-11756" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-1024x199.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-300x58.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-768x149.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-1536x299.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" />													</div>
                            </div>
                            <div class="elementor-element elementor-element-025e2da elementor-widget elementor-widget-text-editor" data-id="025e2da" data-element_type="widget" data-widget_type="text-editor.default">
                                <div class="elementor-widget-container">
                                    <ul><li>Nhập môn Trí tuệ nhân tạo</li><li>Kỹ năng nghề nghiệp</li><li>Lập trình Web 3</li><li>Bảo mật Web và ứng dụng</li><li>Đồ án 3</li></ul>						</div>
                            </div>
                        </div>
                    </div>

                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-89b48a9" data-id="89b48a9" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-element elementor-element-36ffd14 elementor-widget elementor-widget-image" data-id="36ffd14" data-element_type="widget" data-widget_type="image.default">
                                <div class="elementor-widget-container">
                                    <img loading="lazy" decoding="async" width="640" height="125" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1024x200.png" class="attachment-large size-large wp-image-11757" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" />													</div>
                            </div>
                            <div class="elementor-element elementor-element-aee7e34 elementor-widget elementor-widget-text-editor" data-id="aee7e34" data-element_type="widget" data-widget_type="text-editor.default">
                                <div class="elementor-widget-container">
                                    <ul><li> Thực tập tốt nghiệp</li><li> – Chuyên đề hãng CN/DN</li></ul>						</div>
                            </div>
                        </div>
                    </div>

                    <section class="elementor-section elementor-top-section elementor-element elementor-element-f2d50f1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="f2d50f1" data-element_type="section">
                        <div class="elementor-container elementor-column-gap-default">
                            <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-e6b15c1" data-id="e6b15c1" data-element_type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                    <div class="elementor-element elementor-element-34035a1 elementor-widget elementor-widget-image" data-id="34035a1" data-element_type="widget" data-widget_type="image.default">
                                        <div class="elementor-widget-container">
                                            <img loading="lazy" decoding="async" width="640" height="125" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-1024x200.png" class="attachment-large size-large wp-image-11758" alt="rượu vang shop" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" />													</div>
                                    </div>
                                    <div class="elementor-element elementor-element-17de547 elementor-widget elementor-widget-text-editor" data-id="17de547" data-element_type="widget" data-widget_type="text-editor.default">
                                        <div class="elementor-widget-container">
                                            <ul><li>Bảo vệ đồ án tốt nghiệp</li></ul>						</div>
                                    </div>
                                </div>
                            </div>

                            <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-4acf924" data-id="4acf924" data-element_type="column">
                                <div class="elementor-widget-wrap">
                                </div>
                            </div>

                            <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-75e6daa" data-id="75e6daa" data-element_type="column">
                                <div class="elementor-widget-wrap">
                                </div>
                            </div>
                        </div>
                    </section>

                </React.Fragment>
            )
        },
        {
            id: 3,
            img: [ThietkedohoaImg],
            title: 'Khóa học giúp bạn nắm vững các công cụ và kỹ thuật thiết kế đồ họa chuyên nghiệp.',
            content: (
                <React.Fragment>
                    Chương trình được xây dựng dựa trên chương trình học chuẩn quốc tế của các hãng nổi tiếng về công nghệ đồ họa như: Adobe, Autodesk,… Sinh viên được trực tiếp làm ra các ấn phẩm đồ họa theo từng giai đoạn năng lực chuyên môn.
                    <img decoding="async" width="1500" height="210" src="https://ispace.edu.vn/wp-content/uploads/2020/09/THIET-KE-DO-HOA.jpg" class="attachment-full size-full wp-image-11763" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2020/09/THIET-KE-DO-HOA.jpg 1919w, https://ispace.edu.vn/wp-content/uploads/2020/09/THIET-KE-DO-HOA-300x48.jpg 300w, https://ispace.edu.vn/wp-content/uploads/2020/09/THIET-KE-DO-HOA-1024x165.jpg 1024w, https://ispace.edu.vn/wp-content/uploads/2020/09/THIET-KE-DO-HOA-768x124.jpg 768w, https://ispace.edu.vn/wp-content/uploads/2020/09/THIET-KE-DO-HOA-1536x248.jpg 1536w" sizes="(max-width: 1919px) 100vw, 1919px"></img>
                    <h6 style={{ fontWeight: 'bold', textAlign: 'center', color: 'red' }}>Lộ Trình Học Ngành Thiết Kế Đồ Họa</h6>
                    <img decoding="async" width="176" height="211" src="https://ispace.edu.vn/wp-content/uploads/2020/04/TKHD_HK1.png" class="attachment-large size-large wp-image-10031" alt="" />
                    <img loading="lazy" decoding="async" width="176" height="211" src="https://ispace.edu.vn/wp-content/uploads/2020/04/TKDH_HK2.png" class="attachment-large size-large wp-image-10026" alt="" />
                    <img loading="lazy" decoding="async" width="176" height="211" src="https://ispace.edu.vn/wp-content/uploads/2020/04/TKDH_HK3.png" class="attachment-large size-large wp-image-10027" alt="" />
                    <img loading="lazy" decoding="async" width="176" height="211" src="https://ispace.edu.vn/wp-content/uploads/2020/04/TKDH_HK4.png" class="attachment-large size-large wp-image-10028" alt="" />
                    <img loading="lazy" decoding="async" width="176" height="211" src="https://ispace.edu.vn/wp-content/uploads/2020/04/TKDH_HK5.png" class="attachment-large size-large wp-image-10029" alt="" />
                    <img loading="lazy" decoding="async" width="176" height="211" src="https://ispace.edu.vn/wp-content/uploads/2020/04/TKDH_HK6.png" class="attachment-large size-large wp-image-10030" alt="" />
                    <img loading="lazy" decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK7.png" class="attachment-large size-large wp-image-9966" alt="" />
                    <img loading="lazy" decoding="async" width="640" height="58" src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-768x69.png" class="attachment-medium_large size-medium_large wp-image-9974" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-768x69.png 768w, https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-300x27.png 300w, https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-1024x92.png 1024w, https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x.png 1144w" sizes="(max-width: 640px) 100vw, 640px" style={{ display: 'block', margin: '0 auto' }} />

                    <h7 style={{ fontWeight: 'bold', textAlign: 'center', color: 'red' }}>Nội Dung Chương Trình Học</h7>
                    <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-a3e49f9 elementor-widget elementor-widget-image" data-id="a3e49f9" data-element_type="widget" data-widget_type="image.default">
                            <div class="elementor-widget-container">
                                <img loading="lazy" decoding="async" width="640" height="124" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1024x199.png" class="attachment-large size-large wp-image-11752" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1024x199.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-300x58.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-768x149.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1536x299.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" /></div>
                        </div>
                        <div class="elementor-element elementor-element-c3bc4bc elementor-widget elementor-widget-text-editor" data-id="c3bc4bc" data-element_type="widget" data-widget_type="text-editor.default">
                            <div class="elementor-widget-container">
                                <ul><li>Đồ họa căn bản</li><li>Mỹ thuật đồ họa</li><li>Khoa học màu sắc</li><li>Photoshop cơ bản</li><li>Trang trí đồ họa</li></ul>						</div>
                        </div>
                    </div>

                    <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-1ed5c56 elementor-widget elementor-widget-image" data-id="1ed5c56" data-element_type="widget" data-widget_type="image.default">
                            <div class="elementor-widget-container">
                                <img loading="lazy" decoding="async" width="640" height="125" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1024x200.png" class="attachment-large size-large wp-image-11753" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" /></div>
                        </div>
                        <div class="elementor-element elementor-element-38da305 elementor-widget elementor-widget-text-editor" data-id="38da305" data-element_type="widget" data-widget_type="text-editor.default">
                            <div class="elementor-widget-container">
                                <ul><li>Nguyên lý thị giác</li><li>Kỹ thuật nhiếp ảnh</li><li>Illustrator</li><li>Photoshop nâng cao</li><li>Đồ án 1</li></ul>						</div>
                        </div>
                    </div>

                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-67f97d4" data-id="67f97d4" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-element elementor-element-cd6a4a3 elementor-widget elementor-widget-image" data-id="cd6a4a3" data-element_type="widget" data-widget_type="image.default">
                                <div class="elementor-widget-container">
                                    <img loading="lazy" decoding="async" width="640" height="125" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1024x200.png" class="attachment-large size-large wp-image-11754" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" />													</div>
                            </div>
                            <div class="elementor-element elementor-element-dd73c60 elementor-widget elementor-widget-text-editor" data-id="dd73c60" data-element_type="widget" data-widget_type="text-editor.default">
                                <div class="elementor-widget-container">
                                    <ul><li>In Design</li><li>Kỹ thuật in</li><li>Ý tưởng sáng tạo</li><li>Digital Marketing</li><li>Nghệ thuật chữ</li></ul>						</div>
                            </div>
                        </div>
                    </div>

                    <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-fa7eb57 elementor-widget elementor-widget-image" data-id="fa7eb57" data-element_type="widget" data-widget_type="image.default">
                            <div class="elementor-widget-container">
                                <img loading="lazy" decoding="async" width="640" height="124" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-1024x199.png" class="attachment-large size-large wp-image-11755" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-1024x199.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-300x58.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-768x149.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-1536x299.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" />													</div>
                        </div>
                        <div class="elementor-element elementor-element-fa57b2e elementor-widget elementor-widget-text-editor" data-id="fa57b2e" data-element_type="widget" data-widget_type="text-editor.default">
                            <div class="elementor-widget-container">
                                <ul><li>Thiết kế bao bì</li><li>Thiết kế nhận dạng thương hiệu</li><li>Thiết kế giao diện Web</li><li>Nguyên lý thiết kế đồ họa</li><li>Đồ án 2</li></ul>						</div>
                        </div>
                    </div>

                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-f33a5d6" data-id="f33a5d6" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-element elementor-element-afb1506 elementor-widget elementor-widget-image" data-id="afb1506" data-element_type="widget" data-widget_type="image.default">
                                <div class="elementor-widget-container">
                                    <img loading="lazy" decoding="async" width="640" height="124" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-1024x199.png" class="attachment-large size-large wp-image-11756" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-1024x199.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-300x58.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-768x149.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-1536x299.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" />													</div>
                            </div>
                            <div class="elementor-element elementor-element-025e2da elementor-widget elementor-widget-text-editor" data-id="025e2da" data-element_type="widget" data-widget_type="text-editor.default">
                                <div class="elementor-widget-container">
                                    <ul><li>Kỹ năng nghề nghiệp</li><li>Kỹ thuật quay phim</li><li> Xử lý phim – Adobe Premier</li><li>Nguyên lý thiết kế nội thất</li><li>Autocad 2D</li><li>Dựng phối cảnh nội thất 3D – SketchUp</li></ul>						</div>
                            </div>
                        </div>
                    </div>

                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-89b48a9" data-id="89b48a9" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-element elementor-element-36ffd14 elementor-widget elementor-widget-image" data-id="36ffd14" data-element_type="widget" data-widget_type="image.default">
                                <div class="elementor-widget-container">
                                    <img loading="lazy" decoding="async" width="640" height="125" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1024x200.png" class="attachment-large size-large wp-image-11757" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" />													</div>
                            </div>
                            <div class="elementor-element elementor-element-aee7e34 elementor-widget elementor-widget-text-editor" data-id="aee7e34" data-element_type="widget" data-widget_type="text-editor.default">
                                <div class="elementor-widget-container">
                                    <ul><li> Thực tập tốt nghiệp</li><li> Chuyên đề hãng CN/DN</li><li> Đồ án 3</li></ul>						</div>
                            </div>
                        </div>
                    </div>

                    <section class="elementor-section elementor-top-section elementor-element elementor-element-f2d50f1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="f2d50f1" data-element_type="section">
                        <div class="elementor-container elementor-column-gap-default">
                            <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-e6b15c1" data-id="e6b15c1" data-element_type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                    <div class="elementor-element elementor-element-34035a1 elementor-widget elementor-widget-image" data-id="34035a1" data-element_type="widget" data-widget_type="image.default">
                                        <div class="elementor-widget-container">
                                            <img loading="lazy" decoding="async" width="640" height="125" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-1024x200.png" class="attachment-large size-large wp-image-11758" alt="rượu vang shop" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" />													</div>
                                    </div>
                                    <div class="elementor-element elementor-element-17de547 elementor-widget elementor-widget-text-editor" data-id="17de547" data-element_type="widget" data-widget_type="text-editor.default">
                                        <div class="elementor-widget-container">
                                            <ul><li>Bảo vệ đồ án tốt nghiệp</li></ul>						</div>
                                    </div>
                                </div>
                            </div>

                            <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-4acf924" data-id="4acf924" data-element_type="column">
                                <div class="elementor-widget-wrap">
                                </div>
                            </div>

                            <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-75e6daa" data-id="75e6daa" data-element_type="column">
                                <div class="elementor-widget-wrap">
                                </div>
                            </div>
                        </div>
                    </section>
                </React.Fragment>
            )
        },
        {
            id: 4,
            img: [ThuongmaidientuImg],
            title: 'Tìm hiểu về các mô hình kinh doanh, marketing và công nghệ trong thương mại điện tử.',
            content: (
                <React.Fragment>
                    Chương trình đào tạo Thương mại điện tử tại iSPACE được đặt hàng từ doanh nghiệp. 100% sinh viên tốt nghiệp đi làm ngay tại doanh nghiệp đối tác của iSPACE. Chương trình đào tạo với 70% giờ học thực hành, sinh viên được trang bị đầy đủ kiến thức và kỹ năng mềm đáp ứng yêu cầu của doanh nghiệ
                    <img decoding="async" width="1500" height="210" src="https://ispace.edu.vn/wp-content/uploads/2024/02/co-hoi-nghe-nghiep-quan-tri-mang.jpg" class="attachment-full size-full wp-image-13996" alt="co-hoi-nghe-nghiep-thuong-mai-dien-tu" srcset="https://ispace.edu.vn/wp-content/uploads/2024/02/co-hoi-nghe-nghiep-quan-tri-mang.jpg 1919w, https://ispace.edu.vn/wp-content/uploads/2024/02/co-hoi-nghe-nghiep-quan-tri-mang-300x48.jpg 300w, https://ispace.edu.vn/wp-content/uploads/2024/02/co-hoi-nghe-nghiep-quan-tri-mang-1024x165.jpg 1024w, https://ispace.edu.vn/wp-content/uploads/2024/02/co-hoi-nghe-nghiep-quan-tri-mang-768x124.jpg 768w, https://ispace.edu.vn/wp-content/uploads/2024/02/co-hoi-nghe-nghiep-quan-tri-mang-1536x248.jpg 1536w" sizes="(max-width: 1919px) 100vw, 1919px" />

                    <h8 style={{ fontWeight: 'bold', textAlign: 'center', color: 'red' }}>Nội Dung Chương Trình Học</h8>
                    <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-a3e49f9 elementor-widget elementor-widget-image" data-id="a3e49f9" data-element_type="widget" data-widget_type="image.default">
                            <div class="elementor-widget-container">
                                <img loading="lazy" decoding="async" width="640" height="124" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1024x199.png" class="attachment-large size-large wp-image-11752" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1024x199.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-300x58.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-768x149.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1536x299.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" /></div>
                        </div>
                        <div class="elementor-element elementor-element-c3bc4bc elementor-widget elementor-widget-text-editor" data-id="c3bc4bc" data-element_type="widget" data-widget_type="text-editor.default">
                            <div class="elementor-widget-container">
                                <ul><li>Tin học đại cương</li><li>Đồ họa ứng dụng</li><li>Thương mại điện tử</li><li>Giáo dục thể chất</li><li>Pháp luật đại cương</li><li>Giáo dục chính trị</li></ul>						</div>
                        </div>
                    </div>

                    <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-1ed5c56 elementor-widget elementor-widget-image" data-id="1ed5c56" data-element_type="widget" data-widget_type="image.default">
                            <div class="elementor-widget-container">
                                <img loading="lazy" decoding="async" width="640" height="125" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1024x200.png" class="attachment-large size-large wp-image-11753" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" /></div>
                        </div>
                        <div class="elementor-element elementor-element-38da305 elementor-widget elementor-widget-text-editor" data-id="38da305" data-element_type="widget" data-widget_type="text-editor.default">
                            <div class="elementor-widget-container">
                                <ul><li>Kỹ năng mềm</li><li>Marketing căn bản</li><li>Thực hành Kỹ thuật lập trình</li><li>Truyền thông số</li><li>Kỹ thuật nhiếp ảnh</li><li>An toàn lao động</li></ul>						</div>
                        </div>
                    </div>

                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-67f97d4" data-id="67f97d4" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-element elementor-element-cd6a4a3 elementor-widget elementor-widget-image" data-id="cd6a4a3" data-element_type="widget" data-widget_type="image.default">
                                <div class="elementor-widget-container">
                                    <img loading="lazy" decoding="async" width="640" height="125" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1024x200.png" class="attachment-large size-large wp-image-11754" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" />													</div>
                            </div>
                            <div class="elementor-element elementor-element-dd73c60 elementor-widget elementor-widget-text-editor" data-id="dd73c60" data-element_type="widget" data-widget_type="text-editor.default">
                                <div class="elementor-widget-container">
                                    <ul><li>Thiết kế website </li><li>Cơ sở dữ liệu</li><li>Quốc phòng và an ninh</li><li>Kỹ năng làm việc nhóm</li><li>Tiếng anh chuyên ngành</li></ul>						</div>
                            </div>
                        </div>
                    </div>

                    <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-fa7eb57 elementor-widget elementor-widget-image" data-id="fa7eb57" data-element_type="widget" data-widget_type="image.default">
                            <div class="elementor-widget-container">
                                <img loading="lazy" decoding="async" width="640" height="124" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-1024x199.png" class="attachment-large size-large wp-image-11755" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-1024x199.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-300x58.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-768x149.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-1536x299.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" />													</div>
                        </div>
                        <div class="elementor-element elementor-element-fa57b2e elementor-widget elementor-widget-text-editor" data-id="fa57b2e" data-element_type="widget" data-widget_type="text-editor.default">
                            <div class="elementor-widget-container">
                                <ul><li>Thiết kế ứng dụng app</li><li>Tiếng anh chuyên ngành</li><li>Chuyển đổi số</li><li>Thanh toán điện tử</li><li>Sáng tạo nội dung số</li><li>Hệ quản trị cơ sở dữ liệu</li></ul>						</div>
                        </div>
                    </div>

                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-f33a5d6" data-id="f33a5d6" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-element elementor-element-afb1506 elementor-widget elementor-widget-image" data-id="afb1506" data-element_type="widget" data-widget_type="image.default">
                                <div class="elementor-widget-container">
                                    <img loading="lazy" decoding="async" width="640" height="124" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-1024x199.png" class="attachment-large size-large wp-image-11756" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-1024x199.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-300x58.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-768x149.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-1536x299.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" />													</div>
                            </div>
                            <div class="elementor-element elementor-element-025e2da elementor-widget elementor-widget-text-editor" data-id="025e2da" data-element_type="widget" data-widget_type="text-editor.default">
                                <div class="elementor-widget-container">
                                    <ul><li>Kinh tế vi mô</li><li>Kinh tế vĩ mô</li><li> Bán lẻ điện tử</li><li>Khởi nghiệp kinh doanh</li><li>Nhập môn an toàn thông tin</li><li>Quản lý dự án công nghệ thông tin</li><li>E – business</li></ul>						</div>
                            </div>
                        </div>
                    </div>

                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-89b48a9" data-id="89b48a9" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-element elementor-element-36ffd14 elementor-widget elementor-widget-image" data-id="36ffd14" data-element_type="widget" data-widget_type="image.default">
                                <div class="elementor-widget-container">
                                    <img loading="lazy" decoding="async" width="640" height="125" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1024x200.png" class="attachment-large size-large wp-image-11757" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" />													</div>
                            </div>
                            <div class="elementor-element elementor-element-aee7e34 elementor-widget elementor-widget-text-editor" data-id="aee7e34" data-element_type="widget" data-widget_type="text-editor.default">
                                <div class="elementor-widget-container">
                                    <ul><li>Xây dựng dự án thương mại điện tử</li><li>SEO (Tối ưu hóa công cụ tìm kiếm)</li><li>Nhập môn trí tuệ sáng tạo</li><li>Social Marketing</li><li>Google Marketing</li><li>Lập kế hoạch Digital Marketing</li><li>Bảo mật thương mại điện tử</li></ul>						</div>
                            </div>
                        </div>
                    </div>

                    <section class="elementor-section elementor-top-section elementor-element elementor-element-f2d50f1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="f2d50f1" data-element_type="section">
                        <div class="elementor-container elementor-column-gap-default">
                            <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-e6b15c1" data-id="e6b15c1" data-element_type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                    <div class="elementor-element elementor-element-34035a1 elementor-widget elementor-widget-image" data-id="34035a1" data-element_type="widget" data-widget_type="image.default">
                                        <div class="elementor-widget-container">
                                            <img loading="lazy" decoding="async" width="640" height="125" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-1024x200.png" class="attachment-large size-large wp-image-11758" alt="rượu vang shop" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" />													</div>
                                    </div>
                                    <div class="elementor-element elementor-element-17de547 elementor-widget elementor-widget-text-editor" data-id="17de547" data-element_type="widget" data-widget_type="text-editor.default">
                                        <div class="elementor-widget-container">
                                            <ul><li>Thực tập tốt nghiệp</li><li>Khóa luận tốt nghiệp</li></ul>						</div>
                                    </div>
                                </div>
                            </div>

                            <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-4acf924" data-id="4acf924" data-element_type="column">
                                <div class="elementor-widget-wrap">
                                </div>
                            </div>

                            <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-75e6daa" data-id="75e6daa" data-element_type="column">
                                <div class="elementor-widget-wrap">
                                </div>
                            </div>
                        </div>
                    </section>
                </React.Fragment>
            )
        },
        {
            id: 5,
            img: [AnninhmangImg],
            title: 'Khóa học trang bị cho bạn kiến thức và kỹ năng cần thiết về an ninh mạng.',
            content: (
                <React.Fragment>
                    Điểm vượt trội của iSPACE là luôn chắt lọc và cập nhật kiến thức, nền tảng mới kết hợp với thực hành thao luyện trên THAO TRƯỜNG MẠNG – Cyber Range. Học viên được trực tiếp trải nghiệm các tình huống tấn công mạng thực tế, giúp học viên thành thạo và có kinh nghiệm thực tiễn ngay khi còn ngồi trên ghế nhà trường.
                    Chương trình đào tạo “Vệ sĩ mạng” của iSPACE sẽ giúp sinh viên học được cách rà soát và khắc phục tất cả các lỗ hổng/nguy cơ tiềm ẩn gây mất ATTT trong hạ tầng CNTT của các doanh nghiệp/ tổ chức.
                    <img decoding="async" width="1500" height="210" src="https://ispace.edu.vn/wp-content/uploads/2020/09/AN-NINH-MANG.jpg" class="attachment-full size-full wp-image-11760" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2020/09/AN-NINH-MANG.jpg 1919w, https://ispace.edu.vn/wp-content/uploads/2020/09/AN-NINH-MANG-300x48.jpg 300w, https://ispace.edu.vn/wp-content/uploads/2020/09/AN-NINH-MANG-1024x165.jpg 1024w, https://ispace.edu.vn/wp-content/uploads/2020/09/AN-NINH-MANG-768x124.jpg 768w, https://ispace.edu.vn/wp-content/uploads/2020/09/AN-NINH-MANG-1536x248.jpg 1536w" sizes="(max-width: 1919px) 100vw, 1919px" />

                    <h9 style={{ fontWeight: 'bold', textAlign: 'center', color: 'red' }}>Lộ Trình Học Ngành An Ninh Mạng</h9>
                    <img decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK1.png" class="attachment-large size-large wp-image-9960" alt=""></img>
                    <img loading="lazy" decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK2.png" class="attachment-large size-large wp-image-9961" alt="" />
                    <img loading="lazy" decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK3.png" class="attachment-large size-large wp-image-9962" alt="" />
                    <img loading="lazy" decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK4.png" class="attachment-large size-large wp-image-9963" alt="" />
                    <img loading="lazy" decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK5.png" class="attachment-large size-large wp-image-9964" alt="" />
                    <img loading="lazy" decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK6.png" class="attachment-large size-large wp-image-9965" alt="" />
                    <img loading="lazy" decoding="async" width="176" height="203" src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK7.png" class="attachment-large size-large wp-image-9966" alt="" />
                    <img loading="lazy" decoding="async" width="640" height="58" src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-768x69.png" class="attachment-medium_large size-medium_large wp-image-9974" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-768x69.png 768w, https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-300x27.png 300w, https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-1024x92.png 1024w, https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x.png 1144w" sizes="(max-width: 640px) 100vw, 640px" style={{ display: 'block', margin: '0 auto' }} />

                    <h10 style={{ fontWeight: 'bold', textAlign: 'center', color: 'red' }}>Nội Dung Chương Trình Học</h10>
                    <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-a3e49f9 elementor-widget elementor-widget-image" data-id="a3e49f9" data-element_type="widget" data-widget_type="image.default">
                            <div class="elementor-widget-container">
                                <img loading="lazy" decoding="async" width="640" height="124" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1024x199.png" class="attachment-large size-large wp-image-11752" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1024x199.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-300x58.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-768x149.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1536x299.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" /></div>
                        </div>
                        <div class="elementor-element elementor-element-c3bc4bc elementor-widget elementor-widget-text-editor" data-id="c3bc4bc" data-element_type="widget" data-widget_type="text-editor.default">
                            <div class="elementor-widget-container">
                                <ul><li>Đại cương về CNTT</li><li>Cơ sở lập trình</li><li>Kiến trúc máy tính và Hệ điều hành</li><li>Cơ sở lập trình</li><li> Toán ứng dụng cho Tin học</li></ul>						</div>
                        </div>
                    </div>

                    <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-1ed5c56 elementor-widget elementor-widget-image" data-id="1ed5c56" data-element_type="widget" data-widget_type="image.default">
                            <div class="elementor-widget-container">
                                <img loading="lazy" decoding="async" width="640" height="125" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1024x200.png" class="attachment-large size-large wp-image-11753" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" /></div>
                        </div>
                        <div class="elementor-element elementor-element-38da305 elementor-widget elementor-widget-text-editor" data-id="38da305" data-element_type="widget" data-widget_type="text-editor.default">
                            <div class="elementor-widget-container">
                                <ul><li>Mạng máy tính căn bản</li><li>Cấu trúc dữ liệu và giải thuật</li><li>Ngôn ngữ lập trình Python</li><li>Luật ANM và đạo đức trong lĩnh vực CNTT</li></ul>						</div>
                        </div>
                    </div>

                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-67f97d4" data-id="67f97d4" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-element elementor-element-cd6a4a3 elementor-widget elementor-widget-image" data-id="cd6a4a3" data-element_type="widget" data-widget_type="image.default">
                                <div class="elementor-widget-container">
                                    <img loading="lazy" decoding="async" width="640" height="125" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1024x200.png" class="attachment-large size-large wp-image-11754" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" />													</div>
                            </div>
                            <div class="elementor-element elementor-element-dd73c60 elementor-widget elementor-widget-text-editor" data-id="dd73c60" data-element_type="widget" data-widget_type="text-editor.default">
                                <div class="elementor-widget-container">
                                    <ul><li>Mạng máy tính nâng cao</li><li>Quản trị hệ thống mạng</li><li>An ninh mạng</li><li>Điện toán đám mây</li></ul>						</div>
                            </div>
                        </div>
                    </div>

                    <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-fa7eb57 elementor-widget elementor-widget-image" data-id="fa7eb57" data-element_type="widget" data-widget_type="image.default">
                            <div class="elementor-widget-container">
                                <img loading="lazy" decoding="async" width="640" height="124" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-1024x199.png" class="attachment-large size-large wp-image-11755" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-1024x199.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-300x58.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-768x149.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-1536x299.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" />													</div>
                        </div>
                        <div class="elementor-element elementor-element-fa57b2e elementor-widget elementor-widget-text-editor" data-id="fa57b2e" data-element_type="widget" data-widget_type="text-editor.default">
                            <div class="elementor-widget-container">
                                <ul><li> Bảo mật ứng dụng Web</li><li>Kiểm thử An toàn thông tin</li><li>Thâm nhập và phòng thủ</li><li>Mật mã và An toàn thông tin</li></ul>						</div>
                        </div>
                    </div>

                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-f33a5d6" data-id="f33a5d6" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-element elementor-element-afb1506 elementor-widget elementor-widget-image" data-id="afb1506" data-element_type="widget" data-widget_type="image.default">
                                <div class="elementor-widget-container">
                                    <img loading="lazy" decoding="async" width="640" height="124" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-1024x199.png" class="attachment-large size-large wp-image-11756" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-1024x199.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-300x58.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-768x149.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-1536x299.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" />													</div>
                            </div>
                            <div class="elementor-element elementor-element-025e2da elementor-widget elementor-widget-text-editor" data-id="025e2da" data-element_type="widget" data-widget_type="text-editor.default">
                                <div class="elementor-widget-container">
                                    <ul><li>Điều tra số</li><li>Phân tích và Đánh giá An toàn thông tin</li><li>Bảo mật hệ thống thông tin</li><li>Hệ thống giám sát An toàn thông tin</li></ul>						</div>
                            </div>
                        </div>
                    </div>

                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-89b48a9" data-id="89b48a9" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-element elementor-element-36ffd14 elementor-widget elementor-widget-image" data-id="36ffd14" data-element_type="widget" data-widget_type="image.default">
                                <div class="elementor-widget-container">
                                    <img loading="lazy" decoding="async" width="640" height="125" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1024x200.png" class="attachment-large size-large wp-image-11757" alt="" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" />													</div>
                            </div>
                            <div class="elementor-element elementor-element-aee7e34 elementor-widget elementor-widget-text-editor" data-id="aee7e34" data-element_type="widget" data-widget_type="text-editor.default">
                                <div class="elementor-widget-container">
                                    <ul><li>Phân tích mã độc và kỹ thuật dịch ngược</li><li> Ứng cứu sự cố an ninh mạng</li><li>Chuyên đề hãng CN/DN</li><li>Đồ án An ninh mạng</li></ul>						</div>
                            </div>
                        </div>
                    </div>

                    <section class="elementor-section elementor-top-section elementor-element elementor-element-f2d50f1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="f2d50f1" data-element_type="section">
                        <div class="elementor-container elementor-column-gap-default">
                            <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-e6b15c1" data-id="e6b15c1" data-element_type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                    <div class="elementor-element elementor-element-34035a1 elementor-widget elementor-widget-image" data-id="34035a1" data-element_type="widget" data-widget_type="image.default">
                                        <div class="elementor-widget-container">
                                            <img loading="lazy" decoding="async" width="640" height="125" src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-1024x200.png" class="attachment-large size-large wp-image-11758" alt="rượu vang shop" srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-2048x399.png 2048w" sizes="(max-width: 640px) 100vw, 640px" />													</div>
                                    </div>
                                    <div class="elementor-element elementor-element-17de547 elementor-widget elementor-widget-text-editor" data-id="17de547" data-element_type="widget" data-widget_type="text-editor.default">
                                        <div class="elementor-widget-container">
                                            <ul><li>Bảo vệ đồ án tốt nghiệp</li><li>Thực tập tốt nghiệp</li></ul>						</div>
                                    </div>
                                </div>
                            </div>

                            <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-4acf924" data-id="4acf924" data-element_type="column">
                                <div class="elementor-widget-wrap">
                                </div>
                            </div>

                            <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-75e6daa" data-id="75e6daa" data-element_type="column">
                                <div class="elementor-widget-wrap">
                                </div>
                            </div>
                        </div>
                    </section>
                </React.Fragment>
            )
        }
    ];

    const handleCourseClick = (course) => {
        setSelectedCourse(course);
    };
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollToTop(window.pageYOffset > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="page-container">
            <div className='courses-page'>
                <header className='height-75'>
                    <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                        <h1 className='text-center fw-semibold'>Các Khóa Học</h1>
                    </div>
                </header>

                <div className="container">
                    <div className="row">
                        {courses.map((course) => (
                            <CourseCard key={course.id} course={course} onClick={handleCourseClick} />
                        ))}
                    </div>
                </div>

                {selectedCourse && (
                    <div className="courses-content-wrapper">
                        <div className="container">
                            <img src={selectedCourse.img[0]} alt={selectedCourse.title} className="img-fluid" />
                            <h2>{selectedCourse.title}</h2>
                            <p>{selectedCourse.description}</p>
                            <div className="courses-content">
                                {selectedCourse.content}
                            </div>
                            <div className="course-register-form">
                                <CourseRegisterForm courseId={selectedCourse.id} />
                            </div>
                        </div>
                    </div>
                )}
                {showScrollToTop && (
                    <div className="scroll-to-top" onClick={scrollToTop}>
                        <FontAwesomeIcon icon={faArrowUp} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Courses;
