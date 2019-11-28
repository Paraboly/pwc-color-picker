import {
  Component,
  Prop,
  h,
  State,
  Event,
  EventEmitter,
  Watch
} from "@stencil/core";

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

  componentDidLoad() {
    this.handleJSXColors();
  }

  handleClick = (color, index) => {
    this.onChange.emit(color);
    this.selectedOne = index;
  };

  fetch = ev => {
    this.selectedOne = -1;
    this.inputValue = ev.target.value;
    this.onChange.emit(this.inputValue);
  };
  /*
  toggleHover = () => {
    this.hovered = !this.hovered;
  };
  */
  /*
  paletteClick = () => {
    this.onChangePalette.emit();
  };
  */
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
          id="get"
          class="colors"
          value={this.inputValue}
          onChange={this.fetch.bind(this)}
        />
        <i class="icon">🖌</i>
      </span>
    );
  }
}
