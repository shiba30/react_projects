import React, { memo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCardComponents = (props) => {
  const { user } = props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
};

// 再レンダリング最適化
// ESLintの react/display-nameルールがトリガーされています。
// これは、Reactコンポーネントが表示名を持っていないことを示しています。表示名は、デバッグ時に役立ちます。
export const UserCard = memo(UserCardComponents);

UserCardComponents.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    company: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
    website: PropTypes.string,
  }).isRequired,
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
