import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Test1 from './test1';

describe('<Test1 />', () => {
  beforeEach(() => {
    sinon.spy(Test1.prototype, 'buttonClick');
  });

  describe('dummy button should', () => {
    it('call the buttonClick method on click', () => {
      const wrapper = shallow(<Test1 />);
      wrapper.find('button').simulate('click');
      expect(Test1.prototype.buttonClick.calledOnce).to.equal(true);
    });
  });
});
