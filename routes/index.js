const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentcontroller');

// Redirect root → /assignments
router.get('/', (req, res) => res.redirect('/assignments'));

// All CRUD routes
router.get('/assignments', assignmentController.getAll);
router.get('/assignments/add', assignmentController.addForm);
router.post('/assignments/add', assignmentController.add);
router.get('/assignments/edit/:id', assignmentController.editForm);
router.post('/assignments/edit/:id', assignmentController.update);
router.get('/assignments/delete/:id', assignmentController.deleteConfirm);
router.post('/assignments/delete/:id', assignmentController.delete);

module.exports = router;
