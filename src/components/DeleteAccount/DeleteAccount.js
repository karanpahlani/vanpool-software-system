import React from 'react';

class DeleteAccount extends React.Component{

    constructor(props){
        super(props);
    }

    removeAccount(e){
        const {onRouteChange} = this.props;

        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: "",
                password: "",
                name: "",
                type: ""
            })
        })
            .then(response => response.json())

        onRouteChange('signout');
    }

    render() {
        const {onRouteChange} = this.props;
        return (
            <div className={" w-80 mw7 tc bg-light-gray dib center br3 pa2 mv6  bw2 shadow-5"}>
                <h1 className="f4 bg-white br3 br--top black-60 center mv0 pv2 ph3">Are you sure you want to delete the account?</h1>
                <div className="pa1 bt b--black-10 center">
                    <div className="pa2 w5 center">
                        <a className="f3 link dim ph3 pv1 dib white bg-gray" href="#0" onClick={(e) => this.removeAccount()}>Confirm</a>
                    </div>
                    <div className="pa2 w5 center">
                        <a className="f3 link dim ph3 pv1 dib white bg-gray" href="#0" onClick={() => onRouteChange('home')} >Cancel</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default DeleteAccount;