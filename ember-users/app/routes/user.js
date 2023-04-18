import Route from '@ember/routing/route';
import { users } from '../data/users';

export default class UserRoute extends Route {
  model(params) {
    const { id } = params;
    const user = users.find((user) => user.id === parseInt(id));
    return user;
  }
}
