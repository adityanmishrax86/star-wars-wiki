import React, { Component } from "react";
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import FilmsListContainer from '../Films/FilmsContainer'


class TabsDefault extends Component {


    state = {
        activeItem: "1"
    };

    toggle = tab => e => {
        if (this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab
            });
        }
    };

    render() {
        return (
            <MDBContainer>
                <MDBNav className="nav-tabs mt-5">
                    <MDBNavItem>
                        <MDBNavLink link to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
                            Profile
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink link to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
                            Films
                        </MDBNavLink>
                    </MDBNavItem>
                </MDBNav>
                <MDBTabContent activeItem={this.state.activeItem} >
                    <MDBTabPane tabId="1" role="tabpanel">
                        <div className="mt-4 px-3">
                            <h2>{this.props.name}</h2>
                            <br />
                            <dl className="row">
                                <dt className="col-sm-3">Height</dt>
                                <dd className="col-sm-9">{this.props.height} cms</dd>

                                <dt className="col-sm-3">Weight</dt>
                                <dd className="col-sm-9">{this.props.mass} KG</dd>


                                <dt className="col-sm-3">Skin</dt>
                                <dd className="col-sm-9">Has {this.props.skin_color} skin</dd>

                                <dt className="col-sm-3 text-truncate">Eye Color</dt>
                                <dd className="col-sm-9">Has {this.props.eye_color} eyes
                                </dd>
                            </dl>
                        </div>
                    </MDBTabPane>
                    <MDBTabPane tabId="2" role="tabpanel">
                        <div className="mt-2">
                            {this.props.films.map(item => (<FilmsListContainer key={item} url={item} name={this.props.name} />))}
                        </div>
                    </MDBTabPane>
                </MDBTabContent>
            </MDBContainer>
        );
    }
}
export default TabsDefault;