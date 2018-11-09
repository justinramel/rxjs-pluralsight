import { Observable } from 'rxjs'

let circle = document.getElementById("circle")
let source = Observable.fromEvent(document, "mousemove")
    .map((e: MouseEvent) => {
        return {
            x: e.clientX,
            y: e.clientY
        }
    })
    .delay(250)

source.subscribe({
    next(value: any) {
        circle.style.left = value.x
        circle.style.top = value.y
    },
    error(e: any) {
        console.log(`error: ${e}`)
    },
    complete() {
        console.log('complete')
    }
})  