// src/utils/mockApi.js
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Simulate a database of users
let users = [];

export const registerUser = async (email, password) => {
  console.log('Mock API - Registration attempt:', { email });
  
  await delay(1000); // Simulate network delay
  
  // Basic validation
  if (!email || !password) {
    throw new Error('Email and password are required');
  }
  
  // Check if email is already registered
  if (users.find(user => user.email === email)) {
    throw new Error('Email already registered');
  }
  
  // Add user to mock database
  const newUser = {
    id: users.length + 1,
    email,
    password, // In a real app, this would be hashed
    createdAt: new Date()
  };
  
  users.push(newUser);
  console.log('Mock API - User registered successfully:', { userId: newUser.id });
  
  return {
    success: true,
    user: {
      id: newUser.id,
      email: newUser.email,
      createdAt: newUser.createdAt
    }
  };
};