import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./assets/css/Root.module.css";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/Hooks/ScrollToTop";
import { Chat } from "./pages/Chat/Chat";
import Explore from "./pages/Explore/Explore";
import Congratulations from "./pages/Get Started/Common Screen/Congratulations/Congratulations";
import GetStarted1 from "./pages/Get Started/Common Screen/Get Started/GetStarted1";
import Persona from "./pages/Get Started/Personal/Persona";
import ProfessionalPersona from "./pages/Get Started/Professional/ProfessionalPersona";
import Home from "./pages/Home/Home";
import AudienceInsights from "./pages/Insights/AudienceInsights";
import BusinessInsights from "./pages/Insights/BusinessInsights";
import PersonalInsights from "./pages/Insights/PersonalInsights";
import ProfileVisit from "./pages/Insights/ProfileVisit";
import ChangePassword from "./pages/Loading/Change Password/ChangePassword";
import ForgetPassword from "./pages/Loading/Forget Password/ForgetPassword";
import LoadingScreen from "./pages/Loading/Loading Screen/LoadingScreen";
import SignIn from "./pages/Loading/Sign In/SignIn";
import SignUp from "./pages/Loading/Sign Up/SignUp";
import Verification from "./pages/Loading/Verification/Verification";
import EditPost from "./pages/Post/EditPost";
import PostIndex from "./pages/Post/PostIndex";
import Security from "./pages/Security/Security";
import BlockedUser from "./pages/Setting/BlockedUser";
import FollowList from "./pages/Setting/FollowList";
import Privacy from "./pages/Setting/Privacy";
import Setting from "./pages/Setting/Setting";

const Root = () => {
	return (
		<div className={styles.App}>
			<div className={styles.MainContainer}>
				<ScrollToTop />
				<Header />
				<Outlet />
			</div>
		</div>
	);
};

const router = createBrowserRouter([
	{ path: "/", element: <LoadingScreen /> },
	{ path: "/signup", element: <SignUp /> },
	{ path: "/signin", element: <SignIn /> },
	{ path: "/forget-password", element: <ForgetPassword /> },
	{ path: "/change-password", element: <ChangePassword /> },
	{ path: "/verification-code", element: <Verification /> },
	{ path: "/get-started", element: <GetStarted1 /> },
	{ path: "/get-started/personal", element: <Persona /> },
	{ path: "/get-started/professional", element: <ProfessionalPersona /> },
	{ path: "/get-started/congratulation", element: <Congratulations /> },
	{
		path: "/",
		element: <Root />,
		children: [
			{ path: "Home", element: <Home /> },
			{ path: "Explore", element: <Explore /> },
			{ path: "Post", element: <PostIndex /> },
			{ path: "EditPost/:id", element: <EditPost /> },
			{ path: "PersonalInsights", element: <PersonalInsights /> },
			{ path: "BusinessInsights", element: <BusinessInsights /> },
			{ path: "AudienceInsights", element: <AudienceInsights /> },
			{ path: "ProfileVisit", element: <ProfileVisit /> },
			{ path: "Setting", element: <Setting /> },
			{ path: "Security", element: <Security /> },
			{ path: "Privacy", element: <Privacy /> },
			{ path: "BlockedUser", element: <BlockedUser /> },
			{ path: "FollowList", element: <FollowList /> },
			{ path: "Chat", element: <Chat /> },
		],
	},
]);

function App() {
	return (
		<>
			<ToastContainer
				position="top-center"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover={false}
				theme="light"
			/>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
