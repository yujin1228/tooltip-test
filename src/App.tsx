import "./styles/App.scss";
import Demo1 from "./components/demo/Demo1";
import Demo2 from "./components/demo/Demo2";
import Demo3 from "./components/demo/Demo3";
import DemoColor from "./components/demo/DemoColor";
import DemoDisable from "./components/demo/DemoDisable";

function App() {
  //contentSample
  const contentSample1 = (
    <>
      <span className="propmt-text_span">prompt text</span>
      <span className="propmt-text_span">prompt text</span>
      <span className="propmt-text_span">prompt text</span>
    </>
  );
  const contentSample2 =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisciasperiores atque";

  return (
    <>
      <div className="container-layout">
        <h1>과제전형 - 지원자: 최유진</h1>
        {/* 
        Demo1 - 12개방향 툴팁, 부모컨테이너 overflow: scroll 툴팁
        Demo2 - enter-delay 1s / leave-delay 1s / hover not hidden
        Demo3 - 아이콘,텍스트,버튼 등 다양한 툴팁내용
        DemoColor - 스타일커스텀(색상) 툴팁
        DemoDisable - 특정상태에 따라 노출여부가 결정되는 툴팁 
        */}
        <Demo1 content={contentSample1} /> <Demo2 content={contentSample1} />
        <Demo3 />
        <DemoColor />
        <DemoDisable content={contentSample2} />
      </div>
      <div id="tooltip-container-layout"></div>
    </>
  );
}

export default App;
