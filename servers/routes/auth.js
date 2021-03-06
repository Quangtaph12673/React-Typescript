import express from "express";
import {
  registerControllers,
  verifyEmail,
  verifyEmailCheck,
  signin,
  signout,
  checkLoginWithGoogleAccount,
  loginWithGoogleAccount,
  checkLoginWithGoogleAccountEmail,
} from "../controllers/auth";
import {
  userID,
  updateUser
} from "../controllers/userControllers"
// import { authToken } from "../middleware/authToken";
const router = express.Router();

// đăng ký
router.post("/register", registerControllers);

// check xác thực email
router.get("/verify-email", verifyEmail);
// đăng nhập check email kích hoạt
router.post("/login", verifyEmailCheck, signin);
router.post(
  "/login-google",
  checkLoginWithGoogleAccount,
  checkLoginWithGoogleAccountEmail,
  loginWithGoogleAccount
);
//đăng xuất email
router.get("/signout", signout);
router.put("/update-token/:id", updateUser)

router.param("id", userID)
module.exports = router;