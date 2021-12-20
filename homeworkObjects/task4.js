let string;
let message = {
    text: string,
    getMessage(string) {
        this.text = string;
    },
    showMessage() {
        console.log(this.text)
    }
}
message.getMessage('aboba');
message.showMessage();