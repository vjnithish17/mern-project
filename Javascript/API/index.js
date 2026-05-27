let userdata = []
let abicall = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    console.log(response);
    
    let data = await response.json()

    userdata = data
    console.log(userdata)
    upload()
}
abicall()
console.log("hi");


let upload = () => {
    const box = document.getElementById('box')
    let list = ''
    userdata.forEach(element => {
        list += `
         <div class="carts">
                <h1>Name: ${element.name}</h1>
                <h3>email:${element.email}</h3>
                <h4>address:${element.address.city}</h4>

            </div>
        `
    });
    box.innerHTML = list
    // console.log(list);
}
