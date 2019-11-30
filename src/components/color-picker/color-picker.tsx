import { Component, Prop, h, State, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "color-picker",
  styleUrl: "color-picker.css",
  shadow: false
})
export class ColorPicker {
  @Event({
    eventName: "colorPickedEvent"
  })
  onChange: EventEmitter;

  @Prop() colors: any = ["red", "#232345", "#458596"];

  @State() selectedOne: number = -1;

  @State() hovered: boolean = false;

  @Prop() inputValue: string;

  @Prop({ mutable: true, reflect: true }) activeColor: string;

  componentDidLoad() {
    this.handleJSXColors();
  }

  handleClick = (color, index) => {
    this.onChange.emit(color);
    this.selectedOne = index;
  };

  fetch = ev => {
    this.selectedOne = -2;
    this.inputValue = ev.target.value;
    this.onChange.emit(this.inputValue);
    this.activeColor = this.inputValue;
  };

  handleJSXColors = () => {
    this.colors =
      typeof this.colors === "string" ? JSON.parse(this.colors) : this.colors;
  };

  render() {
    const colors =
      typeof this.colors === "string" ? JSON.parse(this.colors) : this.colors;
    return (
      <span>
        {colors.map((color, index) => (
          <button
            name="button"
            class={
              this.selectedOne === index ? "active colorCell" : "colorCell"
            }
            style={{
              backgroundColor: color
            }}
            onClick={() => this.handleClick(color, index)}
          />
        ))}
        <input
          type="color"
          class={this.selectedOne === -2 ? "paletteActive colors" : "colors"}
          value={this.activeColor}
          onChange={this.fetch.bind(this)}
        />
        <i class="icon">🖌</i>
      </span>
    );
  }
}
