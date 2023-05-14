import React from 'react';

export const ColorfulMessage = (props) => {
    const {color, children} = props;  // 分割代入
    const contentStyle = {
        color,  // 名前と値が同じの場合、省略化
        fontSize: '18px'
      };

    return (
        <p style={contentStyle}>{children}</p>
    );
};
