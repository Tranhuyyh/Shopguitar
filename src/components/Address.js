import {Link} from 'react-router-dom'

function Address() {
    return ( 
        <div className="address">
        <Link to="/"><a>HAICUTE.SHOP</a></Link>
        <br/>
        <h2>ĐỊA CHỈ</h2>
        <br/>
        <h2>HAICUTE.COM SHOP CHỈ CÓ DUY NHẤT MỘT ĐỊA CHỈ TẠI:</h2>
        <br/>
        <h2>Ngõ 100 Trần Đại Nghĩa - Phòng 101A15 - Phường Đồng Tâm - Quận Hai Bà Trưng - HN</h2>
        <br/>
        <p>Số điện thoại: 038.993.5957</p>
        <br/>
        <p>* Nếu bạn không ở khu vực Hà Nội thì bạn có thể gọi đặt hàng vào số Hotline: <span>038.993.5957</span> (Vận chuyển toàn Việt Nam)</p>
        <p>Bạn có thể yên tâm với dịch vụ đặt hàng từ xa - Hàng sẽ được kiểm tra kĩ và đóng hàng cẩn thận trước khi được giao cho khách hàng.</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8731565733647!2d105.84306185076188!3d20.997721094143834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac71eb1562a1%3A0x539a396ebdfcd902!2zTmcuIDEwMCBQLiBUcuG6p24gxJDhuqFpIE5naMSpYSwgxJDhu5NuZyBUw6JtLCBIYWkgQsOgIFRyxrBuZywgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1662891355635!5m2!1svi!2s"></iframe>
        <hr/>
        </div>
     );
}

export default Address;