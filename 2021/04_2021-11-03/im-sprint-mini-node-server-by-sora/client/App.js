class App {
  init() {
    // 이 class의 초기화는 button에 대한 event listner
    document
      .querySelector("#reverse")
      .addEventListener("click", this.toReverse.bind(this));
    document
      .querySelector("#split")
      .addEventListener("click", this.toSplit.bind(this));
  }

  // post를 보내는 method를 만든다
  post(path, body) {
    fetch(`http://localhost:5000/${path}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json()) // 응답을 json 객체로 변환
      .then((response) => this.render(response));
  }

  toReverse() {
    const text = document.querySelector(".input-text").value;
    this.post("reverse", text);
    console.log("나옴?");
  }
  toSplit() {
    const text = document.querySelector(".input-text").value;
    this.post("split", text);
    console.log("이것도?");
  }
  render(response) {
    // 응답을 rendering 하느 함수
    const responseWrapper = document.querySelector("#response-wrapper");
    document.querySelector(".input-text").value = ""; // request 부분 초기화 진행
    responseWrapper.innerHTML = response;
  }
}

const app = new App();
app.init();
