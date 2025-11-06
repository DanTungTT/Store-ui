import { Home, Login, FriendChannel } from "~/pages";
const publicRouter = [
    {path:"/", element: Home},
    // {path:"/home", element: Home},
    {path:"/friendChannel", element: FriendChannel},
    {path:"/login", element: Login},
] 
export default publicRouter;
