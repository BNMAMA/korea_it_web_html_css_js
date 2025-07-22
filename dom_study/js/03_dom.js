const addbtn = document.querySelector(".add-btn")
let count = 0;

addbtn.onclick = () => {
    console.log("클릭됨")
    const inputName = document.querySelector("#input-name")
    const nameValue = inputName.value;
    const inputAge = document.querySelector("#input-age")
    const ageValue = inputAge.value;
    const inputAddress = document.querySelector("#input-address")
    const addressValue = inputAddress.value;

    if(nameValue === "" || ageValue === "" || addressValue ==="" ) {
        alert("빈칸을 입력해주세요")
        return;
    }

    const table = document.querySelector(".table")

    table.innerHTML +=`
    <tr>
        <td>${count}</td>
        <td>${nameValue}</td>
        <td>${ageValue}</td>
        <td>${addressValue}</td>
    </tr>
    `
}; 

count++

//값 초기화 (다시 추가하기 위해서)
inputName.value = "";
inputAddress.value = "";
inputAge.value = "";







