import React from 'react';

const ClientProfile = (props) => {
    const { user } = props;
    const { fullName } = user;
    console.log("🚀 ~ file: ClientProfile.js ~ line 5 ~ ClientProfile ~ fullName", props)

    return (
        <div>
            <h1>Soy {fullName}</h1>
        </div>
    )
}

export default ClientProfile;