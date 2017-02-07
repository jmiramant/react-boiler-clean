import UserType from '../types/UserType';

const user = {
  type: UserType,
  resolve({ request }) {
    return request.user && {
      id: request.user.id,
      firstName: request.user.firstName,
      lastName: request.user.lastName,
      email: request.user.email,
    };
  },
};

export default user;
