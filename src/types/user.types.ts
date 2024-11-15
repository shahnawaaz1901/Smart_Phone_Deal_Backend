export type User = {
  name: string;
  email: string;
  phone: string;
  password: string;
  gender: ["M", "F", "O"];
};

export type UserParamsOptional = {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  gender?: string;
};
