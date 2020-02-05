// import React from "react";
// import { useAuth0 } from "../react-auth0-spa";
// import { NavLink } from "react-router-dom";

// const dashboardAdminButton = () => {
//   const { user } = useAuth0();
//   console.log(user);

// return(
//   {!isAuthenticated && (
//     <Button onClick={() => loginWithRedirect({})}>
//       Log in / Sign Up
//     </Button>
//   )}

//   {isAuthenticated && (
//     <Button onClick={() => logout()}>Log out</Button>
//   )}
//   if (user.sub === "auth0|5e390759d8fd360d9f4df80d") {
//     return (
//       <>
//         <NavLink className="navitem m-3 d-flex" to="/AdminDashboardPage">
//           Home
//         </NavLink>
//       </>
//     );
//   }
//   return (
//     <>
//       <NavLink className="navitem m-3 d-flex" to="/DashboardPage">
//         Home
//       </NavLink>
//     </>
//   //   );
// )
// };

//   return (
//     <Fragment>

//         {if user.sub ==="auth0|5e390759d8fd360d9f4df80d"}
//       <h2>{user.nickname}</h2>
//       <p>{user.email}</p>
//       <code>{JSON.stringify(user, null, 2)}</code>
//     </Fragment>
//   );
// };

// export default dashboardAdminButton;
