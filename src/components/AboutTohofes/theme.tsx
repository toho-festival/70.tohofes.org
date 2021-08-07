import styled from "styled-components";
import { FC } from 'react';

const ThemeTOHO: FC = () => {
  return (
    <>
      <ThemeWrap>
        <Theme>今年のテーマ</Theme>
        <Rubi>しき</Rubi>
        <FestivalTheme>～ 織 ～</FestivalTheme>
      </ThemeWrap>
      <Arrangement>
        <Creater>副実行委員長　澤本昌宏</Creater>
        <Discription>
          　第 70 回桐朋祭のテーマは、「織」になりました。
          織物や着物は糸と糸をつなぎ、織りなすことでつくられ
          ていきます。そこで、「織」という言葉には「人と人とがつ
          ながり合う」という意味が込められています。
          　2020 年春先、新型コロナウィルスの影響で多くの人々は
          家にこもる生活を余儀なくされました。それから感染を防
          ぐために仕事や娯楽、イベントなどさまざまなものがリモー
          トに取って代わり、世界中でオンラインの普及が加速しま
          した。実際、前回の桐朋祭では来場者が生徒と保護者のみ
          となり、一般の方にはオンラインという形で参加していた
          だくことになりました。
          　インターネットを使うことで生活の利便性が高まりまし
          た。たしかに、オンラインによって遠く離れた人ともつな
          がり、より多くの方々が桐朋祭に参加できます。しかし、
          これと同時に本来の「人と人とのつながり」が失われつつ
          あるという側面があるのではないでしょうか。オンライン
          では一度の配信で多くの人々に効率的に披露することがで
          きる反面、視聴者はその一点しか見ることができず、双方
          向での関わりをもったりその場の雰囲気を感じたりするこ
          とができません。インターネットを使って多くの人々に桐
          朋祭を見て知ってもらいながら、生徒と来場者とのつなが
          りを大切にするのが本来の文化祭のあるべき姿ではないか
          と思っています。
          　第 70 回桐朋祭では、中学生から高校生まで様々な個性
          を持った生徒たちが一本一本の糸となって織りなしていく、
          多様性のある文化祭を目指していきます。そして多くの方
          に来場していただき、このような現代だからこそ、桐朋祭
          を通して人と人とがつながり合えるような明るい空間をつ
          くっていきたいと思います。どうぞお楽しみください。
        </Discription>
      </Arrangement>
    </>
  )
}

export default ThemeTOHO;

const ThemeWrap = styled.div`
  margin-top:20vw;
  color: white;
  text-align: center;
  @media screen and (max-width:767px) { 
    margin-top:30vw;
  }
`;

const Theme = styled.h2`
  margin-top: 10vw;
  margin-bottom: 4vw;
  display: inline-block;
  border-bottom: #bf9d6d 6px solid;
`;

const FestivalTheme = styled.h1`
  font-size:10vw;
`;

const Arrangement = styled.div`
  margin-bottom: 3vw;
  display: inline-block;
  @media screen and (max-width:767px) { 
    margin-top: 5vw;
  }
`;

const Discription = styled.h3`
  text-align: center;
  margin-bottom: 30vw;
  color: white;
  border-bottom: 1px #ddd solid;
  padding: 10px;
  @media screen and (max-width:767px) { 
    font-size: 12px;
  }
`;

const Rubi = styled.h4`
  
`;

const Creater = styled.h2`
  text-align:center;
  border-bottom: 1px #ddd solid;
  color: white;
  @media screen and (max-width:767px) { 
    font-size: 15px;
  }
`;