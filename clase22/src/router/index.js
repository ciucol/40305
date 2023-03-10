const authControler = require('../auth/controller.auth');
const adminController = require('../admin/controller.admin');

const router = app => {
  app.use('/auth', authControler);
  app.use('/admin', adminController);
};

module.exports = router;
