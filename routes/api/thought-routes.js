const router = require('express').Router();

const {
    getAllThoughts,
    addThought
} = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

// Set up GET one, PUT, and DELETE at /api/users/:id
// router
//     .route('/:id')
//     .get(getUserById)
//     .put(updateUser)
//     .delete(deleteUser);

// // Setup GET one && PUT, or DELETE friend at /api/users/:userId/friends/:friendId
// router
//     .route('/:userId/friends/:friendId')
//     .post(addFriend)
//     .delete(deleteFriend);

module.exports = router;