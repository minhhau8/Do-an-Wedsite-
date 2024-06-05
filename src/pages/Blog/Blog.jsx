import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './Blog.css';
import talkshowbanhangImg from '../../utils/images/banhangtrensanhaytrenmang.jpg';
import TalkshowhocthietkeImg from '../../utils/images/hocthietke.jpg';
import phongvancunghtvImg from '../../utils/images/htvphongvan.jpg';
import hinhblog1Img from '../../utils/images/hinhblog1.png';
import hinhblog11Img from '../../utils/images/hinhblog11.jpg';
import hinhblog12Img from '../../utils/images/hinhblog12.jpg';
import talkshowthietke11Img from '../../utils/images/talkshowthietke11.jpg';
import talkshowthietke12Img from '../../utils/images/talkshowthietke12.jpg';
import talkshowthietke13Img from '../../utils/images/talkshowthietke13.jpg';
import talkshowthietke14Img from '../../utils/images/talkshowthietke14.jpg';
import phongvanhtv12Img from '../../utils/images/phongvanhtv12.jpg';
import phongvanhtv13Img from '../../utils/images/phongvanhtv13.jpg';

function BlogDetail({ blog, onClick }) {
    const handleClick = () => {
        onClick(blog);
    };

    return (
        <div className="blog-detail" onClick={handleClick}>
            <img src={blog.img[0]} alt={blog.title} className="img-fluid" />
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
        </div>
    );
}

