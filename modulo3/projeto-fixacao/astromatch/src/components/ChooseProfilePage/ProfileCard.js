import React from "react";
import styled from "styled-components";



const ProfilePicture = styled.img`
  width: 100%;
  display: block;
  max-height: 200px;
`;

const ProfileInfo = styled.div`
  padding: 2 5px;
  font-size: smaller;
  background-color:#fcfef5;
`;

function ProfileCard(props) {
  const { name, age, bio, photo } = props.profile;

  return (
    <div>
      <ProfilePicture src={photo} />
      <ProfileInfo>
        <p>
          {name}, {age}
        </p>
        <p>{bio}</p>
      </ProfileInfo>
    </div>
  );
}

export default ProfileCard;