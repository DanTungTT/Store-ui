import { Home, Login, SellerChannel,  BecomeASeller, Support, Register, HangQuocTe, DealHot, KhachHangThanThiet, MaGiamGia, SeoStyle, SeoXuLi } from "~/pages";
const publicRouter = [
    {path:"/", element: Home},
    {path:"/sellerChannel", element: SellerChannel},
    {path:"/becomeASeller", element: BecomeASeller},
    {path:"/support", element: Support},
    {path:"/register", element: Register},
    {path:"/login", element: Login},
    // body
    {path:"/deal-hot", element: DealHot},
    {path:"/hang-quoc-te", element: HangQuocTe},
    {path:"/khach-hang-than-thiet", element: KhachHangThanThiet},
    {path:"/ma-giam-gia", element: MaGiamGia},
    {path:"/seo-style", element: SeoStyle},
    {path:"/seo-xu-li", element: SeoXuLi},
] 
export default publicRouter;
