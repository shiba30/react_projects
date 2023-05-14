// レンダリングの基礎、最適化
import React, { useState, useCallback, useMemo } from 'react';
import { ChildArea } from './components/renderingComponents/ChildArea'

export default function App() {

  console.log("App");

  const [text, settext] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => settext(e.target.value);

  const onClickOpen = () => setOpen(!open);

  // アロー関数で毎回レンダリング行われるので、useCallback()で制御する(関数のメモ化)
  const onClickClose = useCallback(() => setOpen(false), [open]);

  // 変数のメモ化。変数の中で定義している関数の中で計算しているときとかに使う？
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div>
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose}/>
    </div>
  );
};
