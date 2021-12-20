let circle = {
    radius: 10,
    color: "red",
    calculateCircumference() {
        console.log(2 * Math.PI * this.radius)
    }
}
circle.calculateCircumference()