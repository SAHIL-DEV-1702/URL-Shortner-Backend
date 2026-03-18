import user from '../models/user.model.js'

export const findByEmail = async (email) => {

   return  await user.findOne({email});

}


export const findById = async (email) => {

   return await user.findOne(id);

}

export const createUser = async (name, email, password) => {

    const newUser = await user.create({ name: name, email: email, password: password })
    return newUser

}