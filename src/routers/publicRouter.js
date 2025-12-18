import { Home, Login, SellerChannel,  BecomeASeller, Support, Register} from "~/pages";
const publicRouter = [
    {path:"/", element: Home},
    // {path:"/home", element: Home},
    {path:"/sellerChannel", element: SellerChannel},
    {path:"/becomeASeller", element: BecomeASeller},
    {path:"/support", element: Support},
    {path:"/register", element: Register},
    {path:"/login", element: Login},
] 
export default publicRouter;
