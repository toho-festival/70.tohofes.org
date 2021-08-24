import { FC } from 'react';
import styled from 'styled-components';
import { useRouter } from "next/router";

const Greeting:FC = () => {
  const router = useRouter();
  return (
    <Wrap>
      <Button onClick={() => router.back()}>＜元のページに戻る</Button>
      <Name>TAKE C</Name>
      <MainContents>
        <Article>
          <Img src="entrance-backgrund-1.jpg" alt="" />
        </Article>
        <Sentence>
          <First>どうも！昨年１０月位に</First><Decoration>ゆる～くできた、TAKE Cと</Decoration><Decoration>申します！音楽初心者ばかりなのに</Decoration><Decoration>最初の曲でシュガソンやったりと迷走しています。</Decoration><Decoration>ちょっとでも気になったら是非！遊びに来てください！</Decoration>
        </Sentence>    
      </MainContents>
    </Wrap>
  );
}


export default Greeting;


const Wrap = styled.div`
  background-color:#ffcc00;
`;

const Name = styled.h1`
  font-size:10vw;
  text-align:center;
`;

const MainContents = styled.div`
  display:flex;
`;

const Article = styled.article`
  margin-left:5vw;
  margin-right:5vw;
`;

const Img = styled.img`
  width:30vw;
`;

const Sentence = styled.aside`

`;

const First = styled.h2`
  border-bottom:2px solid black;
  font-size:2vw;
  :first-letter{
    font-size:4vw;
  }
`;

const Decoration = styled.h2`
  border-bottom:2px solid black;
  font-size:2vw;
`;

const Button = styled.a`
  border: 4px solid #ffffff;
  margin-top: 4px;
  border-radius: 150px;
  background: #fff;
  color: black;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  padding: 6px;

  :hover {
    color: #fff;
    background: #1a1a1a;
  }
  @media screen and (max-width: 767px) {
    padding: 2px;
  }
`;