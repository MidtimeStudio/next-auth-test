'use server'
// actions/register.ts
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const saltRounds = 10;

export const register = async (userData: any) => {
  try {
    const { email, password } = userData;

    // Check if the email already exists in the database
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error('Email is already in use');
    }

    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Save the user to the database using Prisma
    const user = await prisma.user.create({
      data: {
        ...userData,
        password: hashedPassword,
      },
    });

    console.log('User registered:', user);
  } catch (error: any) {
    //console.error('Error registering user:', error.message);
    throw error; // Rethrow the error for handling at a higher level
  } finally {
    await prisma.$disconnect(); // Close the Prisma client connection
  }
};
