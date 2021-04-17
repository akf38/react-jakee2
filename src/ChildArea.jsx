import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  background: "Khaki"
};

export const ChildArea = memo((props) => {
  const { openFlag, onClickClose } = props;
  console.log("ChidAreaがレンダリングされた");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {openFlag ? (
        <div style={style} disable={openFlag}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
