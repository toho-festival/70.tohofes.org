import { getAllPostIds, getPostData } from "~/src/scripts/projects";
import Link from 'next/link';
import styled from "styled-components";

interface CommonData {
  id:string;
}

const CommonProjects = ({ postData }) => {
  return (
    <Wrap>
    <Indent>
      <Link href="/projects">＜参加団体一覧に戻る</Link>
    </Indent>
    <Flex>
      <Symbol>
        <Img src={postData.photo} alt="宣材写真"/>
      </Symbol>
      <Text>
        <Center>
          <Subject>{postData.title}</Subject>
        </Center>
        <Explain>{postData.textup}</Explain>
        <Introduce>
          <li>{postData.schedule1}</li>
          <li>{postData.schedule2}</li>
        </Introduce>
      </Text>
    </Flex>
    <Center>
      <Location>{postData.building}　{postData.floor}F　{postData.location}にて</Location>
    </Center>
</Wrap>
  );
}

export const getStaticPaths = async() => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async({ params }) => {
  const postData: CommonData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default CommonProjects;


const Wrap = styled.div`
  color: white;
`;

const Indent = styled.span`
  padding-left: 3%;
`;

const Flex = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-between;
  padding-top: 7vw;
  padding-bottom: 10vw;
  @media screen and (max-width: 1230px) {
    display: block;
  }
`;

const Location = styled.div`
`;

const Symbol = styled.article`
  width: 30%;
  margin:0 auto;
  text-align: center;
`;

const Img = styled.img`
  width: 70%;
`;

const Text = styled.aside`
  margin-top: 5vw;
  width: 60%;
  @media screen and (max-width: 1230px) {
    width: 100%;
  }
`;

const Center = styled.div`
  text-align: center;
  padding-left: 4%;
  padding-right: 4%;
`;

const Subject = styled.h1`
  border-bottom: 5px solid #bf9d6d;
  color: white;
  display: inline-block;
  @media screen and (max-width: 1230px) {
    border-bottom: 3px solid #bf9d6d;
  }
`;

const Explain = styled.h3`
  display: inline;
  text-decoration: underline;
  color: white;
  @media screen and (max-width: 1230px) {
    font-size: 12px;
  }
`;

const Introduce = styled.ul`
  list-style: none;
`;
