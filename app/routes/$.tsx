// import { Admin, Resource, ShowGuesser } from "react-admin";
import { dataProvider } from "../supabase/dataProvider";
// import { authProvider } from "../supabase/authProvider";

import { Admin, ListGuesser, Resource } from "react-admin";
import { Dashboard } from "~/components/Dashboard";

// import { PostCreate, PostEdit, PostList } from "../components/posts";

// import { UserList } from "../components/Users";

// import PostIcon from "@mui/icons-material/Book";

import UserIcon from "@mui/icons-material/Group";

// import { Dashboard } from "../components/Dashboard";
// import { LoginPage } from "ra-supabase";
// import { useLoaderData } from "@remix-run/react";
// import { json } from "@remix-run/node";

// export const loader = (params: any) => {
// 	console.log(params);
// 	return null;
// };

// export const App = () => {
// 	const rest = useLoaderData();

// 	return (
// 		<Admin
// 		// dataProvider={dataProvider}
// 		// authProvider={authProvider}
// 		// dashboard={Dashboard}
// 		// loginPage={LoginPage}
// 		// basename="/"
// 		>
// 			{/* <Resource name="comments" list={UserList} recordRepresentation="name" show={ShowGuesser} icon={UserIcon} /> */}
// 			<Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
// 		</Admin>
// 	);
// };

export default function AdminApp() {
	return (
		<Admin dashboard={Dashboard} dataProvider={dataProvider}>
			<Resource name="posts" icon={UserIcon} list={ListGuesser} />
			<Resource name="comments" icon={UserIcon} list={ListGuesser} />
		</Admin>
	);
}
