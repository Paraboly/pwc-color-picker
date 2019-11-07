import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "color-picker",
  styleUrl: "color-picker.css",
  shadow: true
})
export class ColorPicker {
  @Event({
    eventName: "colorPickedEvent"
  })
  onChange: EventEmitter;

  @Prop() colors: string[] = ["red", "#232345", "#458596"];

  handleClick = color => {
    this.onChange.emit(color);
  };

  render() {
    return this.colors.map(color => (
      <button
        class="colorCell"
        style={{ backgroundColor: color }}
        onClick={() => this.handleClick(color)}
      />
    ));
  }
}
