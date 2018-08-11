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

  @Prop()
  public title: string;

  @Event()
  private ok: EventEmitter;
  @Event()
  private cancel: EventEmitter;

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
      <div class={visible ? "x-modal-wrapper visible" : "x-modal-wrapper"}>
        <div class="x-modal">
          <div class="x-modal-header">
            <span>{title}</span>
          </div>
          <div class="x-modal-content">
            <slot />
          </div>
          <div class="x-modal-buttons">
            <button class="x-modal-cancel" onClick={handleCancelClick}>
              Cancel
            </button>
            <button class="x-modal-ok" onClick={handleOkClick}>
              Okay
            </button>
          </div>
        </div>
      </div>
    );
  }
}
