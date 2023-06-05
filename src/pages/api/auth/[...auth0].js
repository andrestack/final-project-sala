import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export default handleAuth();
//{
// async callback(req, res) {
//   try {
//     // await handleCallback(req, res, { redirectTo: "/home" });
//     await handleLogin(req, res, { redirectTo: "/home" });
//     await handleLogout(req, res, { redirectTo: "/" });
//   } catch (error) {
//     res.status(error.status || 500).end(error.message);
//   }
// },
//}
