import StudentLogin from "../../pages/student/StudentLogin";
import DriverLogin from "../../pages/driver/DriverLogin";
import StudentSignUp from "../../pages/student/StudentSignUp";
import StudentDashboard from "../../pages/student/StudentDashboard";
import DriverDashboard from "../../pages/driver/DriverDashboard";
import RideStatus from "../../pages/student/RideStatus";
import Home from "../../pages/Home";
import LayoutIndex from "../../layouts/LayoutIndex";
import { ALL_ROUTES } from "./AllRoutes";

const { PUBLIC } = ALL_ROUTES;

export const PUBLIC_ROUTES =[
    {
        element:LayoutIndex,
        path:PUBLIC?.HOME,
        children:[
            { element:Home,path:PUBLIC?.HOME },
            { element:StudentLogin,path:PUBLIC?.STUDENT_LOGIN },
            { element:DriverLogin,path:PUBLIC?.DRIVER_LOGIN },
            { element:StudentSignUp,path:PUBLIC?.STUDENT_SIGN_UP },
            { element:StudentDashboard,path:PUBLIC?.STUDENT_DASHBOARD },
            { element:DriverDashboard,path:PUBLIC?.DRIVER_DASHBOARD },
            { element:RideStatus,path:PUBLIC?.RIDE_STATUS },
        ]
    }
]