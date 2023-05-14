import React, { memo } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

const SearchInputComponent = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
};

// 再レンダリング最適化
// ESLintの react/display-nameルールがトリガーされています。
// これは、Reactコンポーネントが表示名を持っていないことを示しています。表示名は、デバッグ時に役立ちます。
export const SearchInput = memo(SearchInputComponent);

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
