import { FC } from 'react';
import styled from 'styled-components';
import { useRouter } from "next/router";

const Title:FC = () => {
  const router = useRouter();
  return (
    <>
      <Button onClick={() => router.back()}>＜元のページに戻る</Button>
      <Name>ー迷'sー</Name>
      <ContentsWrap>
        <Img src={process.env.basePath + "/images/karakuri.png"} alt="昔風からくり迷路の画像" />
        <Catchphrase>江戸時代にタイムスリップ！？</Catchphrase>
      </ContentsWrap>
      <Discription>からくり迷路を体感せよ！！</Discription>
    </>
  );
}

export default Title; 


const Name = styled.h1`
  font-size:10vw;
  text-align: center;
`;

const Discription = styled.h3`
  margin-top:4vw;
  font-size:7vw;
  text-align: center;
`;

const ContentsWrap = styled.div`
  display:flex;
`;

const Img = styled.img`
  width:40vw;
  height:40vw;
  margin: 1vw 0vw 0vw 10vw;
`;

const Catchphrase = styled.h2`
  position: relative;
  display: inline-block;
  margin: 1.5em 0 1.5em 0vw;
  padding: 3.5vw 5px 0px 5px;
  width: 30vw;
  height: 15vw;
  line-height: 4vw;
  text-align: center;
  color: #FFF;
  font-size: 3vw;
  font-weight: bold;
  background: #ffcc75;
  border-radius: 50%;
  box-sizing: border-box;
  :before{
    content: "";
    position: absolute;
    top: 50%;
    left: -25px;
    margin-top: -15px;
    border: 15px solid transparent;
    border-right: 15px solid #ffcc75;
    z-index: 0;
  }
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