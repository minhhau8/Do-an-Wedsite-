import React from 'react';
import './ChooseSection.css';
import { Card } from 'react-bootstrap';

function ChooseSection() {
    return (
        <div>
            <div className="container">
                <h2 className='text-center mb-5'>Why choose Cao Đẳng Quốc Tế Ispace ?</h2>
                <div className='row g-4'>
                    <div className='col-lg-4'>
                        <Card className='d-flex align-items-center border-0 h-100'>
                            <div className='mt-3'>
                                <img decoding="async" width="70" height="70" src="https://ispace.edu.vn/wp-content/uploads/2020/09/course2-icon2.png" class="attachment-large size-large wp-image-9023" alt="">
                                </img>
                                <div class="elementor-counter-number-wrapper">
                                    <span class="elementor-counter-number-prefix"></span>
                                    <span class="elementor-counter-number" data-duration="2000" data-to-value="99" data-from-value="0" data-delimiter=",">
                                        <strong>99</strong>
                                    </span>
                                    <span class="elementor-counter-number-suffix"> <strong>%</strong></span>
                                </div>
                            </div>
                            <Card.Body>
                                <Card.Title className='text-center text-capitalize mb-3'>
                                    Sinh Viên Có Việc Làm Ngay
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-lg-4'>
                        <Card className='d-flex align-items-center border-0 h-100'>
                            <div className='mt-3'> 
                            <img loading="lazy" decoding="async" width="70" height="70" src="https://ispace.edu.vn/wp-content/uploads/2020/09/course2-icon4.png" class="attachment-large size-large wp-image-9025" alt="">
                                </img>
                                <div class="elementor-counter-number-wrapper">
                                    <span class="elementor-counter-number-prefix"></span>
                                    <span class="elementor-counter-number" data-duration="2000" data-to-value="99" data-from-value="0" data-delimiter=",">
                                        <strong>70</strong>
                                    </span>
                                    <span class="elementor-counter-number-suffix"> <strong>%</strong></span>
                                </div>
                            </div>
                            <Card.Body>
                                <Card.Title className='text-center text-capitalize mb-3'>
                                    Thực Hành
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-lg-4'>
                        <Card className='d-flex align-items-center border-0 h-100'>
                            <div className='mt-3'> 
                            <img loading="lazy" decoding="async" width="70" height="70" src="https://ispace.edu.vn/wp-content/uploads/2020/09/course2-icon3.png" class="attachment-large size-large wp-image-9024" alt="">
                                </img>
                                <div class="elementor-counter-number-wrapper">
                                    <span class="elementor-counter-number-prefix"></span>
                                    <span class="elementor-counter-number" data-duration="2000" data-to-value="99" data-from-value="0" data-delimiter=",">
                                        <strong>18</strong>
                                    </span>
                                    <span class="elementor-counter-number-suffix"> <strong>Năm</strong></span>
                                </div>
                            </div>
                            <Card.Body>
                                <Card.Title className='text-center text-capitalize mb-3'>
                                    Kinh Nghiệm Đào Tạo
                                </Card.Title>
                            </Card.Body>
                        </Card>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseSection;