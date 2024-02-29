import { useEffect, useState } from "react";

const Profile = () => {
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    setIsRender(true);
  }, []);

  return (
    <div>
      {isRender && (
        <>
          <h2>Профиль пользователя</h2>
          <p>Возраст: 23</p>
          <p>Рост: 187</p>
          <h3>Навыки</h3>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Profile;
