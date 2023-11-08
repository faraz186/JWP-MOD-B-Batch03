function getValue(){
    let input = document.getElementById("name");

    var getStorageData = localStorage.getItem("UserName");

    var arr = JSON.parse(getStorageData);

    console.log(arr)
    
    if(!arr)
    {
        arr = []
    }
    let obj = {
        name:input.value
    }
    arr.push(obj)

    localStorage.setItem("UserName",JSON.stringify(arr))
}