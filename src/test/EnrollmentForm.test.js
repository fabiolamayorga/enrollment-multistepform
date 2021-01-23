import renderer from 'react-test-renderer';

import EnrollmentForm from '../EnrollmentForm/EnrollmentForm';

test('Test Links', () => {
    const component = renderer.create(
      <EnrollmentForm />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
    // manually trigger the callback
    tree.props.onClickNext;
    //re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
    // manually trigger the callback
    tree.props.onClickPreview;
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
