import React from "react";

const User = ({ signIn }) => {
    return (
        <form action="signin.php" method="post" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <label htmlFor="email" style={{ width: 'auto' }}>Email:</label>
            <input type="email" id="email" name="email" required style={{ width: '200px', marginTop: '-7px' }} /><br />

            <label htmlFor="password" style={{ width: 'auto' }}>Password:</label>
            <input type="password" id="password" name="password" required style={{ width: '200px', marginTop: '-7px' }} /><br />

            <button type="submit" onClick={signIn} style={{ width: '100px', marginTop: '-0px', position: 'relative' }}>Sign In</button>
        </form >
    );
}

export default User;

