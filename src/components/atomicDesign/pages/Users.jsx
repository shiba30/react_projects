import React, { useContext } from "react";
import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from "../../../providers/UserProvider";
import { useRecoilState } from "recoil";
import { userState } from "../../../store/userStore";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `haru${val}`,
    image:
      "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2576&q=80",
    email: "test@gmail.com",
    phone: "090-1111-2222",
    company: {
      name: "test株式会社",
    },
    website: "https://google.com",
  };
});

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext); // userContextを使ったグローバル値
  const [userInfo, setUserInfo] = useRecoilState(userState); // recoilを使ったグローバル値
  const conClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SecondaryButton onClick={conClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
