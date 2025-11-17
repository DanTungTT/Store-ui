import { Home, Login, FriendChannel,  BecomeASeller} from "~/pages";
const publicRouter = [
    {path:"/", element: Home},
    // {path:"/home", element: Home},
    {path:"/friendChannel", element: FriendChannel},
    {path:"/becomeASeller", element: BecomeASeller},
    {path:"/login", element: Login},
] 
export default publicRouter;
