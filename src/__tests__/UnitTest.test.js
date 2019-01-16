import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })


import WrapperContainer from '../containers/WrapperContainer.js'
import NoticeComponent from '../components/NoticeComponent.js'
import ProgressComponent from '../components/ProgressComponent.js'

describe('Should be true', () => {
  it('should be true', () => {
    expect(true).to.equal(true)
  })

})


describe('default display working', () => {
  it('renders save for later button', () => {
    const wrapper = mount(<WrapperContainer />);
    expect(wrapper.find('button').text()).to.equal(' Save for Later ')
  });
  it('renders Give Now button', () => {
    const wrapper = mount(<WrapperContainer />);
    expect(wrapper.containsMatchingElement(<input type="submit" className="button" value="Give Now " />)).to.equal(true)
  });
  it('renders Tell your Friends', () => {
    const wrapper = mount(<WrapperContainer />);
    expect(wrapper.containsMatchingElement(<a href="https://www.fincura.com" target="_blank" className="tellfriends">Tell your friends</a>)).to.equal(true)
  });
  it('renders explaination Link', () => {
    const wrapper = mount(<WrapperContainer />);
    expect(wrapper.containsMatchingElement(<a href="https://www.fincura.com" target="_blank" className="why">Why give $50?</a>)).to.equal(true)
  });
  it('renders notice message', () => {
    const wrapper = mount(<WrapperContainer />);
    expect(wrapper.containsMatchingElement(<NoticeComponent dLeft={400}/>)).to.equal(true)
  });
  it('renders progress bar', () => {
    const wrapper = mount(<WrapperContainer />);
    e
    xpect(wrapper.containsMatchingElement(<ProgressComponent dPercentage={60} dLeft={400}/>)).to.equal(true)
  });

});
//
//   it('simulates click events', () => {
//     const onButtonClick = sinon.spy();
//     const wrapper = mount((
//       <Foo onButtonClick={onButtonClick} />
//     ));
//     wrapper.find('button').simulate('click');
//     expect(onButtonClick).to.have.property('callCount', 1);
//   });
//
//   it('calls componentDidMount', () => {
//     sinon.spy(Foo.prototype, 'componentDidMount');
//     const wrapper = mount(<Foo />);
//     expect(Foo.prototype.componentDidMount).to.have.property('callCount', 1);
//     Foo.prototype.componentDidMount.restore();
//   });
// });
