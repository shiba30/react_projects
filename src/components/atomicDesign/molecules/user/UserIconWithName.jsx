import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { UserContext } from "../../../../providers/UserProvider";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../store/userStore";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  // const { userInfo } = useContext(UserContext);  // useContextを使ったグローバル値
  const userInfo = useRecoilValue(userState); // recoilを使ったグローバル値
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
};

UserIconWithName.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

const SContainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
