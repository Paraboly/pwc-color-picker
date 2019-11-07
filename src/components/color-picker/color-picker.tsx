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

  @Prop() colors: any = ["red", "#232345", "#458596"];

  componentDidLoad() {
    this.handleJSXColors();
  }

  handleClick = color => {
    this.onChange.emit(color);
  };

  handleJSXColors = () => {
    this.colors =
      typeof this.colors === "string" ? JSON.parse(this.colors) : this.colors;
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
