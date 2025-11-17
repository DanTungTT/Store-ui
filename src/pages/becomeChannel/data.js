import {
    // banner
    giftBoxIcon,
    homeIcon,
    shakeHandsIcon,
    // convice
    box,
    card,
    free,
    home,
    speaker,
    zeroPersent,
    // benefit
    Cross,
    ShopeeCard,
    ShopeeMall,
    academyShopee, 
    facebook,
    ShopeeRounded,
    youtube,
} from "~/assets/img/becomeASeller";


const liBanerItems = [
    {
        icon: homeIcon,
        title: "Nền tảng thương mại điện tử hàng đầu Đông Nam Á và Đài Loan",
    },
    {
        icon: giftBoxIcon,
        title: "Phát triển để trở thành thương hiệu toàn cầu",
    },
    {
        icon: shakeHandsIcon,
        title: "Dẫn đầu lượng người dùng trên ứng dụng mua sắm tại Việt Nam",
    },
];

const conviceItems = [
    {
        img: zeroPersent,
        title: "Miễn phí đăng ký",
        text: "Mở Shop và bán hàng dễ dàng hơn cùng Shopee!",
    },
    {
        img: speaker,
        title: "Công cụ marketing đa dạng",
        text: "Thu hút người mua và tăng trưởng đơn hàng với tính năng Flash Sale, Livestream, Mua Kèm Deal Sốc,...",
    },
    {
        img: free,
        title: "Vận chuyển dễ dàng",
        text: "Linh hoạt lựa chọn đơn vị vận chuyển và theo dõi chi tiết hành trình đơn hàng.",
    },
    {
        img: box,
        title: "Siêu sale cùng Shopee",
        text: "Bứt phá doanh số với các chiến dịch lớn: 9.9 Ngày Siêu Mua Sắm, 11.11 Siêu Sale,...",
    },
    {
        img: card,
        title: "Hỗ trợ bán hàng hiệu quả",
        text: "Đa dạng tính năng giúp quản lý, tương tác với khách hàng và theo dõi hiệu quả hoạt động của Shop.",
    },
    {
        img: home,
        title: "Kết nối cộng đồng Người bán",
        text: "Chia sẻ kinh nghiệm bán hàng thực tế thông qua các hội thảo, khóa học trực tuyến và cổng thông tin hỗ trợ.",
    },
];

const stepItems = [
    {
        step:"01",
        title:"Đăng ký tài khoản Shopee",
        text:"Tại trang Shopee, nhấn Đăng Ký để tạo tài khoản. Sau đó, nhập Số điện thoại và Email tại trang Tài Khoản Của Tôi để xác minh tài khoản."
    },
    {
        step:"02",
        title:"Cài đặt thông tin cửa hàng",
        text:"Đi đến Kênh Người Bán, đặt tên Shop và thiết lập địa chỉ lấy hàng của bạn."
    },
    {
        step:"03",
        title:"Cài đặt vận chuyển",
        text:"Thiết lập phương thức vận chuyển cho Shop và nhấn Hoàn tất."
    },
    {
        step:"04",
        title:"Đăng bán sản phẩm",
        text:"Chọn Thêm Sản Phẩm, sau đó điền chi tiết thông tin và nhấn Lưu & Hiển thị để hoàn tất."
    }
]

const benefitItems = [
    {
        img: ShopeeMall,
        type: "ShopeeMall",
        name: "ShopeeMall",
        description: "Nền tảng bán lẻ cao cấp dành cho chủ sở hữu thương hiệu, nhà phân phối chính hãng hoặc nhà nhập khẩu chính thức.",
        list: [
            "Tận hưởng các đặc quyền riêng: đảm bảo hàng chính hãng, trải nghiệm giao nhận hàng hóa và chính sách hoàn trả vượt trội.",
            "Đẩy mạnh doanh số bằng các chiến dịch quảng bá và khuyến mãi độc quyền.",
            "Chỉ thanh toán Phí cố định khi bán được hàng."
        ]
    },
    {
        img: ShopeeCard,
        type: "ShopeeCard",
        name: "Nhà bán hàng trong nước",
        description:"Dành cho tất cả các cá nhân, doanh nghiệp, hộ kinh doanh trong nước",
        list: [
            "Chuyên viên hỗ trợ 1-1 cho Người bán mới",
            "Được sử dụng các công cụ marketing chuyên biệt",
            "Linh hoạt lựa chọn đơn vị vận chuyển",
            "Dễ dàng quản lý, tương tác với khách hàng và theo dõi hiệu quả hoạt động của Shop"

        ]
    },
    {
        img: Cross,
        type: "Cross",
        name: "Nhà bán hàng nước ngoài",
        description:"Đối tượng: Nhà bán hàng ở nước ngoài đang muốn phát triển tại thị trường Việt Nam",
        list:[
            "Cơ hội tham gia các chiến dịch quảng cáo lớn cho hàng quốc tế từ Shopee",
            "Chương trình thúc đẩy bán hàng trong những chiến dịch lớn", 
        ]
    }
]

const follows = [
    {
        img: academyShopee,
        title: "Học viện Shopee - Shopee Uni",
        text: "Học viện Shopee Uni cung cấp các kiến thức và chương trình đào tạo hữu ích dành cho Người bán"
    },
    {
        img: youtube,
        title: "Kênh Youtube Shopee Uni Việt Nam",
        text: "Kênh tương tác Học viện Shopee Uni luôn cập nhật nhanh chóng những chính sách, tính năng mới, lịch học online và các sự kiện nổi bật từ Shopee."
    },
    {
        img: ShopeeRounded,
        title: "Fanpage Bán Hàng Với Shopee",
        text: "Kênh thông tin chính thức dành cho Người bán trên Shopee"
    },
    {
        img: facebook,
        title: "Nhóm Lập Nghiệp Với Shopee",
        text: "Cộng đồng kết nối Người bán và chia sẻ bí kíp bán hàng thực tế từ những Người bán có kinh nghiệm."
    }
]
export { liBanerItems, conviceItems, stepItems, benefitItems, follows}