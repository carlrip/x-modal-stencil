import { Component, Event, EventEmitter, Prop } from "@stencil/core";

@Component({
  tag: "x-modal",
  styleUrl: "x-modal.css",
  shadow: true
})
export class XModal {
  @Prop({
    mutable: true,
    reflectToAttr: true
  })
  public visible: boolean;

  @Prop() public title: string;

  @Event() private ok: EventEmitter;
  @Event() private cancel: EventEmitter;

  private handleCancelClick = () => {
    this.visible = false;
    this.cancel.emit();
  };

  private handleOkClick = () => {
    this.visible = false;
    this.ok.emit();
  };

  public render(): JSX.Element {
    const { visible, title, handleCancelClick, handleOkClick } = this;
    return (
      <div class={visible ? "wrapper visible" : "wrapper"}>
        <div class="modal">
          <span class="title">{title}</span>
          <div class="content">
            <slot />
          </div>
          <div class="button-container">
            <button class="cancel" onClick={handleCancelClick}>
              Cancel
            </button>
            <button class="ok" onClick={handleOkClick}>
              Okay
            </button>
          </div>
        </div>
      </div>
    );
  }
}
