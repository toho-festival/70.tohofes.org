import { FC } from 'react';
import styled from 'styled-components';

const Greeting:FC = () => 
  <>
    <Enthusiasm>
      昨年の中３学年参加委員が再び集結！！どんな方でも歓迎！ぜひ来てください！！
    </Enthusiasm>
  </>

export default Greeting; 

const Enthusiasm = styled.h2`
  margin-top:5vw;
  text-align:center;
`;