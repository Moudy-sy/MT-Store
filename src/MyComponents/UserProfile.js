import React from 'react';



function UserProfile(props) {
    const { firstName, lastName, imageUrl } = props;
    const user = {
        firstName: 'John',
        lastName: 'Doe',
        imageUrl: 'https://example.com/john-doe.jpg'
    };


    return (
        <div className="user-profile">
            <img src={imageUrl} alt={`${firstName} ${lastName}`} />
            <h3>{`${firstName} ${lastName}`}</h3>
            <UserProfile firstName={user.firstName} lastName={user.lastName} imageUrl={user.imageUrl} />

        </div>
    );
}

export default UserProfile;
