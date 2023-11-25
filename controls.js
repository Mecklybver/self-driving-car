class Controls {
  constructor(control) {
    this.forward = false;
    this.left = false;
    this.right = false;
    this.reverse = false;
    switch (control) {
      case "keys":
        this.#addKeyboardListeners();
        break;
      case "dummy":
        this.forward = true;
        break;
    }
  }
  #addKeyboardListeners() {
    document.onkeydown = (e) => {
      // e.preventDefault();
      switch (e.key) {
        case "ArrowLeft":
          this.left = true;
          break;
        case "ArrowRight":
          this.right = true;
          break;
        case "ArrowUp":
          this.forward = true;
          break;
        case "ArrowDown":
          this.reverse = true;
          break;

        default:
          break;
      }
    };
    document.onkeyup = (e) => {
      switch (e.key) {
        case "ArrowLeft":
          this.left = false;
          break;
        case "ArrowRight":
          this.right = false;
          break;
        case "ArrowUp":
          this.forward = false;
          break;
        case "ArrowDown":
          this.reverse = false;
          break;

        default:
          break;
      }
    };
  }
}
