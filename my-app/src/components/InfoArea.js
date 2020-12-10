import React, { Component } from "react";
import DataTable from "./DataTable";
import Nav from "./Nav";
import API from "../utils/API";
import "../styles/InfoArea.css";

export default class DataArea extends Component {
      
    state = {
        users: [{}],
        order: "descend",
        filteredUsers: [{}]
    }


    componentDidMount() {
        API.getUsers().then(results => {
            this.setState({

                users: results.data.results,
                filteredUsers: results.data.results
            });
        });
    }

 
    headings = [
        { name: "Image", width: "10%" },
        { name: "Name", width: "10%" },
        { name: "Phone", width: "20%" },
        { name: "Email", width: "20%" },
        { name: "DOB", width: "10%" }
    ]

 
    handleSort = heading => {
 
        if (this.state.order === "descend") {

            this.setState({
                order: "ascend"
            })
        } else {
            this.setState({
                order: "descend"
            })
        }

   
        const compareNames = (a, b) => {
            if (this.state.order = "ascend") {

                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }
              
                else if (heading === "name") {

                    return a[heading].first.localeCompare(b[heading].first);
                } else {
                    return a[heading] - b[heading];
                }
            } else {

                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }

                else if (heading === "name") {
                    return b[heading].first.localeCompare(a[heading].first);
                } else {
                    return b[heading] - a[heading];
                }
            }

        }
        const sortedUsers = this.state.filteredUsers.sort(compareNames);

        this.setState({ filteredUsers: sortedUsers });

        const compareEmail = (a, b) =>{
            if (this.state.order = "ascend") {

                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }

                else if (heading === "Email") {

                    return a[heading].first.localeCompare(b[heading].first);
                } else {
                    return a[heading] - b[heading];
                }
            } else {
             
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }
            
                else if (heading === "DOB") {
                    return b[heading].first.localeCompare(a[heading].first);
                } else {
                    return b[heading] - a[heading];
                }
            } 
        }
        

    }


    handleSearchChange = event => {
        console.log(event.target.value) 
        const filter = event.target.value;

        const filteredList = this.state.users.filter(item => {

            let values = Object.values(item)
                .join("")
                .toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ filteredUsers: filteredList });
    }

    render() {
        return (
            <>
                <Nav handleSearchChange={this.handleSearchChange} />
                <div className="data-area">
                    {}
                    <DataTable
                        headings={this.headings}
                        users={this.state.filteredUsers}
                        handleSort={this.handleSort}
                    />
                </div>
            </>
        );
    }
}