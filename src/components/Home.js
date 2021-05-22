import styled from 'styled-components';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import MainSide from './MainSide';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
// import { useEffect } from 'react';

const Home = (props) =>{
    return(
        <Container>
            {!props.user && <Redirect to='/'/>}
            <Layout>
                <LeftSide/>
                <MainSide user={props.user} articles={props.articles}/>
                <RightSide/>
            </Layout>
        </Container>
    );
};

const Container = styled.div`
    padding-top: 52px;
    max-width:1300px;
    margin: auto;
`;
const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0,5fr) minmax(0,12fr) minmax(300px,7fr);
    column-gap: 25px;
    row-gap: 25px;
    /* grid-template-rows: auto; */
    margin: 25px 0;
    @media(max-width: 768px){
        display: flex;
        flex-direction:column;
        padding: 0 5px;
    }
`;

const mapStateToProps = (state) =>{
    return{
        user: state.userState.user,
        articles: state.articleState.articles,
    }
}


export default connect(mapStateToProps)(Home);