function Blog() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);

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


    const blogs = [
        {
            id: 1,
            img: [talkshowbanhangImg],
            title: 'iCONNECTSPACE #5: E-COMMERCE BÁN HÀNG TRÊN SÀN HAY QUẢNG CÁO TRÊN MẠNG?',
            content: (
                <>
                    <p>Chiều ngày 25/05/2024, chương trình iCONNECTSPACE #5: E-commerce bán hàng trên sàn hay quảng cáo trên mạng đã diễn ra thành công tốt đẹp với sự chia sẻ từ Ths. Văn Đức Sơn Hà – Giảng viên E-commerce Trường Đại học Công nghệ thông tin, CEO/Founder Top Founder/Management Topnet và Ths. Văn Minh Đại – Giảng viên E-Commerce, Trưởng phòng Tuyển sinh & Marketing tại Trường Cao đẳng An ninh mạng iSPACE.</p>
                    <img src={hinhblog1Img} alt="Hình ảnh trong blog 1" className="img-fluid mb-3" />
                    <p>Tại sự kiện, hai diễn giả đã mang đến cho người tham dự những kiến thức tổng quan về ngành E-commerce, giúp các bạn hiểu hơn về các hình thức kinh doanh trên sàn thương mại điện tử, về digital marketing. Đồng thời giải đáp những thắc mắc của người tham gia về ngành này.</p>

                    <img src={hinhblog11Img} alt="Hình ảnh trong blog 1" className="img-fluid mb-3" />
                    <p>Mặc dù bán hàng trên sàn và digital marketing là hai hướng đi hoàn toàn khác nhau nhưng chúng lại bổ trợ cho nhau để doanh nghiệp ngày càng phát triển. Tại sự kiện, hai diễn giả cũng đã chia sẻ những bí quyết để chọn kênh marketing phù hợp cho doanh nghiệp vừa thành lập.

                        Ths. Văn Minh Đại đã chia sẻ: “Việc chọn kênh marketing nào cho doanh nghiệp sẽ phụ thuộc vào hành trình khách hàng của doanh nghiệp. Vì thế, bạn phải xác định được insight khách hàng, vẽ được hành trình của họ để dựa vào đó mà xác định kênh marketing phù hợp.”

                        Cũng tại sự kiện, Ths. Văn Đức Sơn Hà đã chia sẻ hành trình bán hàng trên sàn của mình. Anh đã chia sẻ những bí quyết chọn ngách kinh doanh, chọn sản phẩm kinh doanh phù hợp. Với anh, khi kinh doanh trên sàn thương mại điện tử thì chất lượng sản phẩm luôn là yếu tố hàng đầu để giữ chân khách hàng và kinh doanh bền vững.</p>

                    <p>Chiều ngày 25/05/2024, chương trình iCONNECTSPACE #5: E-commerce bán hàng trên sàn hay quảng cáo trên mạng đã diễn ra thành công tốt đẹp với sự chia sẻ từ Ths. Văn Đức Sơn Hà – Giảng viên E-commerce Trường Đại học Công nghệ thông tin, CEO/Founder Top Founder/Management Topnet và Ths. Văn Minh Đại – Giảng viên E-Commerce, Trưởng phòng Tuyển sinh & Marketing tại Trường Cao đẳng An ninh mạng iSPACE.</p>
                    <img src={hinhblog12Img} alt="Hình ảnh trong blog 1" className="img-fluid mb-3" />
                    <p>Sự kiện hân hạnh chào đón sự tham gia của quý thầy cô iSPACE:

                        Ths. Lê Hoàng Bình Nguyên – Phó trưởng khoa Công nghệ thông tin iSPACE
                        Thầy Nguyễn Thế Phương – Giảng viên ngành An ninh mạng tại iSPACE.
                        Thầy Trương Phạm Hoài Thương – Giảng viên ngành An ninh mạng tại iSPACE.
                        Cô Lê Kim Ngân – Giảng viên ngành Thiết kế đồ họa tại iSPACE
                        Cùng hơn 30 bạn sinh viên iSPACE đã đến, tham gia và trao đổi với diễn giả tại sự kiện đặc biệt này.
                        Sự thành công của chương trình chính là động lực để iSPACE tiếp tục tổ chức những chương trình chất lượng hơn nữa, mang đến cho sinh viên những kiến thức, kinh nghiệm về ngành nghề. </p>

                </>
            )
        },
        {
            id: 2,
            img: [TalkshowhocthietkeImg],
            title: 'iCONNECTSPACE #4: HỌC THIẾT KẾ, KHÔNG “Ế”...VIỆC?',
            content: (
                <>
                    <p>Chiều ngày 16/04/2024, iSPACE đã tổ chức thành công sự kiện iCONNECTSPACE #4: Học thiết kế không ế việc? với sự chia sẻ của anh Trần Nghĩa và cô Lê Kim Ngân.</p>
                    <img src={talkshowthietke11Img} alt="Hình ảnh trong blog 1" className="img-fluid mb-3" />
                    <p>Tại sự kiện, hai diễn giả đã mang đến cho người tham dự những kiến thức tổng quan về ngành E-commerce, giúp các bạn hiểu hơn về các hình thức kinh doanh trên sàn thương mại điện tử, về digital marketing. Đồng thời giải đáp những thắc mắc của người tham gia về ngành này.
                        <h2>1. Tổng quan về ngành Thiết kế đồ họa:</h2>
                        Với phần đầu tiên của chương trình, anh Trần Nghĩa đã mang đến cho các bạn sinh viên những thông tin cơ bản về ngành Thiết kế đồ họa. Từ đó, giúp các bạn định hình, đưa ra định hướng công việc mà các bạn có thể theo đuổi sau khi tốt ngành.

                        Cụ thể, sinh viên ngành Thiết kế đồ họa khi tốt nghiệp có thể theo đuổi các chuyên ngành sau:

                        Thiết kế quảng cáo
                        Thiết kế bao bì
                        Đồ họa 3D
                        Thiết kế UX
                        Thiết kế các ấn phẩm, tạp chí
                        Thiết kế nhận diện thương hiệu
                        Thiết kế Art Illustration
                    </p>

                    <img src={talkshowthietke12Img} alt="Hình ảnh trong blog 1" className="img-fluid mb-3" />
                    <p><h3>2. Doanh nghiệp thường yêu cầu gì ở chuyên viên Thiết kế đồ họa?</h3>
                        Với phần này, cô Lê Kim Ngân đã chia sẻ những kỹ năng, kiến thức cần có ở một chuyên viên thiết kế đồ họa. Bên cạnh đó, cô Ngân cũng hướng dẫn các bạn sinh viên cách để tạo một Portfolio ấn tượng và thu hút nhà tuyển dụng. Một portfolio nên thể hiện được những sản phẩm, kỹ năng mà các bạn đang có. Với sinh viên vừa tốt nghiệp chưa có nhiều kinh nghiệm, các bạn có thể đưa các sản phẩm, đồ án trong quá trình học của mình vào Portfolio. Đây sẽ là cơ sở để doanh nghiệp đánh giá kỹ năng của các bạn.
                        Về portfolio, anh Nghĩa cũng chia sẻ thêm, portfolio của các bạn nên trình bày một cách phù hợp với doanh nghiệp bạn ứng tuyển. Cụ thể là các bạn không thể mang portfolio có nhiều ấn phẩm về tạp chí để ứng tuyển vào vị trí Designer về thiết kế quảng cáo. Ứng tuyển vào vị trí nào thì Portfolio phải thể hiện được kỹ năng, kinh nghiệm làm việc trong lĩnh vực đó.</p>

                    <img src={talkshowthietke13Img} alt="Hình ảnh trong blog 1" className="img-fluid mb-3" />
                    <p><h4>3. AI có thay thế Graphic Designer trong tương lai hay không?</h4>
                        Ngày nay, AI ra đời và người làm marketing có thể tạo ra một ấn phẩm chỉ bằng vài dòng lệnh. Với chủ đề này, anh Nghĩa đã chia sẽ rằng người làm Graphic Designer có thể hoàn toàn bị thay thế bởi người làm marketing biết sử dụng AI hoặc có khả năng thiết kế. Tuy nhiên, điều này chỉ xảy ra ở doanh nghiệp nhỏ và vừa vì các doanh nghiệp này cần tối ưu nguồn lực để tiết kiệm chi phí. Với các doanh nghiệp lớn, người làm Graphic Designer không thể thay thế vì doanh nghiệp lớn sẽ cần người làm chuyên sâu về chuyên môn.
                    </p>

                    <img src={talkshowthietke14Img} alt="Hình ảnh trong blog 1" className="img-fluid mb-3" />
                    <p><h5>Tổng kết:</h5>
                        Chương trình iCONNECTSPACE #4 với chủ đề: “Học thiết kế không ế việc?” đã diễn ra thành công tốt đẹp trong không khí ấm áp, vui tươi. Với chủ đề này, các bạn sinh viên tham dự đã có cho mình những kiến thức, kinh nghiệm và cái nhìn tổng quan về ngành. iSPACE tin rằng đây sẽ là hành trang giúp cho các bạn phát triển và theo đuổi ngành nghề trong tương lai.
                    </p>
                </>
            )
        },
        {
            id: 3,
            img: [phongvancunghtvImg],
            title: 'ĐÀI HTV PHỎNG VẤN CHUYÊN GIA iSPACE VỚI CHUYÊN ĐỀ CẢNH BÁO CHIÊU TRÒ GIAN LẬN QUA MAIL',
            content: (
                <>
                    <img src={phongvanhtv12Img} alt="Hình ảnh trong blog 1" className="img-fluid mb-3" />
                    <p>Sáng ngày 22/05/2024, đài HTV đã có buổi ghi hình tại iSPACE với sự chia sẻ của Ths. Lê Hoàng Bình Nguyên – Phó Trưởng khoa Công nghệ thông tin về chuyên đề “Cảnh báo chiêu trò gian lận qua mail.”
                        <h6>Giảng viên iSPACE là khách mời chuyên gia tại buổi ghi hình của đài HTV</h6>
                        Gian lận qua mail là một hình thức lừa đảo khá phổ biến và ngày càng tinh vi. Những chiêu trò này được thiết kế để đánh cắp thông tin cá nhân, tài sản của bạn. Hiện nay, có rất nhiều người bị đánh cắp thông tin quan trọng, gây thiệt hại rất lớn về tài sản và tinh thần của họ. Vì thế, việc tìm hiểu về chiêu trò lừa đảo và nắm bắt các thông tin quan trọng để phòng ngừa là vô cùng cần thiết.

                        Với kiến thức chuyên sâu cùng kinh nghiệm thực tế dày dặn, Ths. Lê Hoàng Bình Nguyên đã chia sẻ những cách thức lừa đảo qua mail phổ biến hiện nay, cách mà đối tượng lừa đảo thực hiện và từ đó đưa ra những biện pháp phòng chống.
                    </p>

                    <img src={phongvanhtv13Img} alt="Hình ảnh trong blog 1" className="img-fluid mb-3" />
                    <p>iSPACE tin rằng với sự chia sẻ của thầy Nguyên tại buổi ghi hình này, các bạn sẽ có được những thông tin cần thiết để phòng tránh những thiệt hại không đáng có khi gặp phải chiêu trò gian lận qua mail.

                        Dự kiến chuyên đề này sẽ được phát sóng tại chương trình tiêu điểm của đài HTV trong thời gian sắp tới.


                    </p>
                </>
            )
        }
    ];

    const handleBlogClick = (blog) => {
        setSelectedBlog(blog);
    };

    return (
        <div className='blog-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>Tin Tức</h1>
                </div>
            </header>

            <div className="container">
                <div className="row">
                    {blogs.map((blog) => (
                        <div className="col-12 col-md-4 mb-4" key={blog.id}>
                            <BlogDetail blog={blog} onClick={handleBlogClick} />
                        </div>
                    ))}
                </div>
            </div>

            {selectedBlog && (
                <div className="blog-content-wrapper">
                    <div className="container">
                        <img src={selectedBlog.img[0]} alt={selectedBlog.title} className="img-fluid" />
                        <h2>{selectedBlog.title}</h2>
                        <p>{selectedBlog.description}</p>
                        <div className="blog-content">
                            {selectedBlog.content}
                        </div>
                    </div>
                </div>
            )}

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

export default Blog;
