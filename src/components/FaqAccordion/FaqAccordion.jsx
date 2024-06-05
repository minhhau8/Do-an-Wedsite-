import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return ( 

    
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>Giải đáp mọi thắc mắc của sinh viên</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>Sinh viên học Ispace sẽ được cấp bằng gì ?</Accordion.Header>
                    <Accordion.Body>
                    Sinh viên hệ cao đẳng trường iSPACE khi tốt nghiệp sẽ được cấp bằng Kỹ Sư Thực Hành.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Sinh viên ra trường có đảm bảo việc làm hay không ?</Accordion.Header>
                    <Accordion.Body>
                    Khi nhập học sinh viên sẽ được ký thoả thuận giới thiệu việc làm với trường và các công ty thành viên và đối tác như GTSC, Gtel. Với chương trình học tập trung vào thực hành, các kỹ năng cần thiết cho ngành nghề, trường đảm bảo sinh viên tốt nghiệp sẽ có việc làm theo chuyên ngành đào tạo của mình.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Nội dung và thời gian đào tạo các chuyên ngành ?</Accordion.Header>
                    <Accordion.Body>
                    Mỗi chuyên ngành đào tạo trong 6 học kỳ và 1 học kỳ làm đề tài tốt nghiệp. Mỗi chuyên ngành sẽ được phân thành nhóm Học phần chung và Học phần chuyên ngành.
Mỗi học kỳ học trong 3 tháng và thời gian thi hoàn thành học kỳ.
Các học kỳ được thiết kế sát theo nhu cầu công việc và ngành nghề. Sinh viên hoàn thành xong nhóm nội dung nào sẽ được cấp bằng/ chứng chỉ tương ứng để có thể sử dụng đi làm ngay.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>Học phí có tăng trong thời gian học không ?</Accordion.Header>
                    <Accordion.Body>
                    Trường cam kết không tăng học phí trong suốt thời gian đào tạo của khoá.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            
        </div>
    </div>
  )
}

export default FaqAccordion;