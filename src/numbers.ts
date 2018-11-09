import { Observable } from 'rxjs'

const numbers = [1, 5, 10, 15]
let source = Observable.create(function (observer: any) {
    let index = 0
    const produceValue = () => {
        observer.next(numbers[index++])

        if (index < numbers.length) {
            setTimeout(produceValue, 250)
        } else {
            observer.complete()
        }
    }
    produceValue()
}).map(function (n: number) { return n * 10 })

source.subscribe({
    next(value: any) {
        console.log(`value: ${value}`)
    },
    error(e: any) {
        console.log(`error: ${e}`)
    },
    complete() {
        console.log('complete')
    }
})  