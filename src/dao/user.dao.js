import user from '../models/user.model.js'

export const findByEmail = async (email) => {

    await user.findOne(email);

}


export const findById = async (email) => {

    await user.findOne(id);

}

export const createUser = async (name, email, password) => {

    const newUser = await user.create({ name, email, password })
    await newUser.save()
    return newUser

}