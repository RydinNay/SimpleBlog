import AuthForm from "../pages/AuthForm";
import Posts from "../pages/Posts";
import CreatePost from "../pages/CreatePost";
import EditPost from "../pages/EditPost";
import { POSTS_ROUTE, CREATE_POST_ROUTE, EDIT_POST_ROUTE, AUTH_ROUTE } from "../utils/consts";

export const publicRoutes = [
    {
        path: POSTS_ROUTE,
        Component: <Posts/>
    },
    {
        path: AUTH_ROUTE,
        Component: <AuthForm/>
    }
]

export const userRoutes = [
    {
        path: CREATE_POST_ROUTE,
        Component: <CreatePost/>
    },
    {
        path: EDIT_POST_ROUTE,
        Component: <EditPost/>
    }
]

