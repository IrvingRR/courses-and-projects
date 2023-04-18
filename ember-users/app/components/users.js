import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UsersComponent extends Component {
  @tracked modalActivated = false;
  @tracked modalData = {};

  @action
  openModal(user) {
    this.modalActivated = true;
    this.modalData = user;
  }

  @action
  closeModal() {
    this.modalActivated = false;
  }
}
