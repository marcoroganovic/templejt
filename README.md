## templejt - micro-templating engine
This is small client-side templating engine built using DOM manipulation and a
little bit of recursion.


### Features
You can interpolate content with `{{ propName }}`, show or hide DOM elements
conditionally using `data-if` attribute and loop though array of objects using
`data-for` attribute. If you want to interpolate content of nested object, use
`data-context`. You can also use computed properties, every function on data
object provided as context will be evaluated before interpolating.


### Demo usage

1. Simple interpolation
```javascript
let userTemplate = `
  <h1>{{ name }} { lastName }}</h1>
  <p>Username: {{ username }}</p>
  <img src="{{ avatarURL }}" alt="{{ name }}" />
`;

templejt(userTemplate, {
  name: "Jonh",
  lastName: "Doe",
  username: "doejohn",
  avatarURL: "https://gravatar.com/someplaceholder.jpg"
});
```
