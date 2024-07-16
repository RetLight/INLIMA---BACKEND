const usuarioDAO = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
    findOneByEmail: jest.fn(),
    updatePerfil: jest.fn(),
    resetPassword: jest.fn(),
    // Otros métodos mock si es necesario
  };
  
export default usuarioDAO;