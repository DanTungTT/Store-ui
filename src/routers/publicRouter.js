import { Home, Login, SellerChannel,  BecomeASeller, Support} from "~/pages";
const publicRouter = [
    {path:"/", element: Home},
    // {path:"/home", element: Home},
    {path:"/support", element: Support},
    {path:"/sellerChannel", element: SellerChannel},
    {path:"/becomeASeller", element: BecomeASeller},
    {path:"/login", element: Login},
] 
export default publicRouter;
