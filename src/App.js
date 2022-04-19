const user = 
[{
    fname: "sachin",
    lname: "shakya"
},
{
fname: "rohan",
lname: "singh"
}]




const App = () =>{
    let a=10
    let b=11
    return (<div>
        <h1>
            Monsters App
        </h1>
        <p>Building CRUD App</p>
        <p>Sum Calculation: {a*b}</p>
        {
        user.map((element,index) => {
            return(
                <div>
                    <p>{element.fname}</p>
                    <p>{element.lname}</p>
                </div>
                 )
        })
        }
    </div>
    )
}


export default App