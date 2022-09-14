
var lightIsOn = undefined

function turnOffLight()
{
    try 
    {
        lightIsOn = false 
    }
    catch(err)
    {
        console.error(err) 
    }
}


function turnOnLight()
{
    try 
    {
        lightIsOn = true
    }
    catch(err)
    {
        console.error(err)
    }
}


describe(" Test For Reliable Light Bulb Controller ",()=>{

        it(" Should turn off light when \"off\" button pressed ",()=>{
            turnOffLight()

            expect(lightIsOn).toBe(false)
            expect(lightIsOn).toBeFalsy()
            expect(lightIsOn).not.toBe(true) 
        })

        it(" Should turn on light when \"on\" pressed ",()=>{
            turnOnLight() 

            expect(lightIsOn).toBe(true)
            expect(lightIsOn).toBeTruthy()
            expect(lightIsOn).not.toBe(false)
            expect(lightIsOn).toEqual(true) 
        })
})