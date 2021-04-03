import React from 'react'
import { MDBContainer } from "mdbreact";
import TabsDefault from '../Tabs/Tabs';

export default function PeopleList({ name, height, mass, skin_color, eye_color, films }) {
    return (
        <div>
            <MDBContainer>
                <TabsDefault
                    name={name}
                    height={height}
                    mass={mass}
                    skinColor={skin_color}
                    eye={eye_color}
                    films={films}
                />
            </MDBContainer>
        </div>
    )
}
