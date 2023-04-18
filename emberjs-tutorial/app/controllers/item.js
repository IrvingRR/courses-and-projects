import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ItemController extends Controller {
  // Trakects
  @tracked color = this.model.colors[0].color;
  @tracked isZoomed = false;

  // Getters
  get productImage() {
    return this.model.colors.find(({ color }) => color === this.color).image;
  }

  // Actions
  @action
  onChangeColor(newColor) {
    this.color = newColor;
  }

  @action
  toggleZoom() {
    this.isZoomed = !this.isZoomed;
  }
}
