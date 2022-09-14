
function sum(num1, num2)
{

    if( typeof num1 !== "number" || typeof num2 !== "number")
    {
        return false 
    }
    
    return num1 + num2 
}

// test cases 
// test that 
    // sum returns a number
    // sum returns a correct number 
    // sum processes only number input
    // sum sends proper result based on input 
    // 

describe("Test That Function is Okay",()=>{




    it(" Should add 2 + 2 to equal 4 ",()=>{

        const result = sum(2,2)

        expect(result).toBe(4) 

    })


    it(" Should return false ",()=>{

        const result = sum(2,'a')

        expect(result).toBe(false) 

    })

})

