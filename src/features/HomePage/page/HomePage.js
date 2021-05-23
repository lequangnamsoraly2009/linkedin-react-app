import styled from "styled-components";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import MainSide from "../components/MainSide";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
// import { connect } from "react-redux";
// import { useEffect } from 'react';

const Home = (props) => {
    const user = useSelector((state) => state.userState.user);
    const articles = useSelector((state) => state.articleState.articles);
  return (
    <Container>
      {!user && <Redirect to="/" />}
      <Layout>
        <LeftSide />
        <MainSide user={user} articles={articles} />
        <RightSide />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 52px;
  max-width: 1300px;
  margin: auto;
`;
const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  /* grid-template-rows: auto; */
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

// const mapStateToProps = (state) => {
//   return {
//     user: state.userState.user,
//     articles: state.articleState.articles,
//   };
// };

// export default connect(mapStateToProps)(Home);

export default Home;
