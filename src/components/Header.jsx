import React from "react";
import { HeaderStyle } from "../style/HeaderStyle";

function Header() {
  return (
    <HeaderStyle>
      <header>
        <h1>프로젝트</h1>
        <h2>
          <span>자기소개</span>
        </h2>
        <h2>
          <span>프로젝트 파일</span>
          <nav>Subway</nav>
          <nav>Go Together</nav>
          <nav>Tour-Guide</nav>
        </h2>
        <h2>
          <span>활용 기술</span>
          <nav>React</nav>
          <nav>CSS</nav>
          <nav>JS</nav>
        </h2>
      </header>
    </HeaderStyle>
  );
}

export default Header;
