import express from "express"

export const app = express()
app.use(express.json())

app.post('/sum',(req,res)=>{
    const a = req.body.a;
    const b = req.body.b;
    if(a > 100000 || b > 100000){
        return res.status(422).json({
            "message":"Sorry we don't support big numbers"
        })
    }
    const sum = a+ b
    await prismaClient.sum.create({
        data: {
            a: parsedResponse.data.a,
            b: parsedResponse.data.b,
            result: answer
        }
    })
    res.json({sum})
})
app.post('/multiply',(req,res)=>{
    const a = req.body.a;
    const b = req.body.b;
    const multiply = a*b

    

    res.json({multiply})
})


