import bcrypt from 'bcryptjs';

// Mock user database - in a real app, this would be a database
const users = [
  {
    id: 1,
    email: 'admin@hrms.com',
    password: bcrypt.hashSync('admin123', 10),
    role: 'HR'
  },
  {
    id: 2,
    email: 'employee@hrms.com',
    password: bcrypt.hashSync('employee123', 10),
    role: 'EMPLOYEE'
  }
];

export const authenticateUser = async (email, password) => {
  const user = users.find(u => u.email === email);
  
  if (!user) {
    throw new Error('User not found');
  }

  const isValid = await bcrypt.compare(password, user.password);
  
  if (!isValid) {
    throw new Error('Invalid password');
  }

  return {
    id: user.id,
    email: user.email,
    role: user.role
  };
};

export const isAuthenticated = () => {
  const user = localStorage.getItem('user');
  return !!user;
};

export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const logout = () => {
  localStorage.removeItem('user');
}; 