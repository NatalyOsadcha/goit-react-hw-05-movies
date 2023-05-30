import styled from 'styled-components';
import { GrFormPreviousLink } from 'react-icons/gr';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 20px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  border-bottom: 2px solid gray;
  padding-bottom: 10px;
`;

export const MovieInfo = styled.div`
  padding: 0 20px;
`;

export const AddInfo = styled.div`
  border-bottom: 2px solid gray;
  line-height: 1.8rem;
`;

export const Arrow = styled(GrFormPreviousLink)`
  width: 25px;
  height: 25px;
`;

export const GoBack = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  padding-bottom: 10px;
`;
