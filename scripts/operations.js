export const mathOps = (num1, num2, op) => {
    let result = undefined

    if (op === 'addition') {
        result = num1 + num2
    }
    else if (op === 'subtraction') {
        result = num1 - num2
    }
    else if (op === 'multiplication') {
        result = num1 * num2
    }
    else if (op === 'division') {
        result = num1 / num2
    }
    else {
        result = "Choose valid op value"
    }
    return result;
}