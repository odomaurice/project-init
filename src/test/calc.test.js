function calc(num1, num2)
{
    try 
    {
        const sum = num1 + num2 
        const product = num1 * num2
        const difference = num1 - num2 
        const divide = num1 / num2 
        
        const result = { sum, product, difference, divide } 
    
        return result 
    }
    catch(err)
    {
        console.error(err)
    }
}


describe(" Test For an accurate calculator ",()=>
{


    it(" Should Return Accurate Results ",()=>{

        const result = calc(1,1)
        const { sum, product, difference, divide } = result 

        expect(sum).toBe(2)
        expect(product).toBe(1)
        expect(difference).toBe(0)
        expect(divide).toBe(1) 

        expect(sum).toBeGreaterThan(1)
        expect(sum).toBeGreaterThanOrEqual(2)

    })



})


