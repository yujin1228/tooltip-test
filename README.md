# 툴팁 컴포넌트 구현 과제

> 테라인터내셔널 FE 과제 테스트

### 🔧 Used Skills

<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/Scss-CC6699?style=flat-square&logo=Sass&logoColor=white"/>

</br>

### 📄 요구 사항

1. 툴팁 컴포넌트로 감싸진 요소에 마우스 오버 시 툴팁이 떠야 하고 마우스 아웃 시 툴팁이 사라져야 합니다.
2. 툴팁 컴포넌트로 감싸진 요소의 부모 요소가 overflow hidden 혹은 scroll 일 경우에도 툴팁이 최상위(index)에서 제대로 보여야 합니다.
3. 툴팁 방향은(`left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom`) 으로 뜰 수 있어야 합니다.
4. 툴팁이 나타남 혹은 사라짐은 사용자가 원하면 delay로 동작 가능해야 합니다.
5. delay 시간은 사용자가 custom 하게 값을 넘겨 줄 수 있어야 합니다.
6. 툴팁 내용은 string , number, icon, icon & string, 클릭 할 수있는 button 등 여러가지 형태의 데이터를 표현 할 수 있어야 합니다.
7. 특정 툴팁은 스타일을 커스텀하게 설정할 수 있어야합니다.
8. 특정 state 값에 의해 툴팁이 안뜨게 처리할 수 있어야 합니다.

</br>
</br>

### 💡 구현 로직

[🔗 Tooltip.tsx](https://github.com/yujin1228/tooltip-test/blob/main/src/components/tooltip/Tooltip.tsx)

1. Tooltip 컴포넌트는 `툴팁 컨텐츠`, `감쌀 요소`, `툴팁 방향`, `delay 시간`, `커스텀스타일`, `툴팁 배경색`, `툴팁노출여부`, `hoverNotHidden` 을 props로 받습니다.

```tsx
interface ITooltipProps {
  content: React.ReactNode; // 툴팁 컨텐츠
  children: React.ReactNode; // 감쌀 요소
  direction?: `top` | `left` ...중략; // 툴팁 방향
  openDelay?: number; // 툴팁이 나타나는 delay 시간
  closeDelay?: number; // 툴팁이 사라지는 delay 시간
  customStyle?: React.CSSProperties; // 커스텀 스타일
  color?: "dark-gray" | "pink" | "yellow" | "white"; //툴팁 배경색
  disabled?: boolean; // 툴팁 노출 여부
  hoverNotHidden?: boolean; // 툴팁에 hover시 툴팁이 사라지지 않음
}
```

2. Tooltip 컴포넌트는 `감쌀 요소` 로 받은 **children props**, children을 감싸는 **컨테이너**, `툴팁 컨텐츠`를 담을 실질적 **툴팁영역** 으로 구성됩니다. 이때 **툴팁영역**은 Portals를 통해 특정 DOM 노드에 독립적으로 렌더링합니다.

```tsx
return (
  <>
    <div className="tooltip-container">{children}</div>
    <Portals container={document.getElementById("tooltip-container-layout")}>
      <div className="tooltip-inner">{content}</div>
    </Portals>
  </>
);
```

3. Tooltip 컴포넌트의 **컨테이너** 요소는 mouseover 및 mouseout 이벤트가 발생하면 isActive 상태를 변경합니다. isActive 상태가 변경될 때, disable 및 delay 값을 고려하여 isShow 상태를 변경하여 툴팁을 나타내거나 사라지게 합니다

```tsx
// Tooltip 을 띄우거나 사라지게하는 상태
const [isActvie, setIsActive] = useState<boolean>(false);
const [isShow, setIsShow] = useState<boolean>(false);

...
useEffect(() => {
    if (isActvie && !disabled) {
      // openDelay값에 따라 툴팁을 띄우기까지 지연시간을 결정
      const openTooltip = setTimeout(() => {
        setIsShow(true);
      }, openDelay);
      return () => clearTimeout(openTooltip);
    } else {
      // closeDelay값에 따라 툴팁을 감추기까지 지연시간을 결정
      const closeTooltip = setTimeout(() => {
        setIsShow(false);
      }, closeDelay);
      return () => clearTimeout(closeTooltip);
    }
  }, [isActvie, disabled, openDelay, closeDelay]);
```

4. 툴팁의 위치는 `getBoundingClientRect()`를 사용하여 mouseover 이벤트가 발생한 요소의 x, y 좌표 및 너비와 높이를 얻은 후, 툴팁 방향값에 따라 계산합니다. 좌표 계산은 [`calculateTooltipPosition`](https://github.com/yujin1228/tooltip-test/blob/main/src/utils/tooltipPositionCalculator.ts) 함수를 이용해 수행됩니다

```tsx
const handleMouseOver = () => {
  if (tooltipRef.current) {
    const rect = tooltipRef.current.getBoundingClientRect();
    const position = calculateTooltipPosition(rect, direction);
    setTooltipPosition(position);
  }
  setIsActive(true);
};
```

</br>
</br>

### 📌 프로젝트 실행 방법

```
git clone https://github.com/yujin1228/tooltip-test.git
cd tooltip-test
npm install
npm start
```

</br>
</br>

### ✏️ 어려웠던 점

- Sass, Scss 사용경험이 처음이라 스타일링 및 module.css 작업에 어려움을 겪었습니다. 개인적으로 CSS-in-JS 보다 동적스타일링이 자유롭지 않았다고 느꼈습니다. 커스텀 스타일이 필요할 때는 props 값을 CSS에 넘길 수 있는 CSS-in-JS가 더 적합하다고 생각했습니다.
- 부모컨테이너가 overflow hidden,scoll일 경우에도 툴팁이 최상위(index)에서 제대로 보여야 한다는 요구사항을 충족하기 위해 Portal을 사용하게 되었는데 이로인해 툴팁의 위치 계산작업에 어려움을 겪었습니다. 현재 코드는 12개의 방향을 모두 switch case로 개별적으로 관리하는데 top-bottom, left-right처럼 x좌표 혹은 y좌표가 동일한 부분들을 조합하여 좌표계산을 하는식으로 더 효율적인 방법이 없을지 고민이 필요할것같습니다.
