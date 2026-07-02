
import userModel from "../models/user.model.js";
import shortUrlModel from "../models/shorturl.model.js";


export const findByEmail = async (email) => {

   return await userModel.findOne({ email });

}

export const findByEmailAndPassword = async (email) => {

   return await userModel.findOne({ email }).select('+password');

}

export const findById = async (id) => {

   return await userModel.findById(id);

}

export const createUser = async (data) => {

   console.log("Creating user with data:", data)

   const newUser = await userModel.create(data)

   console.log("New user created:", newUser)

   return newUser
}


export const getUserUrlsDao = async (id) => {

   return await shortUrlModel.find({ user: id })

}

export const deleteUserUrlById = async (userId, urlId) => {
   return await shortUrlModel.findOneAndDelete({ _id: urlId, user: userId })
}
