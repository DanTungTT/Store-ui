import { Home, Login, FriendChannel,  BecomeASeller, Support} from "~/pages";
const publicRouter = [
    {path:"/", element: Home},
    // {path:"/home", element: Home},
    {path:"/support", element: Support},
    {path:"/friendChannel", element: FriendChannel},
    {path:"/becomeASeller", element: BecomeASeller},
    {path:"/login", element: Login},
] 
export default publicRouter;
