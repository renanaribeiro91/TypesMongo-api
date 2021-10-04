import App from "./server"


const port = process.env.PORT || 3050
App.listen(port,()=>{
    console.log("conected")
})