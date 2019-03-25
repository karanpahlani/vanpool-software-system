import React from 'react';



const UserCard = (props) => {
    const {name, id , email} = props;
    return(
        <div className={" w5 tc bg-light-red dib br3 pa2 ma2 grow bw2 shadow-5"}>
            <img src={`https://robohash.org/${id}?100x100`} alt={"lauda lele"}/>
            <div>
                <h2>{name}</h2>
                <p>{id}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default UserCard;