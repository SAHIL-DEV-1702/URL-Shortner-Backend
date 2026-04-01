import user from '../models/user.model.js'

export const findByEmail = async (email) => {

   return await user.findOne({ email });

}

export const findByEmailAndPassword = async (email) => {

   return await user.findOne({ email }).select('+password');

}

export const findById = async (id) => {

   return await user.findById(id);

}

export const createUser = async (data) => {

   const newUser = await user.create(data)
   return newUser

}
