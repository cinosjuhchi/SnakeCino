let inputDirection = { c: 0, s: 0 }
let lastInputDirection = { c: 0, s: 0 }

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if(lastInputDirection.s !== 0) break
            inputDirection = { c: 0, s: -1 }
            break
        case 'ArrowDown':
            if(lastInputDirection.s !== 0) break
            inputDirection = { c: 0, s: 1 }
            break
        case 'ArrowLeft':
            if(lastInputDirection.c !== 0) break
            inputDirection = { c: -1, s: 0 }
            break    
        case 'ArrowRight':
            if(lastInputDirection.c !== 0) break
            inputDirection = { c: 1, s: 0 }
            break
        
    }
})

export function getInputDirection(){
    lastInputDirection = inputDirection
    return lastInputDirection
}