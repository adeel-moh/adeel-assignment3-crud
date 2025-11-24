const Assignment = require('../models/assignment');

exports.getAll = async (req, res) => {
  const assignments = await Assignment.find();
  res.render('assignments', { title: 'Assignments', assignments });
};

exports.addForm = (req, res) => {
  res.render('add', { title: 'Add Assignment' });
};

exports.add = async (req, res) => {
  const { title, description, dueDate } = req.body;
  await Assignment.create({ title, description, dueDate });
  res.redirect('/assignments');
};

exports.editForm = async (req, res) => {
  const assignment = await Assignment.findById(req.params.id);
  res.render('edit', { title: 'Edit Assignment', assignment });
};

exports.update = async (req, res) => {
  const { title, description, dueDate } = req.body;
  await Assignment.findByIdAndUpdate(req.params.id, { title, description, dueDate });
  res.redirect('/assignments');
};

exports.deleteConfirm = async (req, res) => {
  const assignment = await Assignment.findById(req.params.id);
  res.render('delete', { title: 'Delete Assignment', assignment });
};

exports.delete = async (req, res) => {
  await Assignment.findByIdAndDelete(req.params.id);
  res.redirect('/assignments');
};
