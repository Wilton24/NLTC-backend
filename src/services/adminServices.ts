import { all } from "axios";
import Admin from "../models/Admin";
import { IAdmin } from "../types";


export const isUnique = async (email: string): Promise<boolean>=>{
  const checkExistingEmail = await Admin.findOne({
    where:{
      email: email
    }
  });
  return checkExistingEmail ? true : false;

};

export async function checkUserAcc(email: string) {
  const allAdmins = await getAdmins();
  const user = allAdmins.find(user => user.email === email);
  return user;
}

export const getAdmins = async () => {
  const allAdmins = await Admin.findAll();
  return allAdmins;
};

