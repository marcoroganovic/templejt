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


let userData = {
  name: "John",
  lastName: "Doe",
  username: "doejohn",
  avatarURL: "https://gravatar.com/someplaceholder.jpg"
};

templejt(userTemplate, userData);
```
2. Conditinal rendering
```javascript
let placeholderTemplate = `
  <header></header>
  <div data-if="loggedIn">
    <div class="dashboard-content">
      <img src="somesecretpicture.jpg" />
    </div>
  </div>
  <footer></footer>
`;
```

let data = {
  loggedIn: true
}

templejt(placeholderTemplate, data);
```

3. Computed properties
```javascript
let simpleTemplate = `
  <div class="user">
    <h1>{{ formattedName }}</h1>
  </div>
`;

let data = {
  name: "jonh",
  lastName: "joe",
  formattedName: function() {
    return this.name.toUpperCase() + " " + this.lastName.toUpperCase();
  }
}

templejt(simpleTemplate, data);
```

4. Looping
```javascript
let userListTemplate = `
  <ul data-for="users">
    <li>
      <img class="avatar" src="{{ avatarURL }}" alt="{{ name }}" />
      <p class="full-name">Name: {{ name }}</h3>
      <p class="username">{{ username }}</p>
    </li>"
  </ul>
`;

let data = {
  users: [
    { 
      name: "Paul Irish", 
      username: "paulirish", 
      avatarURL: "..." 
    },
    { 
      name: "Addy Osmany",
      username: "addyosmani",
      avatarURL: "..."
    },
    {
      name: "Nicolas Zakas",
      username: "nzakas",
      avatarURL: "..."
    }
  ];
};

templejt(userListTemplate, data);
```
