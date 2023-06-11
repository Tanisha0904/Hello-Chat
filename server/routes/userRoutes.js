const router = require("express").Router();
const {
  registerUser,
  loginUser,
  allUsers,
} = require("../controllers/userControllers");
const auth = require("../middleware/authMiddleware");

router.route("/users/").post(registerUser).get(auth, allUsers);
router.route("/users/login").post(loginUser);
// module.exports = router;

const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("../controllers/chatControllers");

router.route("/chats/").post(auth, accessChat).get(auth, fetchChats);

router.route("/chats/group").post(auth, createGroupChat);

router.route("/chats/grouprename").put(auth, renameGroup);

router.route("/chats/groupremove").put(auth, removeFromGroup);

router.route("/chats/groupadd").put(auth, addToGroup);

// module.exports = router;

const {
  sendMessage,
  fetchMessage,
} = require("../controllers/messageControllers");

// Route to send the message to the recipient
router.route("/message/").post(auth, sendMessage);
// Route to retrieve all the message
router.route("/message/:chatId").get(auth, fetchMessage);

// module.exports = router;

const {
  addNewNotification,
  deleteNotification,
  getNotification,
} = require("../controllers/notificationController");

router
  .route("/notification/")
  .post(auth, addNewNotification)
  .get(auth, getNotification);
router.route("/notification/:notificationId").delete(auth, deleteNotification);

module.exports = router;
