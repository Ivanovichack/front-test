import React from 'react'


class LoginsGetApi extends React.Component {

    constructor() {
        super();
        this.state = {
            login: null
        }
    }

    componentDidMount() {
        fetch('http://localhost:8888/service/user/login').then((res) => {
            res.json().then((result) => {
                console.warn(result);
                this.setState({
                    login: result
                })
            })

        })

    }


    render() {
        return (
            <div>
                <div class = "row">
                    <div class = "col-md-6 offset-md-3">
                        <br/> <br/>
                        <h3 > List Logins </h3><br / >
                        <table class = "table table-bordered">
                        <tr >
                            <th > Id </th>
                            <th > Name </th>
                            <th > Primer Login </th>
                            <th > Tiempo logueado </th>
                        </tr>

            {
                this.state.login ?
                    this.state.login.map((log, i) =>
                        <tr>
                            <td > {log.id_user} </td>
                            <td > {log.name_user}</td>
                            <td > {log.date_login}</td>
                            <td > {log.time_days} </td>
                        </tr>
                    ):
                    null
            }
            </table>
            </div>
            </div>
            </div>
        )
    }
}


export default LoginsGetApi;