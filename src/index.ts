import { Observable } from 'rxjs'
import { load, loadWithFetch } from './loader'

// let source = Observable.create((observer: any) => {
//     observer.next(1)
//     observer.next(2)
//     observer.error('Stop!')
//     observer.next(3)
//     observer.complete()
// })

// let source = Observable.merge(
//     Observable.of(1),
//     Observable.from([2, 3, 4]),
//     Observable.throw(new Error('Stop!')),
//     Observable.of(5, 6)
// ).catch(e => {
//     console.log(`caught ${e}`)
//     return Observable.of(10)
// })

// source.subscribe(
//     (value: any) => console.log(`value: ${value}`),
//     (error: any) => console.log(`error: ${error}`),
//     () => console.log('complete')
// )

let output = document.getElementById("output")
let button = document.getElementById("button")
let click = Observable.fromEvent(button, "click")

function renderMovies(movies: any) {
    movies.forEach((m: any) => {
        let div = document.createElement('div')
        div.innerText = m.title
        output.appendChild(div)
    });
}

let subscription = load('movies.json')
    .subscribe(
        renderMovies,
        (e: any) => console.log(`error: ${e}`),
        () => console.log('complete')
    )

subscription.unsubscribe()
console.log(subscription)

click.flatMap(e => loadWithFetch('movies.json'))
    .subscribe(
        renderMovies,
        e => console.log(`error: ${e}`),
        () => console.log('complete')
    )