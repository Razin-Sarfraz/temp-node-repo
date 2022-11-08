const EventEmitter = require('events')
const customEventEmitter = new EventEmitter

customEventEmitter.on('response',(name,id)=>{
    console.log(`data received ${name} ${id}`)
})

customEventEmitter.on('walter',()=>{
    console.log(`this is jesse pinkman yo`)
})

customEventEmitter.emit('walter','meth',43)