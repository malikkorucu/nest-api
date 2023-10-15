import * as bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { User } from 'src/user/user.entity';

export const compareSyncPass = (pass: string, hashPass: string) => {
  return bcrypt.compare(pass, hashPass, () => {});
};

export const generateToken = (user) => {
  const { SECRET_KEY } = process.env;

  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  const token = sign(payload, SECRET_KEY, {
    expiresIn: '24h',
  });

  return token;
};

export const sendTokenToClient = (user: User) => {
  const { EXPIRES_IN } = process.env;
  const token = generateToken(user);

  // tslint:disable-next-line: radix
  const expireDate = new Date(Date.now() + parseInt(EXPIRES_IN)).toUTCString();

  return {
    accessToken: token,
    expiresIn: EXPIRES_IN,
    expireDate: expireDate,
  };
};
