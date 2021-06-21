import react from 'react'
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";


describe('ProfileStatus component', ()=>{
    test('status from props should be in the state', ()=>{
        const component = create(<ProfileStatus status = 'SUBSCRIBE TO BASIC'/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('SUBSCRIBE TO BASIC')
    })

    test('input should be displayed in editMode instead of span', ()=>{
        const component = create(<ProfileStatus status = 'SUBSCRIBE TO BASIC'/>)
        const root  = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('SUBSCRIBE TO BASIC')
    })


})