# Advanced-React-Redux
Following Stephen Griders Advanced React Redux online tutorial

## Testing

### What to test in React and Redux modules:

##### Components
- It shows the expected element.

Possibly the expected number of children. Be careful not to test for exact inner html (such as arbitrary copy), as the app updates, such granular tests will begin to fail and require tiresome updating.

- It performs expected tasks

For instance, it allows you to enter text into an input / textarea, or it clears input text on submission of forms

##### Reducers
- It properly handles relevant actions

Make sure reducers update the relevant piece of state as expected, and the new state returned is of the expected value.

- It doesnt throw an error or respond when irrelevant actions are dispatched.

##### Action Creators

- It produces a plain object (action) with the expected action ```type``` property.
- It produces the expected action payload.


### Enzyme

Enzyme is a testing utility for manipulating and reading the output of react components. In some ways it acts like a manipulatable DOM for the testing environment.

In most cases, before testing each component, Enzyme requires pretty much the same setup:

``` js
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });
```

By placing this code inside a ```setupTests.js``` file, directly within your ```src``` directory, Jest executes this code before running any tests. So this saves you from writing the same setup at the start of every test module.

##### Enzyme provides three different ways of rendering your components:

- ```Static``` - Rendering the component and returning its html

- ```Shallow``` - Rendering **just** the given component (but not its children)

- ```Mount``` - Full DOM rendering of a component, all its children, and letting us interact with it and modify it.

NB: ```mount``` renders a component in an actual DOM, meaning that tests from different modules may affect each other if sharing the same DOM. To avoid this, run ```unmount()``` in the teardown of your testing modules.

##### Useful enzyme methods: [(see docs)](https://airbnb.io/enzyme/)

- ``` find() ```

searches a component and its children for a given selector / search term (ie classNames: ```find('.btn-submit')```, or html elements: ```find('button')``` / ```find('li')``` etc...)

- ``` simulate() ```

- ``` prop() ```

- ``` update() ```

- ``` render() ```


##### Simulating events in testing:
1) Find component / controlled component that is meant to be listening for an event.

2) Simulate an event (eg change event, or click event).

3) (Optional) Provide a fake event object to the component.

4) Force the component to ```update()```, having received the event.\*

5) Assert that the component's value / state has updated as expected.

\* Most react event handlers trigger some kind of state update, and likely you will be testing the new, re-rendered component following this state update. React components re-render asynchronously, so you need to force the component to re-render before testing for the expected update.
