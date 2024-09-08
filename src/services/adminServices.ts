import Admin from "../models/Admin";

export const isUnique = async (email: string): Promise<boolean>=>{
  const checkExistingEmail = await Admin.findOne({
    where:{
      email: email
    }
  });
  return checkExistingEmail ? true : false;
};

export async function checkUserAcc(email: string) {   // Check if email exists, returns it if it does. returns undefined if it doesn't
  const allAdmins = await getAdmins();
  const user = allAdmins.find(user => user.email === email);
  return user;
}

export const getAdmins = async () => {
  const allAdmins = await Admin.findAll();
  return allAdmins;
};

export const getAdminSrvcs = async (id: number) : Promise<any> => {
  const admin : object | null = await Admin.findOne({
      where: {
        id
      }
    }
  );
  return admin;
}