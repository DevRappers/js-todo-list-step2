const UserInput = () => {
  const userCreateButton = document.querySelector(".user-create-button");

  const onClick = () => {
    const userName = prompt("생성할 유저 이름을 입력해주세요.");
  };

  userCreateButton.addEventListener("click", onClick);
};

export default UserInput;
