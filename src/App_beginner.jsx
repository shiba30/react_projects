import React from 'react';
import { ColorfulMessage } from './components/ColorfulMessage';

export default function App() {
  const [num, setNum] = useState(0);  // カウントアップのStateの宣言
  const [showFlag, setShowFlag] = useState(true);  // スイッチのStateの宣言

  const onClickCountUp = () => {
    // ボタン押下によるカウントアップ関数
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    // ボタンスイッチによる表示/非表示関数
    setShowFlag(!showFlag);
  };

  // useEffect(() => {}, []);  初回のみ実行させたい処理をかく
  useEffect(() => {
    if (num % 3 === 0) {
      // numが3の倍数で割った結果によって、true/falseを返す
      showFlag || setShowFlag(true); // || 左がfalseなら右を返す
    } else {
      showFlag && setShowFlag(false); // && 左がtrueなら右を返す
    }
  }, [num]);  // numの値が変化した時のみ走らせる

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">お元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {showFlag && <p>(^^)</p>}
    </>
  );
};
