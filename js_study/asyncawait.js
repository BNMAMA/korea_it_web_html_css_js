/**
 * async(비동기 함수 정의 키워드)
 * await(비동기 함수 동기 호출 키워드)
 * await는 async함수 내부에서만 사용 가능
 * await은 promise가 resolve될 때까지 기다렸다가 그 결과를 변수에 할당
 */

// const promise = new Promise((resolve) => resolve("개발자"))

// async function getDate() { //async 키워드가 함수 자체를 비동기 함수로 만듦(함수 자체가 promise)
//     return promise; //이렇게 한다고 해서 promise 안에 promise가 감싸진 형태는 아니다.
// }

// const user = getDate()
// user.then((name) => console.log(name))

// async function getUserReq() {
//     return new Promise((resolve) => {
//         setTimeout(() => {console.log("사용자 데이터를 받아옴")
//         return resolve("서버 1")
//         }, 2000);
//     });
    
// }

// async function getData() {
//     //getUserReq() //비동기 함수가 끝날 때까지 다음 작업을 기다려주지 않음(비동기)
//     const result =  await getUserReq(); //awati는 해당 비동기 작업이 완료될 때까지 다음 작업을 하지 않고 기다림
//     const result2 =  await getUserReq(); 
//     return "김소현";
    
// }

// function getDataPromise() {
//      return getUserReq().then(() => {
//         return getUserReq()
//      })
//      .then(() => {
//         return "김소현";
//      });
// }

// const user = getData();
// user.then((name) => console.log(name));

async function getUserReq() {
    return new Promise((resolve) => {
        setTimeout(() => {console.log("사용자 데이터를 받아옴")
        return resolve("서버 1")
        }, 2000);
    });
    
}

function getUserReq() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("사용자 데이터를 받아옴");
			return resolve("서버1");
		}, 2000);
	});
}

async function getUser() {
	await getUserReq();
	return "김소현";
}

async function getTodo() {
	await getUserReq();
	return ["밥먹기", "잠자기"];
}

async function getData() {
	const user = await getUser();
	const todo = await getTodo();
	console.log(`${user}님 ${todo}를 해야합니다.`);
}

getData();