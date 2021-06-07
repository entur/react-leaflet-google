import React from 'react';
import { MapContainer, LayersControl } from 'react-leaflet'
import { GoogleLayer } from '../src'
import { mount } from "enzyme"
import Enzyme from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"

Enzyme.configure({ adapter: new Adapter() })

const { BaseLayer } = LayersControl;
const props = {
    googlekey: "test-key",
    maptype: "ROADMAP",
}
describe("Check if Google Layer renders", () => {
    it("Simple render of component", () => {
        const wrapper = mount(
            <MapContainer center={[42.09618442380296, -71.5045166015625]} zoom={2} zoomControl={true}>
                <LayersControl position='topright'>
                    <BaseLayer  name='Google Maps with Libraries'>
                        <GoogleLayer {...props} />
                    </BaseLayer>
                </LayersControl>
            </MapContainer>
        )
        expect((wrapper).find(GoogleLayer).prop('googlekey')).toEqual("test-key");
        expect((wrapper).find(GoogleLayer).prop('maptype')).toEqual("ROADMAP");
    })
})