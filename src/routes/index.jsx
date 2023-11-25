import { createBrowserRouter, redirect } from "react-router-dom";
import ProfilePage from "../views/ProfilePage";
import ProjectPage from "../views/ProjectPage";

export const router = createBrowserRouter([
    {
        path: "/",
        loader: () => {
            return redirect("/profile")
        }
    },
    {
        path: "profile",
        element: <ProfilePage />
    },
    {
        path: "projects",
        element: <ProjectPage />
    }
])